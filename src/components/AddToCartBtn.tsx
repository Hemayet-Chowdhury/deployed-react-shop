import React, { Component } from "react";

class AddToCartBtn extends Component<any, any> {

    constructor(props:any){
        super(props);
    }
  render() {
    return (
      <div >
        <button className="btn btn-danger btn-xs" onClick={(e:any)=>{
this.props.handleAddToCart(e,this.props.product);
this.props.product.stock--;
}}>
Add to cart
</button>
        
      </div>
    );
  }
}

export default AddToCartBtn;