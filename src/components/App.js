import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} color={user.color} city={user.city}/>
      <About bio={user.bio} links={user.links}/>
    </div>
  );
}

// function Shape( {kind, color} ) {
//   if (kind === 'circle') {
//     return <div style={{
//       height: '100px', 
//       width: '100px', 
//       borderRadius: '50%',
//       background: `#${color}`
//     }}></div>
//   }
//   if (kind ===)
//   return ()
// }

export default App;
