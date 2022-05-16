/*
Описати клас для створення об'єктів згідно з варіантом. 
Описати клас для для створення відповідної колекції обєктів. Реалізувати методи:
• отримання інформації щодо одного об’єкту (за Кодом),
• отримання вибірки з колекції згідно з вказаними запитами.
• додавання одного об’єкту,
• додавання колекції об’єктів,
• редагування інформації  про вказаний об’єкт.
• видалення інформації про вказаний об’єкт.
  
11. Об’єкт “Бухгалтерія” (Код, ПІБ; посада; заробітна плата; кількість дітей; стаж).
 Запит працюючих, які обіймають посаду Х і мають не більше, ніж Y дітей.*/
 let id = 0;
 class Accounting{
    constructor(code, pib,posada, salary, k_childrens,experience) {
        this.code = code ;
        this.pib = pib;
        this.posada = posada;
        this.salary = salary;
        this.k_childrens = k_childrens;
        this.experience = experience;
        this.id = ++id;
      }
 }
 class StringAccounting extends Accounting{
    ToString() {
      return `
              ПІБ: ${this.pib}
              Посада: ${this.posada}
              Salary: ${this.salary}
              Childrens: ${this.k_childrens}
              Experience: ${this.experience}
              `;
    }
  }
  class Workers {
    constructor(){
        this.workers = [];
    }
    AddOne(elem) {
        this.workers.push(elem);
    }
    AddMore(elems) {
        elems.forEach((elem) => {
            this.workers.push(elem);
        });
    }
    Deleteel(someId) {
        this.workers.splice(someId, 1);
    }
    Edit(someId, newObject) {
        this.workers[someId] = newObject;
    }
    getById(someId) {
        return this.workers.find((elem) => elem.id == someId);
      }
    getByPosada(anyPosada) {
        return this.workers.filter((elem) => elem.posada == anyPosada);
    }
    getByK_Childrens(k_Babies) {
        return this.workers.filter((elem) => elem.k_childrens <= k_Babies);
    
    }
    getInfo(someId) {
        return this.getById(someId).ToString();
      }

  } 
let Worker1 = new StringAccounting("826751655202","Мельник Анастасія Віталіївна","вчитель,класний керівник","12 тис","22 дітей","10 років");
let Worker2 = new StringAccounting("601573325903","Бобик Ірина Олександрівна","завуч","17 тис.грн.","10 дітей","5 років");
let Worker3 = new StringAccounting("710215529773","Кулиш Олексій Іванович","директор","20 тис.грн.","17 дітей","7 років");
let Worker4 = new StringAccounting("827966337792","Шейтер Руслан Васильовичем","психолог","7 тис.грн","5 дітей","7 років");

let arr = new Workers();


arr.AddOne(Worker1 );
arr.AddOne(Worker2);
arr.AddOne(Worker3);
arr.AddOne(Worker4);
console.log(arr.getInfo(2));