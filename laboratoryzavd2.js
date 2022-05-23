function changetabindexfun() {
    let index = document.getElementById("numberboxid").value;
    if(index>3 || index<1) {

        alert("Index is invalid");
        document.getElementById("numberboxid").value = "";
    }
    else {
        if(index==1){
            document.getElementById("contentout").innerHTML='Positive content';
            let buttonchange=document.getElementById("Positive");
            buttonchange.style.color="#000000";
            let buttonchangeout1=document.getElementById("Negative");
            buttonchangeout1.style.color="#d7d7d7";
            let buttonchangeout2=document.getElementById("Neutral");
            buttonchangeout2.style.color="#d7d7d7";
            document.getElementById("numberboxid").value = "";

        }

        if(index==2){
            document.getElementById("contentout").innerHTML='Negative content';
            let buttonchange=document.getElementById("Negative");
            buttonchange.style.color="#000000"
            let buttonchangeout1=document.getElementById("Positive");
            buttonchangeout1.style.color="#d7d7d7"
            let buttonchangeout2=document.getElementById("Neutral");
            buttonchangeout2.style.color="#d7d7d7";
            document.getElementById("numberboxid").value = "";

        }
        if(index==3){
            document.getElementById("contentout").innerHTML='Neutral content';
            let buttonchange=document.getElementById("Neutral");
            buttonchange.style.color="#000000"
            let buttonchangeout1=document.getElementById("Negative");
            buttonchangeout1.style.color="#d7d7d7"
            let buttonchangeout2=document.getElementById("Positive");
            buttonchangeout2.style.color="#d7d7d7";
            document.getElementById("numberboxid").value = "";
        }


    }
}
function changetabfunPositive(){
    let index = document.getElementById("Positive").id;
    document.getElementById("contentout").innerHTML=index+" content";
    let buttonchange=document.getElementById("Positive");
            buttonchange.style.color="#000000"
            let buttonchangeout1=document.getElementById("Negative");
            buttonchangeout1.style.color="#d7d7d7"
            let buttonchangeout2=document.getElementById("Neutral");
            buttonchangeout2.style.color="#d7d7d7"
}
function changetabfunNegative(){
    let index = document.getElementById("Negative").id;
    document.getElementById("contentout").innerHTML=index+" content";
    let buttonchange=document.getElementById("Negative");
            buttonchange.style.color="#000000"
            let buttonchangeout1=document.getElementById("Positive");
            buttonchangeout1.style.color="#d7d7d7"
            let buttonchangeout2=document.getElementById("Neutral");
            buttonchangeout2.style.color="#d7d7d7"
}
function changetabfunNeutral(){
    let index = document.getElementById("Neutral").id;
    document.getElementById("contentout").innerHTML=index+" content";
    document.getElementById("contentout").innerHTML='Neutral content';
            let buttonchange=document.getElementById("Neutral");
            buttonchange.style.color="#000000"
            let buttonchangeout1=document.getElementById("Negative");
            buttonchangeout1.style.color="#d7d7d7"
            let buttonchangeout2=document.getElementById("Positive");
            buttonchangeout2.style.color="#d7d7d7"
}
