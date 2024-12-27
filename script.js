<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Автомобильный сайт</title>
    <link rel="stylesheet" href="styles.css"> <!-- Подключение CSS для стилей -->
    <style>
        /* Стили для кнопки и скрытого текста */
        .car-details {
            display: none;
            margin-top: 10px;
        }

        .toggle-button {
            cursor: pointer;
            background-color: #333;
            color: white;
            border: none;
            padding: 10px;
            text-align: left;
            width: 100%;
        }
    </style>
</head>
<body>
    <header>
        <h1>Добро пожаловать на наш автомобильный сайт</h1>
        <nav>
            <ul>
                <li><a href="#about">О нас</a></li>
                <li><a href="#cars">Список автомобилей</a></li>
                <li><a href="#gallery">Галерея</a></li>
                <li><a href="#contact">Контакты</a></li>
            </ul>
        </nav>
    </header>

    <section id="about">
        <h2>О нас</h2>
        <p>Мы предоставляем лучшие услуги по продаже и обслуживанию автомобилей.</p>
    </section>

    <section id="cars">
        <h2>Список автомобилей</h2>

        <div>
            <button class="toggle-button">BMW E60</button>
            <div class="car-details">
                <p>Год выпуска: 2007</p>
                <p>Цена: 700,000 руб.</p>
                <p>Пробег: 120,000 км</p>
                <p>Цвет: Черный</p>
                <p>Двигатель: 3.0 л, бензин</p>
            </div>
        </div>

        <div>
            <button class="toggle-button">Audi A6</button>
            <div class="car-details">
                <p>Год выпуска: 2010</p>
                <p>Цена: 900,000 руб.</p>
                <p>Пробег: 80,000 км</p>
                <p>Цвет: Серебристый</p>
                <p>Двигатель: 2.0 л, дизель</p>
            </div>
        </div>

        <div>
            <button class="toggle-button">Mercedes-Benz C-Class</button>
            <div class="car-details">
                <p>Год выпуска: 2015</p>
                <p>Цена: 1,200,000 руб.</p>
                <p>Пробег: 50,000 км</p>
                <p>Цвет: Белый</p>
                <p>Двигатель: 1.6 л, бензин</p>
            </div>
        </div>

    </section>

    <section id="gallery">
        <h2>Галерея</h2>
        <p>Посмотрите на наши автомобили:</p>
        <img src="car1.jpg" alt="Автомобиль 1" width="300">
        <img src="car2.jpg" alt="Автомобиль 2" width="300">
        <img src="car3.jpg" alt="Автомобиль 3" width="300">
    </section>

    <section id="contact">
        <h2>Контакты</h2>
        <p>Email: info@autosite.com</p>
        <p>Телефон: +7 (123) 456-7890</p>
    </section>

    <footer>
        <p>&copy; 2024 Автомобильный сайт. Все права защищены.</p>
    </footer>

    <script>
        // JavaScript для добавления эффекта раскрытия
        document.querySelectorAll('.toggle-button').forEach(button => {
            button.addEventListener('click', () => {
                const details = button.nextElementSibling;
                details.style.display = details.style.display === 'block' ? 'none' : 'block';
            });
        });
    </script>
</body>
</html>