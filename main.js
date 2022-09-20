
 function calculate(){
    let h = parseFloat(document.getElementById('height').value / 100);
    let w = parseFloat(document.getElementById('weight').value);

    let bmi = w / (Math.pow(h,2));

    document.getElementById('bmiResult').textContent = bmi.toFixed(2)+ " kg";
    console.log(bmi.toFixed(2));
    if(bmi.toFixed(2)<18.5){
        document.getElementById('sovany').style.background = "darkorange";
        document.getElementById('sovany').style.color = "white";
    }else if(bmi.toFixed(2)<24.9){
        document.getElementById('normal').style.background = "darkorange";
        document.getElementById('normal').style.color = "white";
    }else if(bmi.toFixed(2)<29.9){
        document.getElementById('tulsuly').style.background = "darkorange";
        document.getElementById('tulsuly').style.color = "white";
    }else if(bmi.toFixed(2)<34.9){
        document.getElementById('ifok').style.background = "darkorange";
        document.getElementById('ifok').style.color = "white";
    }else if(bmi.toFixed(2)< 39.9){
        document.getElementById('iifok').style.background = "darkorange";
        document.getElementById('iifok').style.color = "white";
    }else{
        document.getElementById('iiifok').style.background = "darkorange";
        document.getElementById('iiifok').style.color = "white";
    }

    let idealis = ((h*100)-100)-(h*0.10);
    document.getElementById('idealis').textContent = idealis.toFixed(2) + " kg";

    document.getElementById('also').textContent = idealis.toFixed(2) - 9.8;
    document.getElementById('felso').textContent = idealis.toFixed(2) +9.8 + "kg";
 }

function init(){
    document.getElementById('szamitas').addEventListener('click',calculate);
}

document.addEventListener('DOMContentLoaded',init);