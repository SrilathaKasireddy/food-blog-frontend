import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Items from "./items";
import Comments from "./comments"
import ItemAdditionForm from "./additem";
import EditItem from './edititems';
import ItemDetails from "./itemdetails";
import Login from "./Login";
import { Register } from "./Register";
import { ForgetPassword } from './ForgetPassword';
import { ChangePassword } from "./ChangePassword";
import { PasswordUpdated } from "./PasswordUpdated";
import CommentAdditionForm from "./addcomment";
import NotFound from "./Notfound";
 import  ProtectedRoute from "./ProtectedRoute"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}  />
       
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
          <CommentAdditionForm  />
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
        <Route path="/additems" element={<ItemAdditionForm />} />
        <Route path="/addcomments" element={<CommentAdditionForm />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/items/edit/:id" element={<EditItem />} />
        <Route path="/items/:id" element={<ItemDetails />} />
        <Route path="/items" element={<Items />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/PasswordUpdated" element={<PasswordUpdated />} />
        <Route path="/reset-password/:id/:token" element={<ChangePassword />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>

    </div>
  );
}
export default App;