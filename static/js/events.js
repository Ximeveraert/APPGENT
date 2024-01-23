function fetchEvents(eventsurl){
    fetch(eventsurl)
    .then((response) => {
        return response.json()
    })
    
    .then((events) => {
        console.log(events)
    let eventContainer = document.querySelectorAll(".events > div");
    for (let number = 0; number < eventContainer.length; number++){
        eventContainer[number].innerHTML = `<div class="eventpicture"><img  src="${events[number].image.thumb}" alt=""></div><p>${events[number].title}</p>`    
    }
    })
}

let eventsurl = "https://www.pgm.gent/data/gentsefeesten/events.json"
fetchEvents(eventsurl)