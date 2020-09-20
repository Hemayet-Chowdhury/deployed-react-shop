import React, { Component } from "react";
import util from "../util";


class ProductDetail extends Component<any, any> {


    constructor(props:any){
        super(props);
       
      


        
    }

 

    render(){
        
      
     const style = {
         height: 300,
         width:300 
     }
        

      

        return(

            <div className="row"> 
               <div className="col-md-6">
                     <img src={this.props.location.state.prod.picture } style={style}/>
                </div>

                <div className="col-md-6">
                    <h1> {this.props.location.state.prod.title} </h1>
                    <h4 style={{color : 'red'}}> $ {this.props.location.state.prod.price} </h4>
                    <p> {this.props.location.state.prod.description} </p>
                    <button className="btn btn-primary btn-xs" onClick={(e:any)=>this.props.handleAddToCart(e,this.props.location.state.prod)}> Add to Cart
                    </button>
                </div>
            
             </div>
            
            
            );


    }
}
export default ProductDetail;