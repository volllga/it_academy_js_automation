const fse = require("fs-extra");

const dir1 = "./newFolder1";
const dir2 = "./newFolder2";
const dir3 = "./newFolder3";
const file = "/newFile1.txt";

fse.ensureDirSync(dir1);
fse.ensureFileSync(dir1 + file);
fse.ensureDirSync(dir2);
fse.moveSync(dir1 + file, dir2 + file); // создаст папку, если ее нет
fse.ensureDirSync(dir3);
fse.copySync(dir2 + file, dir3 + file); // создаст папку, если ее нет

fse.removeSync(dir1 + file); // If the path does not exist, silently does nothing.
fse.removeSync(dir2 + file);
fse.removeSync(dir3 + file);

fse.removeSync(dir1);
fse.removeSync(dir2);
fse.removeSync(dir3);

