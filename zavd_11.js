//1. декларативний опис
function createTable(rows,colums){
table+="<table border=1>";
var table = document.createElement("table");
for(var i = 0; i < rows; i++){
    var tr = document.createElement("tr");
    for(var j = 0;j < colums;j++){
         var td = document.createElement("td");
         td.style.border = "3px solid black";
         td.innerText = "Текст";
         tr.appendChild(td);
    }
    table.appendChild(tr);
    table.style.border = "5px solid black";
}
return table 
};
document.body.appendChild(createTable(4, 4));