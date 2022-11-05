import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MovieDetail from "./pages/MovieDetail";
import PrivateRouter from "./router/PrivateRouter";
import LoginProvider from "./context/LoginProvider";


function App() {
  return (
    <LoginProvider>
      <Routes>
      <Route index element={<Main />} />
      <Route path="moviedetails" element={<PrivateRouter/>}>
        <Route path="" element={<MovieDetail />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<Main />}/>
    </Routes>
    </LoginProvider>
  );
}

export default App;
