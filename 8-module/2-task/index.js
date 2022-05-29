import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products
    this.filters = {}
    this.card = this.card()
    this.list = this.cardsList(this.products)
  }

  card() {
    let card = createElement(`
    <div class="products-grid">
      <div class="products-grid__inner">
      </div>
    </div>
`)
    return card;
  }

  cardsList(products) {
    this.gridInner = this.card.querySelector('.products-grid__inner')
    products.map((product) => {
      const card = new ProductCard(product)
      this.gridInner.append(card.elem)
    })
    return this.card
  }

  updateFilter(filters) {

    Object.keys(filters).forEach(key => {
      this.filters[key] = filters[key]
    });

    if ( this.filters.noNuts) {
      this.products = this.products.filter((product) => product.nuts === false || product.nuts === undefined)
    }

    if ( this.filters.vegeterianOnly) {
      this.products = this.products.filter((product) => product.vegeterian === true)
    }

    if ( this.filters.maxSpiciness) {
      this.products = this.products.filter((product) => product.spiciness <=  this.filters.maxSpiciness)
    }

    if ( this.filters.category) {
      this.products = this.products.filter((product) => product.category ===  this.filters.category)
    }

    this.gridInner.innerHTML = ''
    this.cardsList(this.products)
  }

  get elem() {
    return this.list
  }
}