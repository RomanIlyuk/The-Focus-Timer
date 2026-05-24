import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Toaster position="top-center" reverseOrder={false} />
      <Home />
    </div>
  );
}

export default App;
