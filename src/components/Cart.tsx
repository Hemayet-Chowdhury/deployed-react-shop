import React, { Component } from "react";
import util from "../util";
import { Link } from 'react-router-dom';

class Cart extends Component<any, any> {


  constructor(props: any) {
    super(props);
  }

  render() {
    const { cartItems } = this.props;
    return (


      <div className="alert alert-info">
        {cartItems.length === 0 ? (
          "Basket is empty"
        ) : (
            <div>
              {/* You have {cartItems.length} items in the basket. <hr /> */}
            </div>
          )}

        {cartItems.length > 0 && (
          <div>
            <ul style={{ marginLeft: -25 }}>
              {cartItems.map((item: any) => (
                <li key={item._id}>
                  <b>{item.title}</b>
                  <button
                    style={{ float: "right" }}
                    className="btn btn-danger btn-xs"
                    onClick={(e) =>
                      this.props.handleRemoveFromCart(e, item)
                    }
                  >
                    X
                  </button>
                  <br />
                  Price : {util.formatCurrency(item.price)} Amount : {item.count / 2} 
                </li>
              ))}
            </ul>

            <b>
              Total:{" "}
              {util.formatCurrency(
                cartItems.reduce((a: any, c: any) => a + (c.price * c.count) / 2, 0)
              )}
            </b>
            <button
              onClick={() => alert("To be implemented.")}
              className="btn btn-success" style={{ margin: 10 }}
            >
              Checkout
            </button>
            <Link to={{ pathname: `/cart`, state: { ci: cartItems } }}>
              <button

                className="btn btn-primary"
              >
                View Cart
            </button>
            </Link>
          </div>
        )}

      </div>
    );


  }
}
export default Cart;