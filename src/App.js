import "./App.css";
import About from "./components/About";
import { Home } from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1800);
  };
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert} />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login showAlert={showAlert} />}/>
              <Route exact path="/signup" element={<Signup showAlert={showAlert} />}/>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;


// const Routes = [
//   {
//       route:"login",
//       component: <Login/>,
//       isPublic:true
//   },
//   {
//       route:"signup",
//       component: <Signup/>,
//       isPublic:true
//   },
//   {
//       route:"notes",
//       component: <Notes/>,
//       isPublic:false
//   }
  
// ]

// Routes.map((route)=>{
//   if(route.isPublic) return true
//   if(localStorage.getItem('token').length > 0){
//       return true   
//   }else{
//       return false
//   }
// })

// if (true) redirect to that page  
// if (false) redirect to signup or login page 