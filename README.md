Домашнее задание - Занятие 3


1. Установить git;
2. Создать аккаунт на github;
3. Создать и Привязать ssh ключ к аккаунту;
4. Создать новый репозиторий;
5. создать новую ветку
6. добавить файл в проект и изменить readme.md;
7. сохранить, запушить в гит;
8. сделать пул реквест в мастер/мейн бранч
9. прислать ссылку на пул реквест ответом на это письмо, ничего не меняя в теме письма, ничего туда не добавляя, просто ответом на это письмо!
максимально 7 

ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

eval "$(ssh-agent -s)"

ssh-add ~/.ssh/id_ed25519

create repo

git clone "your repo address"

git checkout -b lesson3

git add .

git commit -m "smth"

git push

nano README.md
