# 📋 Приложение Управления Пользователями/User Management App

Посмотреть проект в браузере: https://user-management-9qiibiyhc-oldnesss-s-projects.vercel.app/

## 🚀 Описание проекта

Простое React-приложение для управления списком пользователей с возможностью добавления, редактирования и удаления пользователей. Проект использует современный стек технологий и следует принципам чистой архитектуры.

## ✨ Возможности

- Добавление новых пользователей
- Просмотр списка пользователей
- Редактирование информации о пользователях
- Удаление пользователей
- Валидация данных при создании и редактировании
- Локальное хранение данных через localStorage

## 🛠 Технологический стек

- React
- TypeScript
- Tailwind CSS
- Lucide React (иконки)
- Context API
- LocalStorage

## 📦 Установка и запуск

1. Клонируйте репозиторий
```bash
git clone https://github.com/your-username/user-management-app.git
```

2. Установите зависимости
```bash
npm install
```

3. Запустите проект
```bash
npm start
```

## 📂 Структура проекта

```
src/
├── components/
│   ├── UI/
│   │   ├── Button.tsx
│   │   └── Input.tsx
│   └── User
│         ├── UserDetails.tsx
│         ├── UserForm.tsx
│         ├── UserFormUniversal.tsx
│         └── UserList.tsx
├── context/
│   └── UserContext.tsx
├── hooks/
│   └── useUserContext.tsx
├── services/
│   ├── UserService.ts
│   └── ValidationService.ts
└── types/
    └── User.interface.ts
```

## 🔍 Основные компоненты

- **UserContext**: Управление состоянием пользователей
- **UserForm**: Форма создания нового пользователя
- **UserFormUniversal**: Переиспользуемая форма
- **UserList**: Список существующих пользователей
- **UserDetails**: Детальная информация о выбранном пользователе

## 🧪 Валидация

Встроенный сервис валидации проверяет:
- Обязательность полей
- Корректность email
- Наличие необходимых данных

## 💾 Хранение данных

Данные хранятся в LocalStorage с использованием собственного сервиса `LocalStorageService`


