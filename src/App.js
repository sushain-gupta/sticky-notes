import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Notes from "./components/Notes";

function App() {
  return (
    <div>
      <Header />
      {[...Array(20)].map(() => <Notes />)}
      <Footer />
    </div>
  );
}

export default App;



