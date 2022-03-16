import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
// import Register from "./components/Register";
// import Login from "./components/Login";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Landing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
