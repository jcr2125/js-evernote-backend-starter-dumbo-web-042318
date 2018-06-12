const baseNotesUrl = "http://localhost:3000/api/v1/notes";

function urlFor(id){
  const url = baseNotesUrl + "/" + id;
  return url;
}

function getNotes(user){
  const notes = user.notes;
  return notes;
}

//SHOW note in note panel
function displayNotePanel(id){
  fetch(urlFor(id))
  .then(response => response.json())
  .then(note => renderNotePanel(note));
}

//CREATE
function createNote(noteContent) {
  console.log("Note Content", noteContent);
  return fetch(baseNotesUrl, {
    body: JSON.stringify(noteContent),
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST'
  })
  .then(response => response.json())
}
