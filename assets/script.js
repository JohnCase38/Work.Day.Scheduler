var calendarFormEl = $('#calendarForm');
var containerEl = $('#container');
var saveBtn = $('#saveBtn');

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
function SaveNote(cats, dogs) {
    alert("SaveNote works");
}

$('.saveBtn').click(function() {
    console.log($(this));
  });

localStorage.setItem(key)

 localStorage.getItem(key) 

 localStorage.removeItem(key)