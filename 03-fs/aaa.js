const fs = require("fs");

function isDir(path) {
  return new Promise((resolve, reject) => {
    fs.stat("./node_modules/" + path, (err, data) => {
      if (err) {
        reject();
        console.log(err);
      } else {
        if (data.isDirectory()) {
          resolve(true);
          return;
        }
      }
    });
  });
}

function main() {
  var dirArr = [];
  fs.readdir("./node_modules", async (err, data) => {
    if (err) {
      console.log(err);
    } else {
      for (let i = 0; i < data.length; i++) {
        // let a = await isDir(data[i]);
        // console.log(a);
        if (await isDir(data[i])) {
          dirArr.push(data[i]);
        }
      }
      console.log(dirArr);
    }
  });
}

main();
