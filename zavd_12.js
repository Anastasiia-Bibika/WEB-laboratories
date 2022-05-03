//2. анонімні функції
/*Створити функцію, яка за номером місяця повертає пору року, до якої відноситься
цей місяць.*/
var  Seasons = function(month){
    
    if(3 <= month && month <= 5){
        return alert("Весна");
    }
    if(6 <= month && month <= 8)
    {
        return alert("Літо");
    }
    if(month == 12 || month == 1 || month == 2)
    {
        return alert("Зима");
    }
   
    if(9 <= month && month <= 11){
        return alert("Осінь");
    }
}