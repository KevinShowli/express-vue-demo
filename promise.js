const fs = require("fs");
console.log("1");

let p1 = new Promise((resolve, reject) => {
  console.log("2");
  fs.readFile("./Node.js.md", "utf8", (err, data) => {
    console.log('3');
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

let p2 = new Promise((resolve, reject) => {
  fs.readFile("./Node.js.md", "utf8", (err, data) => {
    console.log('4');
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
})

let p3 = new Promise((resolve, reject) => {
  fs.readFile("./Node.js.md", "utf8", (err, data) => {
    console.log('5');
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
})

p1.then(data => {
  console.log('p1 success');
  return p2
},e => {

}).then(data => {
  console.log('p2 success');
  return p3
}).then( data => {
  console.log('p3 success');
})

