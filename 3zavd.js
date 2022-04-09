let milk = parseInt(prompt("Введіть вартість одного пакета молока",""));
let kmilk = parseInt(prompt("Введіть кількість пакетів",""));
let flour = parseInt(prompt("Введіть вартість одного пакета муки",""));
let kflour = parseInt(prompt("Введіть кількість пакетів",""));
totalymilk = milk*kmilk
totalyflour = flour*kflour
everyth = totalymilk + totalyflour
alert(`Вартість молока: ${totalymilk } `);
alert(`Вартість муки: ${totalyflour} `);
alert(`Загальна вартість: ${everyth}`);