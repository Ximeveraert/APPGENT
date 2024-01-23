//funtie voor api te roepen en data te plakken in html
function fetchData(url) {
  //roept de api
  fetch(url)
    //We zetten de body text om als json
    .then((response) => {
      return response.json();
    })
    //data
    .then((data) => {
    //console.log(data); //data[].title is de array dat we van de api hebben.

      //Grid selecteert alle newsitems in html
      let grid = document.querySelectorAll(".newsitem");
      //Forloop voor hoevelkeer het newsitem moet geplakt worden.
      for (let number = 0; number < grid.length; number++) {
        grid[number].innerHTML = data[number].title;
      }
    });
    
}
//let url is mijn api
let url = "https://www.pgm.gent/data/gentsefeesten/news.json";
fetchData(url);
