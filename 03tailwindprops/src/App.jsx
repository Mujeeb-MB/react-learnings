import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  let userObj = {
    name: "mujeeb",
    age: 21,
  };
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card username="Mujeeb" btnTxt="Click me" />
      <Card username="Mb" />
    </>
  );
}

export default App;
