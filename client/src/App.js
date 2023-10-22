import Home from "./pages/Home";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
