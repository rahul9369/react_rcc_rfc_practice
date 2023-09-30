// import React from "react";

// function Card11() {
//   return (
//     <div>
//       <h1>Hi</h1>
//     </div>
//   );
// }
// export default Card11;
import React, { Component } from "react";
import "./Card.css";
class Card11 extends Component {
  render() {
    return (
      <div className="card1">
        <h1>Name : Rahul Prajapati.</h1>
        <h3>Age : 20</h3>
        <p>My fav color yellow.</p>
      </div>
    );
  }
}

export default Card11;
