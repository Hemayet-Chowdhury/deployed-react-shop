import React, { Component, Suspense, lazy } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './components/Cart';
//Project is done in TypeScript and React.
//Created a RESTful custom API server to fetch from dataset provided courtesy to MOCKY.
//Limited title strings to first 10 characters for aesthetic consistency.
//Simple lazy loading implemented.

const Products = lazy(()=> import('./components/Products'));
const Sort = lazy(()=> import('./components/Sort'));
const ProductDetail = lazy(()=> import('./components/ProductDetail'));
const CartDetail = lazy(()=> import('./components/CartDetail'));


class App extends Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = { products: [], cartItems: [] }
    this.handleChangeSort = this.handleChangeSort.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  }



//used local storage for data persistency.
//product, cart, cart detail, product detail, SORT are all independent modules.


  componentWillMount() {

    //fetching from mock api-server 

    fetch("https://run.mocky.io/v3/a2e6da51-c508-43b1-914d-b5e025afdb45").then(res => res.json()).then(data => this.setState({
      products: data
    }));


    if (localStorage.getItem('cartItems')) {

      this.setState({ cartItems: JSON.parse(localStorage.getItem('cartItems')!) });
    }
  }
  
  //Helper functions

  handleChangeSort(e: any) {
    this.setState({ sort: e.target.value });
    this.listProducts();
  }

  listProducts() {
    this.setState((state: any) => {
      if (state.sort !== '') {
        state.products.sort((a: any, b: any) =>
          state.sort === "lowestprice"
            ? a.price > b.price
              ? 1
              : -1
            : a.price < b.price
              ? 1
              : -1
        );
      } else {
        state.products.sort((a: any, b: any) => (a.id > b.id ? 1 : -1));
      }

      return { products: state.products };
    })

  }


  handleAddToCart(e: any, product: any) {
    this.setState((state: any) => {
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;

      cartItems.forEach((cp: any) => {
        if (cp._id === product._id) {
          cp.count += 1;
          productAlreadyInCart = true;
        }
      });

      if (!productAlreadyInCart) {
        cartItems.push({ ...product, count: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return cartItems;
    })

  }


  handleRemoveFromCart(e: any, product: any) {
    this.setState((state: any) => {
      const cartItems = state.cartItems.filter((a: any) => a._id !== product._id);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      this.setState({ cartItems: JSON.parse(localStorage.getItem('cartItems')!) })
      return cartItems;
    });

    ;


  }



  //render begins here


  render() {
    return (

      <Router>

        <div className="container">
          <h1> Shop </h1>
          <hr />



          <div className="row">
            <div className="col-md-8">
              {/* Routes to handle changing components */}
              
              <Suspense fallback={<div>Loading...</div>}>
              <Route path='/' exact render={(props) => (<Sort {...props} count={this.state.products.length} handleChangeSort={this.handleChangeSort} />)} />
              <Route path='/' exact render={(props) => (<Products {...props} products={this.state.products} handleAddToCart={this.handleAddToCart} />)} />
              <Route path='/product/:id' exact render={(props) => (<ProductDetail {...props} handleAddToCart={this.handleAddToCart} />)} />
              <Route path='/cart' exact render={(props) => (<CartDetail {...props} handleRemoveFromCart={this.handleRemoveFromCart} />)} />
              </Suspense>

              {/* <Sort count = {this.state.products.length} handleChangeSort={this.handleChangeSort}/>
            <Products products = {this.state.products} handleAddToCart = {this.handleAddToCart} /> */}
            </div>

            <div className="col-md-4">
              {/* Cart always stays on screen */}
              <Cart cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart} />

            </div>
          </div>

        </div>

      </Router>
    );

  }

}

export default App;
