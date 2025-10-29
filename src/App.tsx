import { APITester } from "./APITester";
import { Launch } from "./launcher";

import "./index.css";



export function App() {
  return (
    <div className="max-w-7xl mx-auto p-8 text-center relative z-10">


      <h1 className="text-5xl font-bold my-4 leading-tight">Launch a board</h1>

      <Launch/>
    </div>
  );
}

export default App;
