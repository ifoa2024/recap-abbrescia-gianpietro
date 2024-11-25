//1
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
  
//2
// function addSaluto(list) {
//     return list.map(dev => {
//       dev.saluto = `Ciao ${dev.firstName}, cosa ti piace di più di${dev.language}?`;
//       return dev; 
//     });
//   }
  
//   let list = [
//     { firstName: 'Gianpietro', lastName: 'A.', country: 'Italy', continent: 'Europe', age: 28, language: 'Java' },
//     { firstName: 'Ruggero', lastName: 'V.', country: 'Michigan', continent: 'America', age: 28, language: 'Python' },
//     { firstName: 'Sergio', lastName: 'B.', country: 'Italy', continent: 'Europe', age: 28, language: 'Ruby' }
//   ];
  
//   let updatedList = addSaluto(list);
  
//   console.log(updatedList);
//3
// function occhiVerdi(list) {

//     return list.some(person => person.eyes === 'Verde');
//   }

//   let list = [
//     { firstName: 'Gianpietro', lastName: 'A.', country: 'Italy', continent: 'Europe', age: 28, eyes: 'Marroni' },
//     { firstName: 'Ruggero', lastName: 'V.', country: 'Michigan', continent: 'America', age: 28, eyes: 'Neri' },
//     { firstName: 'Sergio', lastName: 'S.', country: 'Italy', continent: 'Europe', age: 28, eyes: 'Verdi' }
//   ];
  
//   console.log(occhiVerdi(list));  
// 4

// function findDeveloperByLanguage(list, language) {

//     const developer = list.find(dev => dev.language === language);
    
//     if (developer) {
//       return `${developer.firstName}, ${developer.country}`;
//     } else {
//       return `Non ci sono sviluppatori ${language}`;
//     }
//   }
  
//   let list = [
//     { firstName: 'Gianpietro', lastName: 'A.', country: 'Italy', continent: 'Europe', age: 28, language: 'Python' },
//     { firstName: 'Ruggero', lastName: 'V.', country: 'Michigan', continent: 'America', age: 28, language: 'Javascript' },
//     { firstName: 'Sergio', lastName: 'S.', country: 'Italy', continent: 'Europe', age: 28, language: 'Clojure' }
//   ];
  
//   console.log(findDeveloperByLanguage(list, 'Python')); 
//   console.log(findDeveloperByLanguage(list, 'JavaScript'));
//   console.log(findDeveloperByLanguage(list, 'Ruby'));
  
//5

// function checkUserSignUp(list) {
    
//     list.forEach(user => {

//       if (user.logged === true) {
//         alert(`${user.firstName} ${user.lastName} è stato registrato.`);
//       } else {
//         alert(`${user.firstName} ${user.lastName} non è registrato.`);
//       }
//     });
//   }
  
//   let list = [
//     { firstName: 'Gianpietro', lastName: 'A.', country: 'Italy', continent: 'Europe', age: 28, language: 'true' },
//     {firstName: 'Ruggero', lastName: 'V.', country: 'Michigan', continent: 'America', age: 28, language: 'false' },
//     { firstName: 'Sergio', lastName: 'S.', country: 'Italy', continent: 'Europe', age: 28, language: 'true' }
//   ];
  
//   checkUserSignUp(list);



