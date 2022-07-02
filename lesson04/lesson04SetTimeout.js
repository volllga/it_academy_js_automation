const fse = require("fs-extra");

const dir1 = "./newFolder1";
const dir2 = "./newFolder2";
const dir3 = "./newFolder3";
const file = "/newFile1.txt";


//Создать папку 1;
fse.emptyDir(dir1, err => {
  if (err) return console.error(err);
  console.log("success 1!");
});

//Создать папку 2;
fse.emptyDir(dir2, err => {
  if (err) return console.error(err);
  console.log("success 2!");
});

// Создать текстовый файл в папке 1;
fse.ensureFile(dir1 + file, err => {
  console.log("file is created");
});

// Переместить файл из первой папки во вторую;
setTimeout(() => {

  fse.move(dir1 + file, dir2 + file, err => {
    if (err) return console.error(err);
    console.log("success! file is moved");
  });

}, 1000);