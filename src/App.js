import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Menu from './components/menu'
// import Breakfast from './components/breakfast';
// import Lunch from "./components/lunch";
// import Dinner from './components/dinner';

function App() {
  return (
    <>
      <BrowserRouter>
        <body style={{ backgroundColor: 'black' ,fontFamily:'curvive'}}>

          <center >
            <div style={{ padding: '140px' }}>
              <h1 style={{ margin: '0', fontSize: '120px', color: 'white' }}>Welcome To Our Resturant</h1>
              <NavLink to="/menu" >
                <button style={{ padding: '20px 100px', borderRadius: '30px', margin: '50px', fontSize: '50px' }}>Menu</button>
              </NavLink>

            </div>

          </center>

        </body>
        <Routes>
          <Route exact path="/menu" element={<Menu />} />
        
        </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;


