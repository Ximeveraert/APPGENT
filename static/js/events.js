function fetchEvents(eventsurl){
    fetch(eventsurl)
    .then((response) => {
        return response.json()
    })
    .then((events) => {
        console.log(events)
    let eventContainer = document.querySelectorAll(".events > div");
    for (let number = 0; number < eventContainer.length; number++){
        eventContainer[number].innerHTML = events[number].title;
    }
    })
}

let eventsurl = "https://www.pgm.gent/data/gentsefeesten/events_500.json"
fetchEvents(eventsurl)