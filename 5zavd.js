let n = parseInt(prompt("Введіть діапазон від",""));
let m = parseInt(prompt("Введіть діапазон до",""));
let sum = 0;
let a = 0;
while( n < a || a < m){
     a = parseInt(prompt("Введіть число",""));
     if (a > m || a < n){
         break 
     }
     if(a%2 != 0){
        sum = sum + a;
        continue
    }
}
alert(` Cума непарних чисел ${sum} ` );