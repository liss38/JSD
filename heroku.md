## Heroku CLI

 > `heroku -v` - проверка версии 
 > `heroku -h`
 > `heroku login`  -  авторизоваться под своей учётной записью Heroku


 > `heroku create`  -  создать приложение
 > `heroku open`  -  откроет страницу с приложением в браузере
 > `git push heroku master`  -  отправить код приложения на сервер
 > `heroku logs --tail`  -  посмотреть логи сервера


 > `npm i`  -  установка пакетов приложения
 > `heroku local web`  -  запуск приложения локально






## Procfile

**Procfile**  -  это файл, который читается сервером, для того чтобы узнать, с какой команды необходимо начать текущее приложение.

Procfile

```
	web: node index.js
```

приложение запускается с команды `node index.js`



> **задача:** успешно синхронизировать локальное и удаленное окружение для приложения



## Push local changes

 >  что-то делаем

 > затем
 `git add .`
 `git commit -m "Add cool face API"`
 `git push heroku master`
 `heroku open cool`  -  откроет приложение сразу на роуте /cool например `https://sheltered-fortress-94418.herokuapp.com/cool`

 // ﴾͡๏̯͡๏﴿


## Установка аддонов:

 > `heroku addons:create papertrail`  -  установит papertail
 > `heroku addons`  -  список установленных аддонов
 > `heroku addons:open papertrail`  



## config vars

 > `heroku config:set TIMES=2`  -  установать переменную `TIMES` со значением 2 на удаленном сервере приложения
 > `heroku config`  -  отобразит список существующих переменных окружения и их значения, используемых на удаленном сервере приложения




## Подключение базы данных

 > `heroku addons:create heroku-postgresql:hobby-dev`   -  установить аддон
 > `npm install pg`

 > `heroku config`  ->  `DATABASE_URL: .........` адрес для БД