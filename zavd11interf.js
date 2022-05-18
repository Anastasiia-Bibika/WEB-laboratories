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
    let index = this.workers.findIndex((elem) => elem.id == someId);
    if (index == -1) throw "Not found worker";
    this.workers.splice(someId, 1);

    }
    Edit(someId, newObject) {
        let oldObj = this.workers.findIndex((elem) => elem.id == someId);
        this.workers[someId] = newObject;
        this.workers[oldObj].id = someId;
        id--;
    }
    getById(someId) {
        return this.workers.find((elem) => elem.id == someId);
      }
    getByPosada(anyPosada) {
        return [...this.workers.filter((elem) => elem.posada == anyPosada)];
    }
    getByK_Childrens(k_Babies) {
        return [...this.workers.filter((elem) => elem.k_childrens <= k_Babies)];
    
    }
    getInfo(someId) {
        return this.getById(someId).ToString();
      }
    getAllWorkers() {
        return [...this.workers];
    }
  } 

class VisualWorkers extends Workers{
    WorkersToHTML(worker) {
        return `
          <tr>
          <td>
          ${worker.id}
          </td>
          <td>
              ${worker.code}
          </td>
          <td>
              ${worker.pib}
          </td>
          <td>
              ${worker.posada}
          </td>
          <td>
              ${worker.salary}
          </td>
          <td>
              ${worker.k_childrens}
          </td>
          <td>
              ${worker.experience}
          </td>
          <td> 
              <button onclick="DeleteUser(${worker.id})">
                  Delete
              </button>
          </td>
          <td> 
              <button onclick="StartEditUser(${worker.id})">
                  Edit
              </button>
          </td>
          </tr>
        `;
      }
    WorkersTableToHTML(){
        let rows = "";
        for (let worker of this.getAllWorkers()){
            rows += this. WorkersToHTML(worker); 
        }
        return `
        <table>
            <tr>
                <th>
                    ID
                </th>
                <th>
                    Code
                </th>
                <th>
                    ПІБ
                </th>
                <th>
                    Posada
                </th>
                <th>
                    Salary
                </th>
                <th>
                    Childrens
                </th>
                <th colspan="2">
                    Actions
                </th>
            </tr>
            ${rows}
        </table>
        <br>
        <button type="button" onclick="ShowAddWorker()">
            Add worker
        </button>
    `;
  }
  addFormToHTMLWorker() {
    return ` 
        <div id="add">
            <form name="addForm" method="post" action="#">
                <h3> Add Worker </h3>
                <input name="code" placeholder="code"> 
                <input name="pib" placeholder="pib"> 
                <input name="posada" placeholder="posada">
                <input name="salary" placeholder="salary">
                <input name="Childrens" placeholder="childrens">
                <button type="button" onclick="AddNewWorker()">
                    Save
                </button>
            </form>
        </div>
    `;
  }
  editFormToHTML() {
    return ` 
        <div id="edit">
            <form name="editForm" method="post" action="#">
                <h3> Edit User </h3>
                <input name="id" type="hidden">
                <input name="code" placeholder="code"> 
                <input name="pib" placeholder="pib"> 
                <input name="posada" placeholder="posada">
                <input name="salary" placeholder="salary">
                <input name="Childrens" placeholder="childrens">
                <button type="button" onclick="EditWorker()">
                    Save
                </button>
            </form>
        </div>
    `;
  }
  toHTML() {
    return (
      arr.WorkersTableToHTML() + this.addFormToHTMLWorker() + this.editFormToHTML()
    );
  }
  addEventListners() {
    document.addEventListener("deleteWorker", (event) => {
      super.delete(event.detail.id);
      document.getElementById("root").innerHTML = this.toHTML();
    });
    document.addEventListener("addWorker", (event) => {
        super.AddOne(
          new StringAccounting(
            event.detail.code,
            event.detail.pib,
            event.detail.posada,
            event.detail.salary,
            event.detail.k_childrens,
          )
        );
        document.getElementById("root").innerHTML = this.toHTML();
      });
      document.addEventListener("editWorker", (event) => {
        super.edit(
          event.detail.id,
          new StringifyDAI(
            event.detail.code,
            event.detail.pib,
            event.detail.posada,
            event.detail.salary,
            event.detail.k_childrens,
          )
        );
        document.getElementById("root").innerHTML = this.toHTML();
      });
    }
}
function deleteWorker(id) {
    let deleteUserEvent = new CustomEvent("deleteWorker", { detail: { id } });
    document.dispatchEvent(deleteWorkerEvent);
}
function AddNewWorker() {
    const code = document.getElementsByName("code")[0].value;
    const pib = document.getElementsByName("pib")[0].value;
    const posada = document.getElementsByName("posada")[0].value;
    const salary = document.getElementsByName("salary")[0].value;
    const k_childrens = document.getElementsByName("k_childrens")[0].value;
    let addUserEvent = new CustomEvent("addWorker", {
      detail: {
        code,
        pib,
        posada,
        salary,
        k_childrens,
      },
    });
    document.dispatchEvent(addWorkerEvent);
}
function ShowAddWorker() {
    document.getElementById("add").style.display = "block";
    document.getElementById("edit").style.display = "none";
}
function EditUser() {
    const code = document.getElementsByName("code")[1].value;
    const pib = document.getElementsByName("pib")[1].value;
    const posada = document.getElementsByName("posada")[1].value;
    const salary = document.getElementsByName("salary")[1].value;
    const k_childrens= document.getElementsByName("k_childrens")[1].value;
    const id = document.getElementsByName("id").value;
    let addUserEvent = new CustomEvent("editWorker", {
      detail: {
        id,
        code,
        pib,
        posada,
        salary,
        k_childrens,
      },
    });
    document.dispatchEvent(addWorkerEvent);
}

function StartEditWorker(id) {
    document.getElementById("edit").style.display = "block";
    document.getElementById("add").style.display = "none";
  
    let car = all.getById(id);
  
    document.getElementsByName("code")[1].value = car.code;
    document.getElementsByName("pib")[1].value = car.pib;
    document.getElementsByName("posada")[1].value = car.mark;
    document.getElementsByName("salary")[1].value = car.number;
    document.getElementsByName("k_childrens")[1].value = car.color;
    document.getElementsByName("id").value = id;
  }



let Worker1 = new StringAccounting("826751655202","Мельник Анастасія Віталіївна","вчитель,класний керівник","12 тис","22 дітей","10 років");
let Worker2 = new StringAccounting("601573325903","Бобик Ірина Олександрівна","завуч","17 тис.грн.","10 дітей","5 років");
let Worker3 = new StringAccounting("710215529773","Кулиш Олексій Іванович","директор","20 тис.грн.","17 дітей","7 років");
let Worker4 = new StringAccounting("827966337792","Шейтер Руслан Васильовичем","психолог","7 тис.грн","5 дітей","7 років");

let arr = new VisualWorkers();


arr.AddOne(Worker1 );
arr.AddOne(Worker2);
arr.AddOne(Worker3);
arr.AddOne(Worker4);
document.getElementById("root").innerHTML = arr.toHTML();
arr.addEventListners();