document.addEventListener("DOMContentLoaded", onLoad);
const noteList = document.querySelector("#note-list");
const notePanel = document.querySelector("#note-panel");

function renderNotes(notes){
  let noteListHTML = "";
  notes.forEach(function(note){
    noteListHTML += createNoteTag(note);
  });
  noteList.innerHTML += noteListHTML;
}

function createNoteTag(note){
  const noteTag = `<div class="row note" id="note-${note.id}" data-id="${note.id}"><p class="lead">${note.title}</p><p>${note.body}</p></div><hr>`;

  return noteTag;
}

function createPanelTag(note){
  const panelTag = `<div class="container"><div class="row" id="note-${note.id}" data-id="${note.id}"><div class="col"><div class="form-group"><input class="form-control" type="text" value="${note.title}"></div><div class="form-group"><textarea class="form-control">${note.body}</textarea></div></div></div></div>`;

  return panelTag;
}

function addClickListeners(){
  const notes = document.querySelectorAll(".note");
  const createButton = document.querySelector("#create-button");

  notes.forEach(note => {
    note.addEventListener("click", getNoteIdForPanel);
  });

  createButton.addEventListener("click", onNewNote);
}

function onNewNote(event){
  const title = document.querySelector("#title");
  const body = document.querySelector("#body");

  const noteContent = {
    title: title.value,
    body: body.value,
    user_id: 1
  }
  createNote(noteContent).then(onLoad);
}

function getNoteIdForPanel(event){
  const id = event.currentTarget.dataset.id;
  displayNotePanel(id);
}

function getUserId(user){
  const id = user.id;
  return id;
}

function renderNotePanel(note){
  notePanel.innerHTML = createPanelTag(note);
}

function onLoad(){
  noteList.innerHTML = "";
  getUser()
  .then(user => getNotes(user))
  .then(notes => renderNotes(notes))
  .then(addClickListeners);
}
