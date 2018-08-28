var array = [1,2,5];
var jotain = 'blaah';
tervehdi = (x) => {
  return console.log('heippa' + x);
}

//ei tulisi käyttää ellei tiedä että on pakko => suorituskyky
ajaForLoop = () => {
    for(var i = 0; i < array.length; i++){
      console.log(i);
      // this on window
      console.log(this);
    }
}

// käytä forEach jos ei voi käyttää map, filter tai reduce. Käytä kun jokaiselle alkiolle pitää soveltaa jotain funktiota-
ajaForEach = () => {
  // i on elementti ei indeksi!
  array.forEach((i) => {
    console.log(i);
    console.log(this);
  });
}

//map kun haluaa MUUTTAA kaikkia alkioita arrayssa. Palauttaa UUDEN taulukon. jaiks, oltava var tms. jolle palauttaa arvo.
ajaMap = () => {
var palautettava =   array.map((i) => {
    return i * 2;
  });
  console.log(palautettava);
}

//filter => kun pitää palauttaa joitain 2-10 elementtiä, subset.
ajaFilter = () => {
  var filreroity = array.filter((el) => {
    return el < 3;
  });
  console.log(filreroity);
}

//find => kun YKSI pitää löytää
ajaFind = () => {
  var tulos = array.find((el) => el === 5);
  console.log(tulos);
}

//reduce() kun YKSI pitää palauttaa jonkun arvon tapaan
ajaReduce = () => {
  var tulos = array.reduce((prev, next) => {
      if(prev < next){
        return next;
      } else {
        return prev;
      }
  }, 0);
  console.log(tulos);
}


(start = () => {
  //tervehdi('Mikko');
  //ajaForLoop();
  //ajaForEach();
  //ajaMap();
  //ajaFilter();
  //ajaFind();
  //ajaReduce();
})();
