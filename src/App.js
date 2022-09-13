import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Items from "./items";
import ItemAdditionForm from "./additem";
import EditItem from './edititems';
import ItemDetails from "./itemdetails";
import Login from "./Login";
import {Register} from "./Register";
import {ForgetPassword} from './ForgetPassword';
import {ChangePassword }from "./ChangePassword";
import {PasswordUpdated} from "./PasswordUpdated";
function App() {
  return (
    <div className="App">



      <Routes>
      <Route path="/"
            element={<Login/>}/>

      <Route path="/additems"element={<ItemAdditionForm />}/>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/items/edit/:id" element={<EditItem />} />
        <Route path="/items/:id" element={<ItemDetails />} />
        <Route path="/items" element={<Items />} />
        <Route path="/Register" element={<Register />}  />
        <Route path="/Login" element={<Login />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/PasswordUpdated" element={<PasswordUpdated />} />
        {/* <Route path="/" element={<Navigate replace to="/Login" />} /> */}
        <Route path="/reset-password/:id/:token" element={<ChangePassword />} />
        
        {/* 
        
        
        
        <Route path="*" element={<NotFound />} /> */}
      </Routes>

    </div>
  );
}

export default App;





