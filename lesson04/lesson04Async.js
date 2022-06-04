const fse = require('fs-extra');

const dir1 = './newFolder1';
const dir2 = './newFolder2';
const dir3 = './newFolder3';
const file = '/newFile1.txt';


//Создать папку 1;
fse.emptyDir(dir1, err => {
  if (err) return console.error(err)
  console.log('success 1!')

  //Создать папку 2;
  fse.emptyDir(dir2, err => {
    if (err) return console.error(err)
    console.log('success 2!')

    // Создать текстовый файл в папке 1;
    fse.ensureFile(dir1 + file, err => {
      console.log('file is created')

      // Переместить файл из первой папки во вторую;
      fse.move(dir1 + file, dir2 + file, err => {
        if (err) return console.error(err)
        console.log('success! file is moved')

        //Создать папку 3;
        fse.emptyDir(dir3, err => {
          if (err) return console.error(err)
          console.log('success 3!')

          // Скопировать файл из второй папки в третью;:
          fse.copy(dir2 +file, dir3 + file, err => {
            if (err) return console.error(err)
            console.log('success! file is copied to the dir3')

            // Удалить файл из второй папки;
            fse.remove(dir2 + file, err => {
              if (err) return console.error(err)
              console.log('success! removed file from dir2')

              // Удалить файл из третьей папки;
              fse.remove(dir3 + file, err => {
                if (err) return console.error(err)
                console.log('success! removed file from dir3')

                // Удалить первую папку;
                fse.remove(dir1, err => {
                  if (err) return console.error(err)
                  console.log('success! removed dir1')

                  // Удалить вторую папку;
                  fse.remove(dir2, err => {
                    if (err) return console.error(err)
                    console.log('success! removed dir2')

                    // Удалить третью папку;
                    fse.remove(dir3, err => {
                      if (err) return console.error(err)
                      console.log('success! removed dir3')
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});