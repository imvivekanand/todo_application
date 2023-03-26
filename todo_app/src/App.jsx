import { useState } from "react";
import "./App.css";
import Input from "./components/input";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-black h-screen p-3">
      <div className="mx-auto max-w-[750px] min-h-[550px] shadow-2xl bg-slate-50 rounded-xl">
        <Input/>
      </div>
    </div>
  );
}

export default App;
