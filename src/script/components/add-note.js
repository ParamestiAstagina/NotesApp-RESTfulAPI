import ApiNotes from "../data/notes.js";

class AddNotes extends HTMLElement {
  _shadowRoot = null;
  _style = null;
  isLoading = false;

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");

    this._style.textContent = `
      :host {
        display: block;
        width: 100%;
        max-width: 100%; 
        margin: 0 auto;
        font-family: "Arial", sans-serif;
      }

      .container {
        width: 100%;
        padding: 20px;
        background-color: #fff;
        border-radius: 10px; 
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
      }

      h2 {
        font-size: 24px;
        margin-bottom: 20px;
        text-align: center;
        color: #333;
      }

      form {
        display: flex;
        flex-direction: column;
        width: 100%; 
      }

      form div {
        margin-bottom: 15px;
      }

      label {
        font-size: 16px;
        color: #333;
        margin-bottom: 5px;
        display: block;
      }

      input[type="text"],
      textarea {
        width: 100%;
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #f9f9f9;
        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
      }

      .error-message {
        color: red;
        font-size: 14px;
        margin-top: 5px;
      }

      textarea {
        resize: vertical;
        height: 120px;
      }

      .btnsubmit {
        background-color: #6495ed;
        color: white;
        border: none;
        padding: 10px 15px;
        text-align: center;
        font-size: 16px;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        width: 100%;
        box-sizing: border-box;
      }

      .btnsubmit:hover {
        background-color: #4480f0;
      }

    `;

    this._shadowRoot.appendChild(this._style);
  }

  connectedCallback() {
    this.render();
    this._shadowRoot
      .querySelector("#notesForm")
      .addEventListener("submit", (event) => this._handleSubmit(event));
    this._shadowRoot
      .querySelector("#title")
      .addEventListener("input", () => this.validateTitle());
  }

  disconnectedCallback() {
    this._shadowRoot
      .querySelector("#notesForm")
      .removeEventListener("submit", (event) => this._handleSubmit(event));
  }

  validateTitle() {
    const title = this._shadowRoot.querySelector("#title").value;
    const errorMessage = this._shadowRoot.querySelector(".error-message");

    if (title.length < 5) {
      errorMessage.textContent = "Judul harus memiliki minimal 5 karakter.";
      return false;
    } else {
      errorMessage.textContent = "";
      return true;
    }
  }

  async _handleSubmit(event) {
    event.preventDefault();

    if (!this.validateTitle()) {
      return;
    }

    const title = this._shadowRoot.querySelector("#title").value;
    const content = this._shadowRoot.querySelector("#content").value;
    const submitButton = this._shadowRoot.querySelector(".btnsubmit");

    this.isLoading = true;
    submitButton.textContent = "Loading...";
    submitButton.classList.add("loading");

    try {
      const newNote = await ApiNotes.createNote(title, content);
      if (newNote) {
        this.dispatchEvent(
          new CustomEvent("note-added", {
            detail: { title, content },
            bubbles: true,
            composed: true,
          }),
        );

        alert("Catatan berhasil ditambahkan!");

        this._shadowRoot.querySelector("#title").value = "";
        this._shadowRoot.querySelector("#content").value = "";
      }
    } catch (error) {
      console.error("Failed to add note:", error);

      alert("Gagal menambahkan catatan. Silakan coba lagi nanti.");
    } finally {
      this.isLoading = false;
      submitButton.textContent = "Selesai";
    }
  }

  render() {
    this._shadowRoot.innerHTML += `
      <div class="container">
        <section>
          <h2>Tambah Notes</h2>
          <form id="notesForm">
            <div>
              <label for="title">Judul</label>
              <input type="text" id="title" name="title" required />
              <div class="error-message"></div>
            </div>
            <div>
              <label for="content">Isi</label>
              <textarea id="content" name="content" required></textarea>
            </div>
            <button type="submit" class="btnsubmit">Selesai</button>
          </form>
        </section>
      </div>
    `;
  }
}

customElements.define("add-notes", AddNotes);
