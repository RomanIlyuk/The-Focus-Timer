import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <MainLayout>
      <Home />
      <Toaster position="top-center" reverseOrder={false} />
    </MainLayout>
  );
}

export default App;
