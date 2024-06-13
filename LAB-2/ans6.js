// *****
// *****
// *****
// *****
// *****

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5 ; j++) {
        document.write("*");
    }
    document.write("<br/>");
}

document.write("<br/>----------------------------------------<br/><br/>")

// *****
// *   *
// *   *
// *   *
// *****

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5 ; j++) {
        if (i==0 || i==4 || j==0 || j==4) { 
            document.write("*");
        }
        else{
            document.write("&nbsp&nbsp")
        }
    }
    document.write("<br/>");
}

document.write("<br/>----------------------------------------<br/><br/>")

//     *
//    * *
//   * * *
//  * * * *
// * * * * *

for (let i = 0; i < 5; i++) {
    for (let j = 4; j >= i ; j--) {
        document.write("&nbsp");   
    }
    for (let j = 0; j <= i ; j++) {
        document.write("*");   
    }
    document.write("<br/>");
}

document.write("<br/>----------------------------------------<br/><br/>")

// *****
// ****
// ***
// **
// *

for (let i = 0; i <= 4 ; i++) {
    for (let j = 4; j >= i ; j--) {
        document.write("*");   
    }
    document.write("<br/>");
}