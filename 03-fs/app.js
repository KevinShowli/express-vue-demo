const fs = require("fs");
const path = "./upload";
fs.stat(path, (err, data) => {
  if (err) {
    fsMkdir();
    return;
  }
  if (data.isDirectory()) {
    console.log("目录已存在！");
  } else {
    fs.unlink(path, err => {
      if (err) {
        console.log("删除文件失败！");
      } else {
        fsMkdir();
      }
    });
  }
});

function fsMkdir() {
  fs.mkdir(path, err => {
    if (err) {
      console.log("创建文件夹失败");
    } else {
      console.log("创建成功！");
    }
  });
}
