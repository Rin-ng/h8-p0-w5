function highestScore (students) {
  var obj = {};

 students.sort(function(a,b){return a.score - b.score});

 students.sort(function(a,b){if(a.class > b.class) return -1;
    if(a.class < b.class) return 1;
     return 0;});



 //console.log(students);


  for(var i = 0; i < students.length - 1 ; i++){
    if(students[i].class === students[i+1].class){
      // console.log(students[i].class);
      // console.log(students[i+1].class  + students[i+1].score);
      obj[students[i].class] = {
      name: students[i + 1].name,
      score: students[i +1].score,
    };
    }
    else{
    obj[students[i].class] = {
      name: students[i].name,
      score: students[i].score,
    };
    }
  }


 return obj;
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}
