# CRM Lead Processing System

Система обработки клиентских заявок (лидов) на Node.js с TypeScript.

## Быстрый старт

### Локальный запуск

```bash
# Установка зависимостей
npm install

# Сборка проекта
npm run build

# Запуск обработки лидов
npm start
```

### Docker запуск

```bash
# Запуск одной командой
docker-compose up --build
```


## Архитектура

- **LeadGenerator** - генератор тестовых лидов
- **LeadProcessor** - обработчик лидов с эмуляцией тяжелых операций
- **Logger** - система логирования в CSV формат

## Формат логов

Результаты сохраняются в файл `leads-processed.csv` в формате:
```
id,category,datetime
1,sport,2025-01-01 12:00:00
2,finance,2025-01-01 12:00:02
```

##  Команды

```bash
npm run build    # Сборка TypeScript
npm start        # Запуск приложения
npm run dev      # Сборка + запуск
npm run lint     # Проверка кода
npm run format   # Форматирование кода
```

##  Конфигурация

- **ESLint** - проверка качества кода
- **Prettier** - форматирование кода
- **TypeScript** - типизация
- **p-limit** - ограничение параллельных операций

##Структура проекта

```
src/
├── main.ts              # Главный файл приложения
├── lead-generator.ts    # Генератор лидов
├── lead-processor.ts    # Обработчик лидов
├── logger.ts           # Система логирования
└── types/
    └── lead.ts         # Типы данных
```