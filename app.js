let birthDay = document.querySelector("#birthday");
let luckyNumber = document.querySelector("#luckyNum");
let checkBtn = document.querySelector(".btn-primary");
let reloadBtn = document.querySelector(".btn-secondary");
let message = document.querySelector("#error-message");
let birthDayvalueWithoutHyphen = birthDay.value.replaceAll('-','');
let birthDayString = birthDayvalueWithoutHyphen.toString();


let sum=0;


checkBtn.addEventListener("click", checkBirthday);
function checkBirthday(){ 
      console.log(birthDayvalueWithoutHyphen);
    console.log(birthDayString);
}





reloadBtn.addEventListener("click", refresh);
function refresh(){
    window.location.reload("Refresh");
  }
