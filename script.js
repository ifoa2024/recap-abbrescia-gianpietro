function dev(list, language, continent) {
    return list.filter(dev => dev.language === language && dev.continent === continent).length;
  }
  
  let list = [
    { firstName: 'Davide', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Michele', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Gianpietro', lastName: 'L.', country: 'Italy', continent: 'Asia', age: 29, language: 'HTML' },
    { firstName: 'Ettore', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  ];
  
  let result = dev(list, 'JavaScript', 'Europe');
  console.log(result);  

  function dev(list, language, continent) {
    return list.filter(dev => dev.language === language && dev.continent === continent).length;
  }
  
  function getUserInputAndCount() {
    let continent = prompt("Inserisci il continente (es. Europe, Asia, Oceania):");
    let language = prompt("Inserisci il linguaggio di programmazione (es. JavaScript, HTML, CSS):");
  
    let result = dev(list, language, continent);
    alert(`Numero di sviluppatori con ${language} provenienti da ${continent}: ${result}`);
  }
  
  getUserInputAndCount();
  