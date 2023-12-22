const questions = [
    // Easy
    {
        level: "easy",
        type: "radio",
        question: "Як правильно оголосити контейнер Flexbox у CSS?",
        options: ["display: flexbox;", "display: flex;", "flex-direction: column;", "flex-container: true;"],
        correctAnswer: "display: flex;"
      },
    {
        level: "easy",
        type: "radio",
        question: "Що робить властивість flex-grow?",
        options: ["Визначає напрямок росту елемента", "Задає кількість вільного простору для розташування елемента", "Задає пропорційне збільшення елемента", "Визначає порядок розташування елементів"],
        correctAnswer: "Задає пропорційне збільшення елемента"
    },
    {
        level: "easy",
        type: "radio",
        question: "Яка властивість визначає основну ось Flexbox?",
        options: ["flex-direction", "flex-wrap", "flex-flow", "justify-content"],
        correctAnswer: "flex-direction"
    },
    {
        level: "easy",
        type: "radio",
        question: "Як розташувати елементи в середині контейнера Flexbox по горизонталі?",
        options: ["align-items: center;", "justify-content: center;", "align-content: center;", "flex-align: center;"],
        correctAnswer: "justify-content: center;"
    },
    {
        level: "easy",
        type: "radio",
        question: "Як визначити порядок відображення елементів в Flexbox?",
        options: ["order", "flex-order", "display-order", "order-flex"],
        correctAnswer: "order"
    },
    {
        level: "easy",
        type: "checkbox",
        question: "Які властивості визначають ширину і висоту елемента в Flexbox?",
        options: ["width", "height", "flex-basis", "size"],
        correctAnswer: ["width", "height", "flex-basis"]
    },
    {
        level: "easy",
        type: "select",
        question: "Як вирівняти елементи по вертикалі в контейнері Flexbox?",
        options: ["align-items: center;", "justify-content: center;", "align-content: center;", "flex-align: center;"],
        correctAnswer: "align-items: center;"
    },
    {
        level: "easy",
        type: "select",
        question: "Як вирівняти елементи по горизонталі в контейнері Flexbox?",
        options: ["align-items: center;", "justify-content: center;", "align-content: center;", "flex-align: center;"],
        correctAnswer: "justify-content: center;"
    },
    {
        level: "easy",
        type: "dragdrop",
        question: "Поставте вірні властивості в порядку, щоб визначити напрямок основної осі Flexbox:",
        options: ["flex-direction", "justify-content", "align-items", "flex-wrap"],
        correctOrder: ["flex-direction", "justify-content", "align-items", "flex-wrap"]
    },
    {
        level: "easy",
        type: "dragdrop",
        question: "Поставте вірні властивості в порядку, щоб визначити порядок розташування елементів в Flexbox:",
        options: ["order", "flex-basis", "align-items", "justify-content"],
        correctOrder: ["order", "flex-basis", "align-items", "justify-content"]
    },
    {
        level: "easy",
        type: "select",
        question: "Який тег HTML використовується для створення гіперпосилання?",
        options: ["<div>", "<a>", "<img>", "<p>"],
        correctAnswer: "<a>"
    },    

    // Medium
    {
        level: "medium",
        type: "radio",
        question: "Як правильно оголосити медіа-запит для екранів шириною 600px і більше?",
        options: ["@media screen and (min-width: 600px)", "@media (width: 600px)", "@media only screen and (min-width: 600px)", "@media (min-width: 600px)"],
        correctAnswer: "@media screen and (min-width: 600px)"
    },
    {
        level: "medium",
        type: "radio",
        question: "Як визначити адаптивні стилі для елемента Flexbox?",
        options: ["flex: 1;", "media-query: flexbox;", "display: flex;", "flexbox: adaptive;"],
        correctAnswer: "display: flex;"
    },
    {
        level: "medium",
        type: "radio",
        question: "Що таке гнучкі контейнери в адаптивному веб-дизайні?",
        options: ["Контейнери, які можуть змінювати свою ширину відповідно до вмісту", "Контейнери, які можуть взаємодіяти з Flexbox", "Контейнери, які мають гнучку верстку для різних пристроїв", "Контейнери, які підтримують анімацію Flexbox"],
        correctAnswer: "Контейнери, які можуть змінювати свою ширину відповідно до вмісту"
    },
    {
        level: "medium",
        type: "checkbox",
        question: "Які властивості використовуються для центрування елементів в Flexbox?",
        options: ["align-items", "justify-content", "align-self", "flex-align"],
        correctAnswer: ["align-items", "justify-content", "align-self"]
    },
    {
        level: "medium",
        type: "checkbox",
        question: "Які є основні принципи адаптивного веб-дизайну?",
        options: ["Гнучкі контейнери", "Медіа-запити", "Гнучкі зображення", "Шрифти, що змінюють розмір"],
        correctAnswer: ["Гнучкі контейнери", "Медіа-запити", "Гнучкі зображення"]
    },
    {
        level: "medium",
        type: "select",
        question: "Як визначити стилі для екранів шириною від 600px до 900px?",
        options: ["@media (min-width: 600px) and (max-width: 900px)", "@media screen and (width >= 600px) and (width <= 900px)", "@media only screen and (min-width: 600px) and (max-width: 900px)", "@media (width >= 600px) and (width <= 900px)"],
        correctAnswer: "@media (min-width: 600px) and (max-width: 900px)"
    },
    {
        level: "medium",
        type: "select",
        question: "Як визначити максимальну ширину для елемента Flexbox?",
        options: ["max-width: flex;", "max-flex: 100%;", "flex: 0 0 auto; max-width: 100%;", "flex-basis: 100%; max-width: auto;"],
        correctAnswer: "flex: 0 0 auto; max-width: 100%;"
    },
    {
        level: "medium",
        type: "dragdrop",
        question: "Поставте вірні властивості в порядку, щоб центрувати елементи Flexbox по горизонталі та вертикалі:",
        options: ["align-items", "justify-content", "align-self", "flex-align"],
        correctOrder: ["align-items", "justify-content", "align-self", "flex-align"]
    },
    {
        level: "medium",
        type: "dragdrop",
        question: "Поставте вірні властивості в порядку, щоб зробити елементи Flexbox адаптивними для екранів шириною від 300px до 600px:",
        options: ["@media (min-width: 300px) and (max-width: 600px)", "@media screen and (width >= 300px) and (width <= 600px)", "@media only screen and (min-width: 300px) and (max-width: 600px)", "@media (width >= 300px) and (width <= 600px)"],
        correctOrder: ["@media (min-width: 300px) and (max-width: 600px)"]  
    },
    {
        level: "medium",
        type: "select",
        question: "Яка властивість CSS використовується для зміни кольору тексту?",
        options: ["color", "font-color", "text-color", "font"],
        correctAnswer: "color"
    },    
    // Hard
    {
        level: "hard",
        type: "radio",
        question: "Що таке 'резиновий дизайн' в адаптивному веб-дизайні?",
        options: ["Спосіб створення гумового враження на сайті", "Використання гнучких зображень", "Створення елементів, які можуть розтягуватися і стискуватися відповідно до розміру екрану", "Використання гнучких шрифтів"],
        correctAnswer: "Створення елементів, які можуть розтягуватися і стискуватися відповідно до розміру екрану"
    },
    {
        level: "hard",
        type: "radio",
        question: "Як визначити стилі для екранів шириною від 1200px і більше?",
        options: ["@media screen and (min-width: 1200px)", "@media (width: 1200px)", "@media only screen and (min-width: 1200px)", "@media (min-width: 1200px)"],
        correctAnswer: "@media screen and (min-width: 1200px)"
    },
    {
        level: "hard",
        type: "checkbox",
        question: "Які властивості використовуються для створення гнучкого контейнера в адаптивному веб-дизайні?",
        options: ["width: 100%;", "max-width: 1200px;", "margin: 0 auto;", "flex: 1;"],
        correctAnswer: ["width: 100%;", "max-width: 1200px;", "margin: 0 auto;", "flex: 1;"]
    },
    {
        level: "hard",
        type: "checkbox",
        question: "Які є переваги використання 'mobile-first' підходу в адаптивному веб-дизайні?",
        options: ["Зменшення завантаження сторінки для мобільних користувачів", "Краща оптимізація для пошукових систем", "Підвищення швидкості завантаження", "Вища конверсія для більших екранів"],
        correctAnswer: ["Зменшення завантаження сторінки для мобільних користувачів", "Краща оптимізація для пошукових систем", "Підвищення швидкості завантаження"]
    },
    {
        level: "hard",
        type: "select",
        question: "Як визначити мінімальну ширину для елемента Flexbox?",
        options: ["min-width: flex;", "min-flex: 100%;", "flex: 0 0 auto; min-width: 100%;", "flex-basis: 100%; min-width: auto;"],
        correctAnswer: "flex: 0 0 auto; min-width: 100%;"
    },
    {
        level: "hard",
        type: "select",
        question: "Як визначити максимальний розмір шрифту для елемента в адаптивному веб-дизайні?",
        options: ["font-size: max;", "max-font-size: 18px;", "font-size: 18px; max-size: 20px;", "font-size: 18px; max-font-size: 20px;"],
        correctAnswer: "font-size: 18px; max-font-size: 20px;"
    },
    {
        level: "hard",
        type: "select",
        question: "Як визначити стилі для екранів шириною від 1200px і більше?",
        options: ["@media screen and (min-width: 1200px)", "@media (width: 1200px)", "@media only screen and (min-width: 1200px)", "@media (min-width: 1200px)"],
        correctAnswer: "@media screen and (min-width: 1200px)"
    },
    {
        level: "hard",
        type: "select",
        question: "Який селектор CSS використовується для вибору елементів з певним атрибутом?",
        options: ["[attribute]", ".attribute", "#attribute", "attribute"],
        correctAnswer: "[attribute]"
    },    
];

shuffleOptions();

function shuffleOptions() {
    for (const question of questions) {
        question.options = shuffleArray(question.options);
    }
}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}