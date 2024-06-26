// 15.	WAP to change background color on click of button
let flag = true;
function changeBg() { 
    if (flag) {
        document.body.style.backgroundColor = "blue";
    }
    else{
        document.body.style.backgroundColor = "red";
    }
    flag = !flag; 
}