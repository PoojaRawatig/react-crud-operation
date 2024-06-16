import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  return (
    <div className="container">
    <BrowserRouter>
    <Routes>
 s
    <Route exact path="/" element = {<Create/>}></Route>
    <Route exact path="/read" element = {<Read />}></Route>
    <Route exact path="/update" element = {<Update />}></Route>
    

  
   </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
