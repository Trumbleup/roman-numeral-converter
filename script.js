function convertToRoman(num) {
    let singleDig = "I";
    let fiveDig = "V";
    let tenDig = "X";
    let fiftyDig = "L";
    let hundredDig = "C"
    let fiveHundredDig = "D";
    let thousandDig = "M";
    let romanNum = 0;
    let romanNumeral = [];

    let numString = num.toString().split("");

    let numVal1 = parseInt(numString[numString.length - 1]);
    let numVal2 = parseInt(numString[numString.length - 2]);
    let numVal3 = parseInt(numString[numString.length - 3]);
    let numVal4 = parseInt(numString[numString.length - 4]);
        
    //function for singleDigit Values
    function singleDigit() {
    if ( numVal1 <= 3 ) {
            let romanNum = 0;
            while (romanNum < numVal1){
                romanNumeral.unshift(singleDig);
                romanNum++;
            }           
        }
        else if (numVal1  === 4 ) {
            romanNumeral.unshift( singleDig + fiveDig );
        }
        else if (numVal1 >= 5 && numVal1 <= 8) {
            let romanNum = 6;
            
            while (romanNum <= numVal1 && numVal1 !== 5) {
                romanNumeral.unshift(singleDig);
                romanNum++;
            }
           romanNumeral.unshift( fiveDig );  
        }
        else if ( numVal1 === 9 ) {
            romanNumeral.unshift(singleDig + tenDig);
        } 
    };

//function for doubleDigit Values
function doubleDigit() {
    if (numVal2 <= 3) {
            let romanNum = 0;
            while (romanNum < numVal2){
                romanNumeral.unshift(tenDig);
                romanNum++;
            }  
        }
        else if (numVal2  === 4 ) {
            romanNumeral.unshift( tenDig + fiftyDig );
        }
        else if (numVal2 >= 5 && numVal2 <= 8) {
            let romanNum = 6;
            while (romanNum <= numVal2 && numVal2 !== 5) {
                romanNumeral.unshift(tenDig);
                romanNum++;
            }
            romanNumeral.unshift( fiftyDig );
        }
        else if ( numVal2 === 9 ) {
            romanNumeral.unshift(tenDig + hundredDig);
        } 
};
//function for tripleDigit Values
function tripleDigit() {
    if (numVal3 <= 3) {
           let romanNum = 0;
            while (romanNum < numVal3){
                romanNumeral.unshift(hundredDig);
                romanNum++;
            }  
        }
        else if (numVal3  === 4 ) {
            romanNumeral.unshift( hundredDig + fiveHundredDig );
        }
        else if (numVal3 >= 5 && numVal3 <= 8) {
            let romanNum = 6;
            while (romanNum <= numVal3 && numVal3 !== 5) {
                romanNumeral.unshift(hundredDig);
                romanNum++;
            }
           romanNumeral.unshift( fiveHundredDig ); 
        }
        else if ( numVal3 === 9 ) {
            romanNumeral.unshift( hundredDig + thousandDig );
        } 
};
//function for quadDigit Values
function quadDigit() {
     if (numVal4 <= 3) {
           let romanNum = 0;
            while (romanNum < numVal4){
                romanNumeral.unshift(thousandDig);
                romanNum++;
            }  
        }
};
    //Number contains just 1 digit
    if (num < 10 && num > 0) {
        singleDigit()
    }

    //Number contains two digits
    else if (num >= 10 && num < 100 ) {
        singleDigit();
        doubleDigit();
    }
    //Number contains three digits
    else if (num >= 100 && num < 1000 ) {
        singleDigit();
        doubleDigit();
        tripleDigit();
    }
    //Number contains four digits
    else if (num >= 1000 && num <= 3999 ) {
        singleDigit();
        doubleDigit();
        tripleDigit();
        quadDigit();
    }
  
  


 return romanNumeral.join("");
}


convertToRoman(36);
