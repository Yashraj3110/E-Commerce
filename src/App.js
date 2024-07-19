import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from "./components/pages/home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  const someProp = "someValue"; // Example prop


  return (

    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          {/* <Route exact path="/Cart" element={<Cart someProp={someProp} />} /> */}
        </Routes>

      </div>
    </Router>

  );
}

export default App;
