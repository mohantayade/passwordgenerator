const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerCase = "qwertyuiopasdfghjklzxcvbnm";
const number = "1234567890";
const symbol = "!@#$%^&*()_+-={}|:/.;][";

const passBox = document.getElementById("password")
const totalChar = document.getElementById("totalChar")
const upperInput = document.getElementById("upperid")
const lowerInput = document.getElementById("lowerid")
const numberInput = document.getElementById("numberid")
const symbolInput = document.getElementById("symbolid")


const getRandamData = (dataset)=>{
    return dataset[Math.floor( Math.random()* dataset.length )]
}

const generatePassword = (password = "")=>{
    if( upperInput.checked){
        password += getRandamData(upperCase)
    }

    if( lowerInput.checked){
        password += getRandamData(lowerCase)
    }

    if( numberInput.checked){
        password += getRandamData(number)
    }

    if( symbolInput.checked){
        password += getRandamData(symbol)
    }

    if(password.length < totalChar.value){
        return generatePassword(password)
    }
   
    passBox.value = turncateString(password , totalChar.value);

}

generatePassword()

document.getElementById("btn").addEventListener(
    "click",
    function(){
        generatePassword()
    }
)



function turncateString(str, num){
    if(str.length>num){
        let subStr = str.substring(0,num);
        return subStr;
    }else{
        return str;
    }
}

function copyPassword(){
    passBox.select();
    document.execCommand("copy");
    
}