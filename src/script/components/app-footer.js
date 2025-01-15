class FooterBar extends HTMLElement {
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
          }
     
          div {
          font-family: "Arial", sans-serif;
            padding: 24px 20px;
        background-color: #6495ed;     
        text-align: center;
        color: white;

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
            Notes App &copy; 2023
          </div>
        `;
  }
}

customElements.define("footer-bar", FooterBar);
