class AppBar extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  _updateStyle() {
    this._style.textContent = `
          :host {
            display: block;
          width: 100%;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
          margin-bottom: 20px;
          }
     
          div {
            text-align: center;
          padding: 20px;
          background-color: #6495ed; 
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
          margin-bottom: 20px;
          }
     
          .brand-name {
            font-family: "Arial", sans-serif;
          font-size: 28px;
          color: white;
          letter-spacing: 1px;
          margin: 0;
          }
        `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `      
          <div>
            <h1 class="brand-name">Notes App</h1>
          </div>
        `;
  }
}

customElements.define("app-bar", AppBar);
