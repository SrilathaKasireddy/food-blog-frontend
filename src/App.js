import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Items from "./components/items";
import Comments from "./components/comments"
import ItemAdditionForm from "./components/additem";
import EditItem from './components/edititems';
import ItemDetails from "./components/itemdetails";
import Login from "./components/Login";
import { Register } from "./components/Register";
import { ForgetPassword } from './components/ForgetPassword';
import { ChangePassword } from "./components/ChangePassword";
import { PasswordUpdated } from "./components/PasswordUpdated";
import CommentAdditionForm from "./components/addcomment";
import NotFound from "./components/Notfound";
import ProtectedRoute from "./components/ProtectedRoute";
import React  from 'react';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/items" element={<ProtectedRoute>
          <Items />
        </ProtectedRoute>}>
        </Route>
        <Route path="/home" element={<ProtectedRoute>
          <Home />
        </ProtectedRoute>}>
        </Route>
        <Route path="/comments" element={<ProtectedRoute>
          <Comments />
        </ProtectedRoute>}>
        </Route>
        <Route path="/additems" element={<ProtectedRoute>
          <ItemAdditionForm />
        </ProtectedRoute>}>
        </Route>
        <Route path="/addcomments" element={<ProtectedRoute>
          <CommentAdditionForm />
        </ProtectedRoute>}>
        </Route>
        <Route path="/items/edit/:id" element={<ProtectedRoute>
          <EditItem />
        </ProtectedRoute>}>
        </Route>
        <Route path="/items/:id" element={<ProtectedRoute>
          <ItemDetails />
        </ProtectedRoute>}>
        </Route>
        <Route path="/About" element={<ProtectedRoute>
          <About />
        </ProtectedRoute>}>
        </Route>
        {/* <Route path="/additems" element={<ItemAdditionForm />} />
        <Route path="/addcomments" element={<CommentAdditionForm />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} /> */}
        {/* <Route path="/items/edit/:id" element={<EditItem />} />
        <Route path="/items/:id" element={<ItemDetails />} />
        <Route path="/items" element={<Items />} /> */}
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/PasswordUpdated" element={<PasswordUpdated />} />
        <Route path="/reset-password/:id/:token" element={<ChangePassword />} />
        {/* <Route path="/comments" element={<Comments />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App;