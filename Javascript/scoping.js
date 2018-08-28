// sisältä näkee ulos mutta ulkoa ei sisäänote

var carName1 = "Saab";
console.log('global: carName1' + carName1);
//console.log('global: carName2' + carName2); Uncaught ReferenceError: carName2is not defined
//console.log('global: carName3' + carName3); Uncaught ReferenceError: carName3 is not defined
//console.log('global: carName4' + carName4); Uncaught ReferenceError: carName4 is not defined
//console.log('global: carName5' + carName5); Uncaught ReferenceError: carName5 is not defined

function myFunction1() {
    var carName2 = "Volvo";
    console.log('local1: carName1' + carName1);
    console.log('local1: carName2' + carName2);
    //console.log('local1: carName3' + carName3); Uncaught ReferenceError: carName3 is not defined
    //console.log('local1: carName4' + carName4); Uncaught ReferenceError: carName4 is not defined
  //  console.log('local1: carName5' + carName5); Uncaught ReferenceError: carName5 is not defined
    inner1();
}

function myFunction2() {
    var carName3 = "Toyota";
    console.log('local2: carName1' + carName1);
  //  console.log('local2: carName2' + carName2);Uncaught ReferenceError: carName2 is not defined
    console.log('local2: carName3' + carName3);
  //  console.log('local2: carName4' + carName4);Uncaught ReferenceError: carName4 is not defined
  //  console.log('local2: carName5' + carName5); Uncaught ReferenceError: carName5 is not defined
    var inner2 = function(){
      var carName4 = "Skoda";
      console.log('inner2: carName1' + carName1);
      //console.log('inner2: carName2' + carName2); Uncaught ReferenceError: carName2 is not defined
      console.log('inner2: carName3' + carName3); //TÄDÄÄ!!! Tämä näkyy => sulkeuma mahdollista
      console.log('inner2: carName4' + carName4);
    //  console.log('inner2: carName5' + carName5);
    };
    inner2();
}

function myFunction3() {
  var carName3 = "Toyota";
  console.log('local3: carName1' + carName1);
  console.log('local3: carName2' + carName2);
  console.log('local3: carName3' + carName3);
  console.log('local3: carName4' + carName4);
  console.log('local3: carName5' + carName5);

}

function inner1() {
    var carName4 = "Mitsubishi";
    console.log('inner1: carName1' + carName1);
    //console.log('inner1: carName2' + carName2); YLLÄTYS, johtuu koska molemmat funktiot määritelty globaaliin scopeenUncaught ReferenceError: carName2 is not defined
    //console.log('inner1: carName3' + carName3);Uncaught ReferenceError: carName3 is not defined
    console.log('inner1: carName4' + carName4);
    //console.log('inner1: carName5' + carName5); Uncaught ReferenceError: carName2 is not defined
    innerInner1();
}



function innerInner1() {
    var carName5 = "Lada";
    console.log('innerInner1: carName1' + carName1);
  //  console.log('innerInner1: carName2' + carName2); EI scopessa
  //  console.log('innerInner1: carName3' + carName3);
  //  console.log('innerInner1: carName4' + carName4);
    console.log('innerInner1: carName5' + carName5);
}


myFunction1();
myFunction2();
//myFunction3();
