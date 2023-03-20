
const section = document.querySelector('section');
const requestURL ="./superhero.json"; //nombre

const request = new XMLHttpRequest();
request.open('GET',requestURL);


request.responseType = 'json';
request.send();


request.onload = function() {
    const proyectos = request.response;
    populateHeader(proyectos);
    showHeroes(proyectos);
  }

function populateHeader(jsonObj) {

}

function showHeroes(jsonObj) {
    const heroes = jsonObj['proyectos'];
  
    for (var i = 0; i < heroes.length; i++) {
      const myArticle = document.createElement('article');
      const myPara4 = document.createElement('img');
      const myH2 = document.createElement('h2');
      const myPara2 = document.createElement('h1');
      const myPara3 = document.createElement('h1');
      const myList = document.createElement('p');
   
      myPara4.src = heroes[i].img;
      myH2.textContent = heroes[i].name;
      myPara2.textContent = 'Fecha: ' + heroes[i].fecha;
      myPara3.textContent = 'Lenguajes:';
  
      const superPowers = heroes[i].lenguajes;
      
      for (var j = 0; j < superPowers.length; j++) {
        const listItem = document.createElement('li');
        listItem.textContent = superPowers[j];
        myList.appendChild(listItem);
      }

      myArticle.appendChild(myPara4);
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
      
      
    
  
      section.appendChild(myArticle);
    }
  }