import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { TasksPage } from "./pages/TasksPage";
import { TasksFormPage } from "./pages/TaskFormPage";
import { TaskLogin } from "./pages/TaskLogin"
import { TaskRegister } from "./pages/TaskRegister";
import {Navigation} from "./components/Navigation";
import {Toaster} from "react-hot-toast";
import { TaskLogout } from "./pages/TaskLogout";


function App() {
  return(
  <BrowserRouter>
  <div className='container mx-auto'>
      <Routes>
      <Route path="/" element={<Navigation/>} />
      <Route path="/login" element={<TaskLogin/>} />
      <Route path="/logout" element={<TaskLogout/>} />
      <Route path="/register" element={<TaskRegister/>} />
      <Route path="/tasks" element={<TasksPage />} />
      <Route path="/tasks-create" element={<TasksFormPage />} />
      <Route path="/tasks/:id" element={<TasksFormPage />} />

    </Routes>
    <Toaster />
  </div>
  </BrowserRouter>
  );
}

export default App