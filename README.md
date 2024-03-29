# Weather Today App

## [Онлайн пример на Codesandbox](https://codesandbox.io/s/easy-weather-today-app-kqqp38?file=/src/index.js)

## Стек технологий

React (useState, useEffect, useCallback, useMemo)

## Описание

- Fetch данных из Weatherapi API (https://www.weatherapi.com/)
- Также поиск по городам проходит через массив Geonames API (https://www.geonames.org/), данные которого передаются в первый API
- Поиск создаёт список из 4х подходящих городов
- Изменение погоды влияет на изменение иконки (https://github.com/basmilius/weather-icons)
- Присутствует переключатель с Цельсия на Фаренгейт и обратно
- Индикаторы представлены в виде объектов массива, которые обёрнуты в функцию, которая принимает аргументы - это всё замыкается. Перебор происходит внутри компонента Indicator. Данный метод позволяет сделать чтение кода более лёгким
- Данные между компонентами передаются props`ами
- Некоторые вычисления внутри компонентов происходят с использованием унарных операторов
- Используются хуки, которые предотвращают повторения вычислений
- Также есть псевдонимы путей в jsconfig`e

## Запуск

- Прежде нужно установить зависимости `npm install` `ом
- Далее запуск приложения происходит обычным `npm start` в режиме разработки
- Для его просмотра откройте http://localhost:3000 в своём браузере
- Страница будет перезапускаться, когда вы вносите изменения
- Вы также можете увидете ошибки в консоли
