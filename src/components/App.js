import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

{/* write an <About> component here */}
//About is the 3rd component. It was not previously included for us
//This function returns a div with an id of about
function About(){
  return (
    <div id =  "about">
      <h2>About</h2>
      </div>
  );
}
//The components listed in this return statement are the children of App

function App() {
  return (
    <div>
      
      <NavBar/>;
      <Home/>;
      <About/>
    </div>
  );
}

export default App;
