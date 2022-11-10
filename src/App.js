import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js";

// /* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
// /* ############################################################## */

function App() {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      {/*  */}
      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        // in props, sets up a field called 'item' and passes in the 'item' variable
        <BakeryItem item={item} cart={cart} setCart={setCart} count={count} setCount={setCount}/>
        // <p>Bakery Item {index}</p> // replace with BakeryItem component
      ))}
      {/* display what's in my cart */}
      {cart.map((item) => (
        <div>{item.name}</div>
      ))
      }
      <div>{count}</div>
    </div>
  )
  // print total cost --> take everything in cart, counter for prices, similar to map --> calc cost and display it
}

// function CartItems(props) {
//   return (
//     <button onClick={() => props.updateCart(props.index)}>{propx.item.name}</button>
//   )
// }

//TODO UPDATED get description, price and image to display

// function App() {
//   // TODO: use useState to create a state variable to hold the state of the cart
//   /* add your cart state code here */
//   // const [cart, setCart] = useState({});
//   // const updateCart = (uid) => {}
//   //   let newCart = cart;
//   //   if (newCart[uid]) {
//   //     newCart[uid] += 1;
//   //   } else {
//   //     newCart[uid] = 1;
//   //   }
//   //   setCart({...newCart});
//   // }
//   // return (
//   //   <div>
//   //     {data.map((item, index) => {
//   //       return (
//   //         <CartItems updateCart = {updateCart} item={item} index={index} />
//   //       )
//   //     })}
//   //     {Object.keys(cart).map((key) => {
//   //       return (
//   //         data[key].name + ": " + cart[key] + " "
//   //       )
//   //     })}
//   //     </div>
//   //     )

//   //   function CartItems(props) {
//   //     return (
//   //       <button onClick={() => props.updateCart(props.index)}>{props.item.name}</button>
//   //     )
//   //   }

//   return (
//     <div className="App">
//       <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

//       {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
//         <p>Bakery Item {index}</p> // replace with BakeryItem component
//       ))}

//       <div>
//         <h2>Cart</h2>
//         {/* TODO: render a list of items in the cart */}
//       </div>
//     </div>
//   );

export default App;
