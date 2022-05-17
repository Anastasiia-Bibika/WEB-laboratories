/*1. Використовуючи js, HTML та СSS створити:
a. Об’єкт для зберігання даних про музикальний альбом (Id,
виконавець, назва, URL-обгортки, список пісень, рік випуску,
кількість прослуховувань).
b. На основі об’єкту альбому створити новий об’єкт, який перевизначає
метод toString()
c. Об’єкт для зберігання даних про колекцію альбомів, цей об’єкт
повинен містити конструктор та метод для додавання даних про
новий альбом (перед додаванням забезпечити перевірку на
відсутність дублікатів) .
d. Відобразити форму для додавання альбому на сторінці.*/

class MusicalAlbum {
    constructor(id, author, title, url, mas_songs, date, k_listen) {
        this.id = id;
        this.author = author;
        this.title = title;
        this.url = url;
        this.mas_songs = mas_songs;
        this.date = date;
        this.k_listen = k_listen;
    }
}
class StringMusical extends MusicalAlbum{
    ToString() {
        return `
                Id: ${this.id}
                Виконавець: ${this.author}
                Title: ${this.title}
                Url: ${this.url}
                Songs: ${this.mas_songs}
                Date: ${this.date}
                Listeners:${this.k_listen}
                `;
      }
}
class AllINFOMusical{
    constructor(){
        this.songsalbum = [];
    }
    AddNew(elem) {
        this.songsalbum.push(elem);
    }
    AddMoreinfoalbum(elem) {
       if (elem === checkelem(elem))
       throw `${elem} вже є `
       else
        elems.forEach((elem) => {
            this.songsalbum.push(elem);
        });
       
    }
}
function checkelem(arr,elem){
    return arr.some(function(arrVal){
        return elem === arrVal;
    });
}

function ButtonClick(event) {
    console.log(event);
    alert("button");
}

function FidsetClick() {
    alert("Fildset");
}

function FormClick(event) {
    alert("form");
    event.stopPropagation();
}

function DocumentClick() {
    alert("document");
}

function FormSubmit(event) {
    alert("submit");
    event.preventDefault();
}


document.getElementsByTagName("form")[0].onclick = FormClick;
document.getElementsByTagName("form")[0].onsubmit = FormSubmit;
document.getElementsByTagName("button")[0].onclick = ButtonClick;
document.onclick = DocumentClick;


document.getElementById("board").onclick = (event) => {
    let pointer = document.getElementById("pointer");
    pointer.style.top = `${event.layerY-25}px`;
    pointer.style.left = `${event.layerX-25}px`;
}
class ToHTMLalbum extends  AllINFOMusical{
    ToHTML(songsalbum) {
        return `
        <tr>
            <td>
                ${songsalbum.id}
            </td>
            <td>
                ${songsalbum.author}
            </td>
            <td>
                ${songsalbum.title}
            </td>
            <td>
                ${songsalbum.url}
            </td>
            <td>
                ${songsalbum.mas_songs}
            </td>
            <td>
            ${songsalbum.date}
            </td>
            <td>
            ${songsalbum.k_listen}
            </td>
        </tr>
        `
    }
    AlbumTableToHTML() {
        let rows = "";
        for (let songsalbum of this.getAll()) {
            rows += this.ToHTML(songsalbum);
        };
        return `
            <table>
                <tr>
                    <th>
                        Id
                    </th>
                    <th>
                        Виконавець
                    </th>
                    <th>
                        Title
                    </th>
                    <th>
                        Url
                    </th>
                    <th>
                        Songs
                    </th>
                    <th>
                        Date
                    </th>
                    <th>
                    Date
                </th>
                    <th colspan="2">
                        Actions
                    </th>
                </tr>
                ${rows}
            </table>
            <button type="button" onclick="ShowAddAlbum()">
                Add 
            </button>
        `;
    }
}
function ShowAddAlbum() {
    document.getElementById("add").style.display = "block";
}
