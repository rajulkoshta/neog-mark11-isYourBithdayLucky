const birthDay = document.querySelector("#birthday");
const luckyNumber = document.querySelector("#luckyNum");
const checkBtn = document.querySelector(".btn-primary");
const reloadBtn = document.querySelector(".btn-secondary");
const message = document.querySelector("#message");


function checkBirthday(){
    hideMessage(); 
    const dob= birthDay.value;
    const luckyno = luckyNumber.value;
    const sum = calculateSum(dob);
    if(sum % luckyno == 0){
        showMessage("Congratulations your birthday is lucky🥳");
    }
    else{
        showMessage("Sorry according to the logic "+luckyno+" is not that lucky😟")
    }
}

function calculateSum(dob){
        dob = dob.replaceAll('-','');
        let sum=0;
        for(var index=0 ; index < dob.length ; index++){
            sum = sum + Number(dob.charAt(index));
        }
        return sum;
}

checkBtn.addEventListener("click", checkBirthday);


function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText =msg;

}


reloadBtn.addEventListener("click", refresh);
function refresh(){
    window.location.reload("Refresh");
  }
