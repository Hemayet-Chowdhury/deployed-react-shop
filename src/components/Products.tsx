import React, {Component} from 'react';
import util from "../util";
import {Link} from 'react-router-dom';
import AddToCartBtn from './AddToCartBtn';



class Products extends Component<any,any> {
 
 constructor(props:any){
 super(props);
 }
 
  
 render(){

 const productItems = this.props.products.map((product:any) => (
      <div className="col-md-4" key={product.id}>
     
        <div className="thumbnail text-center">
          

       <Link to={{ pathname : `/product/${product._id}`, state: {prod: product}}}>
            <img src={product.picture} alt={product.title} />
            <p>{product.title.substring(0,10)}</p>
        </Link> 

        <span>  <b>{util.formatCurrency(product.price)}</b> </span>
         { product.stock>0 && (

<button className="btn btn-primary btn-xs" onClick={(e:any)=>{
this.props.handleAddToCart(e,product);
product.stock--;
}}>
Add to cart
</button>


         )

         }
        
          
          
        </div>
      </div>
    ));

 return (


  


  <div className="row">
  {productItems}
  </div>
 );

 }

}

export default Products