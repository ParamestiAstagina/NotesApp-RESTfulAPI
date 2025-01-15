import Utils from "../utils.js";
import Notes from "../data/notes.js";

const home = () => {
  const noteListContainerElement = document.querySelector("#noteListContainer");
  const noteListElement = noteListContainerElement.querySelector("note-list");
  const listElement = noteListElement.shadowRoot.querySelector(".list");
  const addNotesElement = document.querySelector("add-notes");
  const loadingOverlay = document.querySelector("#loadingOverlay");

  const showNotes = async () => {
    loadingOverlay.classList.remove("hidden");

    listElement.innerHTML = "";

    try {
      const notes = await Notes.getNotes();
      displayResult(notes);
    } catch (error) {
      console.error("Gagal memuat catatan:", error);
    } finally {
      loadingOverlay.classList.add("hidden");
    }
  };

  const displayResult = (notes) => {
    notes.forEach((note) => {
      const noteItem = document.createElement("note-item");
      noteItem.note = note;

      noteItem.addEventListener("note-deleted", async () => {
        await showNotes();
      });

      listElement.appendChild(noteItem);
    });
  };

  const showNoteList = () => {
    Array.from(noteListContainerElement.children).forEach((element) => {
      Utils.hideElement(element);
    });
    Utils.showElement(noteListElement);
  };

  addNotesElement.addEventListener("note-added", async (event) => {
    const { title, content } = event.detail;

    await Notes.createNote(title, content);

    showNotes();
  });

  showNotes();
};

export default home;
