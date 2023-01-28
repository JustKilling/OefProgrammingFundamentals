import fs from "fs";
import path from "path";


function purgeFile(file, {start, stop}) {
  console.log("purge", file, start, stop);
  const lines = fs.readFileSync(file, "utf8").split("\n");
  const purgedLines = lines.slice(0, start).concat(lines.slice(stop + 1));
  fs.writeFileSync(file, purgedLines.join("\n"));
}

function dirData(dir, data) {
  return {dir, data};
}
function exData(ex, data) {
  return {ex, data};
}

function collectPurgingData () {
  function collectPurgingDataForDir (dir) {

    const subDirs = fs.readdirSync(dir, {withFileTypes:true}).filter(dirent=>dirent.isDirectory()).map(dirent=>dirent.name);

    if (subDirs.length > 0){
      return subDirs.map(subDir => dirData(subDir,  collectPurgingDataForDir(path.join(dir, subDir))));
    } else {
      const exes = fs.readdirSync(dir, {withFileTypes:true})
        .filter(dirent=>dirent.isFile())
        .map(dirent=>dirent.name)
        .filter(file=>file.endsWith(".js"));
      return exes.map(ex=>exData(ex, collectPurgingDataForEx(path.join(dir, ex))));
    }
  }

  function collectPurgingDataForEx (file) {
    const lines = fs.readFileSync(file, "utf8").split("\n");
    const start = lines.indexOf("// SOLUTION");
    const stop = lines.lastIndexOf("// SOLUTION");

    if (start < 0) {
      console.log(file, "loc:" + lines.length, start, stop);
      return "PURGED";
    } else if (start === stop) {
      console.log(file, "loc:" + lines.length, start, stop);
      return "MISSING";
    } else {
      return {start, stop};
    }

  }

  return dirData("exercises",collectPurgingDataForDir("exercises"));
}

function filterInvalidData(data) {
  if (data.dir) {
    const filtered = data.data.map(filterInvalidData).filter(x=>x);
    return (filtered.length > 0) && dirData(data.dir, filtered);
  } else if (data.ex) {
    return !data.data.start && data;
  } else {
    throw new Error("Unexpected data:" + JSON.stringify(data));
  }
}

function doPurge(data, root = "") {
  if (data.dir) {
    data.data.forEach(e=>doPurge(e, path.join(root, data.dir)));
  } else if (data.ex) {
    purgeFile(path.join(root, data.ex), data.data);
  } else {
    throw new Error("Unexpected data:" + JSON.stringify(data));
  }
}

function purge() {
  console.log("Purging this repo from solutions ...");
  const data = collectPurgingData();
  const invalid = filterInvalidData(data);
  if (invalid) {
    console.log("First fix the following files before purging:");
    console.log(JSON.stringify(invalid, null, 2));
  } else {
    doPurge(data);
  }
}

purge();
