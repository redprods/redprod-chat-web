## Getting Started

First, run the development server:
```bash
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Stack

* Next(React)
* Go
  
## Framework

* props-type
* framer-motion
* stylelint
* react-tostify
* ky

## Архитектура приложения

* > src
* > app(Тут будут папки с роутом)
* >assets
* >components
* >constants
* >hooks
* >utils


## Порядок import(СЛЕДИТЬ!!!)

1. Импорт React.
2. Импорт библиотек (в алфавитном порядке).
3. Компоненты
4. Различные функции хэлперы
5. Команды вида `import * as`.
6. Константы
7. Типы
8. Картинки
9. Стили



### **Используйте `PascalCase`
для названия файлов, например,`ReservationCard.js`

## Создания компонента
Он автоматически создает Lazy file + scss файл + index
``` yarn cpn <NameComponent> ```