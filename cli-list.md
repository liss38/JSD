## CLI, список команд

#### 1. Установка, создание, запуск приложения
**`> npm install -g ember-cli@2.8`** - установить Embe  
**`> ember new ember-quickstart`** - создаст новую директорию под названием ember-quickstart и установит в нее новое приложение Ember  
**`> ember server --live-reload-port 49153`** - запустит сервер разработки(выполнять в корне директории приложения)  


#### 2. Разработка
**`> ember generate template application`** - создаст новый шаблон `application`  
**`> ember generate route scientists`** - создаст новый роут/маршрут `scientists`  
**`> ember generate component people-list`** - создаст новый компонент `people-list`  


#### 3. Деплой
ember build --env production  