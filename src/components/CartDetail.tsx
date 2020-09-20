import React, { Component } from "react";
import util from "../util";

class CartDetail extends Component<any, any> {


    constructor(props: any) {
        super(props);
    }

    render() {

        return (
            <div>
                <ul style={{ marginLeft: -50, }} className="list-unstyled">
                    <li style={{ marginBottom: 20, lineHeight: 2, border: 2 }} className="border">
                        <div className="row">

                            <div className="col-md-2">
                            </div>

                            <div className="col-md-2">
                                <b>Picture</b>
                            </div>

                            <div className="col-md-2">
                                <b>Title</b>
                            </div>

                            <div className="col-md-2">
                                <b>Amount </b>
                            </div>
                            <div className="col-md-2">
                                <b>Price</b>
                            </div>

                            <div className="col-md-2">
                                <b>Subtotal</b>
                            </div>

                        </div>
                    </li>

                    {this.props.location.state.ci.map((item: any) => (
                        <li key={item._id}>






                            <div className="row">

                                <div className="col-md-2">
                                    {/* <button
                                        style={{ float: "right", marginTop: 20 }}
                                        className="btn btn-danger btn-xs"
                                        onClick={(e) => {
                                            this.props.handleRemoveFromCart(e, item);
                                            

                                        }


                                        }
                                    >
                                        X
                                    </button> */}
                                </div>

                                <div className="col-md-2">
                                    <img src={item.picture} style={{ height: 40, width: 40, marginTop: 10 }} />
                                </div>

                                <div className="col-md-2">
                                    <b>{item.title}</b>
                                </div>

                                <div className="col-md-2">
                                    {item.count / 2}
                                </div>
                                <div className="col-md-2">
                                    {util.formatCurrency(item.price)}
                                </div>

                                <div className="col-md-2">
                                    {item.price * item.count / 2}
                                </div>

                            </div>




                            <br />

                        </li>
                    ))}
                </ul>
            </div>
        );


        // return(<div> {this.props.location.state.ci.length}</div>);


    }
}
export default CartDetail;