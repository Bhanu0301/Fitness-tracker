var ageInput = document.querySelector(".age-input-field");
var bmiInput = document.querySelector(".bmi-input-field");
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var statement = document.querySelector(".result-statement");
var BMI, age;

calculateButton.addEventListener("click", ()=>{
    age = ageInput.value;
    BMI = bmiInput.value; 

    if((BMI < 18.5) && (age>12)){
        statement.innerText = "Your BMI falls within the underweight range and you need to follow plan 1";    
    }else if((BMI < 25) && (age > 16)){
        statement.innerText = "Your BMI falls within the normal or healthy weight range and you need to follow plan 2";
    }else if((age > 16) && (BMI > 25 )){
        statement.innerText = "Your BMI falls within the overweight range and you need to follow plan 3";
    }else{
        statement.innerText = "Your BMI falls within the obese range and you need to follow plan 4";
    }
});
