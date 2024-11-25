// function dev(list, language, continent) {
//     return list.filter(dev => dev.language === language && dev.continent === continent).length;
//   }
  
//   let list = [
//     { firstName: 'Davide', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//     { firstName: 'Michele', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//     { firstName: 'Gianpietro', lastName: 'L.', country: 'Italy', continent: 'Asia', age: 29, language: 'HTML' },
//     { firstName: 'Ettore', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
//   ];
  
//   let result = dev(list, 'JavaScript', 'Europe');
//   console.log(result);  

//   function dev(list, language, continent) {
//     return list.filter(dev => dev.language === language && dev.continent === continent).length;
//   }
  
//   function getUserInputAndCount() {
//     let continent = prompt("Inserisci il continente (es. Europe, Asia, Oceania):");
//     let language = prompt("Inserisci il linguaggio di programmazione (es. JavaScript, HTML, CSS):");
  
//     let result = dev(list, language, continent);
//     alert(`Numero di sviluppatori con ${language} provenienti da ${continent}: ${result}`);
//   }
  
//   getUserInputAndCount();
  

// function addSaluto(list) {
//     return list.map(dev => {
//       dev.saluto = `Ciao ${dev.firstName}, cosa ti piace di più di${dev.language}?`;
//       return dev; 
//     });
//   }
  
//   let list = [
//     { firstName: 'Gianpietro', lastName: 'I.', country: 'Argentina', continent: 'Europe', age: 28, language: 'Java' },
//     { firstName: 'Ruggero', lastName: 'X.', country: 'Croatia', continent: 'America', age: 28, language: 'Python' },
//     { firstName: 'Sergio', lastName: 'U.', country: 'United States', continent: 'Europe', age: 28, language: 'Ruby' }
//   ];
  
//   let updatedList = addSaluto(list);
  
//   console.log(updatedList);

function occhiVerdi(list) {

    return list.some(person => person.eyes === 'Verde');
  }

  let list = [
    { firstName: 'Gianpietro', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, eyes: 'Marroni' },
    { firstName: 'Ruggero', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, eyes: 'Neri' },
    { firstName: 'Sergio', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, eyes: 'Verdi' }
  ];
  
  console.log(occhiVerdi(list));  
  