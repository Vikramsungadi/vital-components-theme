class CarouselComponent extends HTMLElement {
  constructor() {
    super();
    this.options = {};
  }

  connectedCallback() {
    this.initSplide();
  }

  extractOptions() {
    this.options = {};

    try {
      let parsedOptions = JSON.parse(this.dataset.options ?? '{}');
      this.options = parsedOptions;
    } catch (err) {
      console.error('Splide options error', err);
    }
  }

  initSplide() {
    this.extractOptions();

    this.splide = new Splide(this, this.options).mount();
  }
}

customElements.define('carousel-component', CarouselComponent);
