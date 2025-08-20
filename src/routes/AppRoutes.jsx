
import { BrowserRouter, Routes , Route} from "react-router-dom";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Profile from "../pages/profile/Profile";
import Card from "../pages/card/Card";


const AppRoutes = ({posts, page, setPage}) => {
  return (
    <div>
       <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path='/home' element={<Card posts={posts} page={page} setPage={setPage}/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes
