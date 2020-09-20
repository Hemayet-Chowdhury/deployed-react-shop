import React, { Component } from "react";

class Sort extends Component<any, any> {

    constructor(props:any){
        super(props);
    }
  render() {
    return (
      <div className="row" style={{marginBottom:10}}>
        <div className="col-md-4">Showing {this.props.count} of 31 results</div>
        <div className="col-md-4"></div>
        <div className="col-md-4">
         
           
            <select
              className="form-control"
              value={this.props.sort}
              onChange={this.props.handleChangeSort}
            >
              <option value="">Default Sorting</option>
              <option value="lowestprice">Price: Lowest to highest</option>
              <option value="highestprice">Price: Highest to lowest</option>
            </select>
          
        </div>
      </div>
    );
  }
}

export default Sort;