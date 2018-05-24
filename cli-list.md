## CLI, список команд

#### 1. Установка, создание, запуск приложения
**`> npm install -g ember-cli@2.8`** - установить Ember  
**`> ember new ember-quickstart`** - создаст новую директорию под названием ember-quickstart и установит в нее новое приложение Ember  
**`> ember server --live-reload-port 49153`** - запустит сервер разработки(выполнять в корне директории приложения)  



#### 2. Разработка
**`> ember generate template application`** - создаст новый шаблон `application`  
**`> ember generate route scientists`** - создаст новый роут/маршрут `scientists`  
**`> ember generate component people-list`** - создаст новый компонент `people-list`  
**`> ember generate model rental`** - создаст новую модель `rental`  
**`> ember generate acceptance-test list-rentals`** - сгенерирует новый приёмочный тест с названием `list-rentals`  
**`> ember test --server`** - запустит набор тестов  
**`> ember generate helper rental-property-type`** - сгенерирует хелпер для `rental-property-type`(создаст хэлпер и его тест)  
**`> `** -   
**`> `** -   


#### 3. Деплой
**`> ember build --env production`** - создаст все объединенные и минифицированные ресурсы в директории приложения `dist/`  


#### 4. Дополнительно
**`> ember -v`** - номер версии  
**`> ember –help`** - список команд `Ember CLI`  
**`> ember help <название_команды>`** - подробная информацию по конкретной команде  
**`> `** -   
**`> `** -   