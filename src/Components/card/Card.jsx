import React, { Component } from "react";
// import Friends3 from "../Friends3.png"
import Friends4 from "../Friends4.svg"


export default class Card extends Component {
    render() {
        return (
           <div className="card-container">
               <div className="">
                   <img src={this.props.image} alt="tea"/>
               </div>
               <div className="card-text">
                   <h3 className="product-type">{this.props.name}</h3>
                   <p className="price">{this.props.price}</p>
               </div>
           </div>
        )
    }
}