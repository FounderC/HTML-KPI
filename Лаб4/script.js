// Завдання 1
let travelAgency = {
  назва: "",
  адрес: "",
  телефон: ""
};

function createTravelAgency() {
  travelAgency = {
    назва: "Founder",
    адрес: "Вул. Перемога",
    телефон: "000-000-00-00"
  };
  console.log(travelAgency);
}

// Завдання 2
let tour = {
  Город: "",
  Ціна: 0,
  "Кількість днів": 0,
  порахуватиВартість: function () {
    return this.Ціна * this["Кількість днів"];
  },
  змінитиЦіну: function (newPrice) {
    this.Ціна = newPrice;
  },
  вивести: function () {
    console.log(this);
  }
};

function createTour() {
  // Запит користувача на введення даних для об'єкта "Путівка"
  const city = prompt("Введіть назву города:");
  const price = parseFloat(prompt("Введіть ціну:"));
  const days = parseInt(prompt("Введіть кількість днів:"));

  if (!isNaN(price) && !isNaN(days) && city) {
    // Ініціалізація об'єкта "Путівка" з введеними даними
    tour = {
      Город: city,
      Ціна: price,
      "Кількість днів": days,
      порахуватиВартість: function () {
        return this.Ціна * this["Кількість днів"];
      },
      змінитиЦіну: function (newPrice) {
        this.Ціна = newPrice;
      },
      вивести: function () {
        console.log(this);
      }
    };

    // Виклик функції порахування вартості та виведення результату
    const totalCost = tour.порахуватиВартість();
    console.log(`Загальна вартість путівки: ${totalCost}`);
  } else {
    alert("Будь ласка, введіть коректні дані.");
  }
}

// Завдання 3
function combineProperties() {
  let combinedObject = Object.assign({}, travelAgency, tour);
  console.log(combinedObject);
}

// Завдання 4
function addShowDataMethod() {
  function showData() {
    console.log(this);
  }

  travelAgency.показатиДані = showData;
  travelAgency.показатиДані();
}

// Завдання 5
let department = Object.create(travelAgency);
department.Адрес = "";

department.показатиДані = function () {
  console.log(this);
};

function createDepartment() {
  department.назва = "Відділ адміністрування";
  department.Адрес = "Вул. Победа";
  department.телефон = "000-000-00-00";
  department.показатиДані();
}

// Завдання 6
class ТурфірмаКлас {
  constructor() {
    this.назва = "";
    this.адрес = "";
    this.телефон = "";
  }

  показатиДані() {
    console.log(this);
  }
}

class ВідділКлас extends ТурфірмаКлас {
  constructor() {
    super();
    this.Адрес = "";
  }

  показатиДані() {
    console.log(this);
  }
}

function createClassObjects() {
  const travelAgencyClass = new ТурфірмаКлас();
  travelAgencyClass.назва = "Shadow";
  travelAgencyClass.адрес = "Вул. Тіньова";
  travelAgencyClass.телефон = "000-000-00-00";
  travelAgencyClass.показатиДані();

  const departmentClass = new ВідділКлас();
  departmentClass.назва = "Відділ розробників";
  departmentClass.Адрес = "Вул. Амиго";
  departmentClass.телефон = "000-000-00-00";
  departmentClass.показатиДані();
}