import "./index.css";
import { useNavigate } from 'react-router-dom';



export function BoardPage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto p-8 text-center relative z-10">


      <h1 className="text-5xl font-bold my-4 leading-tight">BOARD</h1>

    </div>
  );
}

export default BoardPage;