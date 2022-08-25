var calendarFormEl = $('#calendarForm');
var containerEl = $('#container');
var dummyAlgo;

function handleFormSubmit(event) {
    event.preventDefault();

    var calendarItem = $('input[name="note-input"]').val();
      
    if (!calendarItem) {
        console.log('No item added!');
        return;
    }

    var containerEl = $(
        '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
    );
    containerEl.text()
}

dummyAlgo.addEventListener()  // TODO: Finish event listener


localStorage.setItem(,) // adding local storage

localStorage.getItem(key) 

localStorage.removeItem(key)