import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import Nav from './components/Nav/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Classes from './Classes.tsx';
import Groups from './Groups.tsx';
import Selection from './Selection.tsx';
import Grades from './Grades.tsx';
import Calendar from './Calendar.tsx';


function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <Router>
      <Nav />
      <Routes>
        {/* Define the routes and link them to the corresponding components */}
        
        <Route path="/Groups" element={<Groups />} />
        <Route path="/Selection" element={<Selection />} />
        <Route path="/Grades" element={<Grades />} />
        <Route path="/Calendar" element={<Calendar />} />
        <Route path="/Classes" element={<Classes />} />
      </Routes>
      <h1></h1>
    </Router>
  );
}


export default App;
