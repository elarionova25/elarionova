import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";

function App() {
    return <>
        <Navbar />
        <main className="container">
            <Intro/>
        </main>
    </>
}

export default App;
