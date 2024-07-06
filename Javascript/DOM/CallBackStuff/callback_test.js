function newEventListener(typeOfEvent, callback) {
    var eventThatHappened = {
        eventType: "keypress",
        key: "p",
        durationOfKeypress: 2
    }

    if (eventThatHappened.eventType === typeOfEvent) {
        callback(eventThatHappened)
    }
}

function onKeypress(event) {
    console.log(event)
}

newEventListener("keypress", onKeypress)
