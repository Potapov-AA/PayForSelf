# vue-vite-split-the-bill

Приложение для разделения счета в кафе.

## Используемый стек
1. Vue3
2. Vite
3. Pinia
4. Vue-router
5. Vuetify

## Рекомендуемые IDE настройки 

1. [VSCode](https://code.visualstudio.com/)
2. [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)
3. [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
4. [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Настройка проекта

```sh
npm install
```

### Компиляция и Hot-Reload для разработки

```sh
npm run dev
```

### Компиляция и минификация для продакшена

```sh
npm run build
```

### Запуск в Docker

```docker
docker build -t name_your_image .
docker run -it -p 8080:8080 --rm --name name_your_container name_your_image
```