export default class Cart {
  cartItems = [];
  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }


  addProduct(product) {
    let cartItem = {
      product: {},
      count: 0,
    };
    if (product??false) {
      let cart = this.cartItems.find((cart) => cart.product.id === product.id)
      if (cart) {
        this.cartItems.map((item) => {
          if (item.product.id === cart.product.id) {
            item.count = item.count + 1
            cartItem = item;
          }
        })
      } else {
        cartItem = {
          product: product,
          count: 1
        }
        this.cartItems.push(cartItem);
      }
      this.onProductUpdate(this.cartItem)
    } 
  }

  updateProductCount(productId, quantity) {
    this.cartItems.map((item => {
      if (item.product.id === productId) {
        item.count = item.count + quantity
        this.cartItem = item
        if (item.count === 0) {
          this.cartItems = this.cartItems.filter((item) => item.product.id !== productId)
        }
      }
    }))
    this.onProductUpdate(this.cartItem)
  }

  isEmpty() {
    return this.cartItems.length === 0
  }


  getTotalCount() {
    return  this.cartItems.reduce((count,item) => count + item.count, 0)
  }

  getTotalPrice() {
    return  this.cartItems.reduce((price,item) => price + item.product.price * item.count, 0)
  }

  onProductUpdate() {
    this.cartIcon.update(this);
  }
}