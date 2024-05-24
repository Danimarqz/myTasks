import {BrowserRouter, Routes, Route} from "react-router-dom";
import { TasksPage } from "./pages/TasksPage";
import { TasksFormPage } from "./pages/TaskFormPage";
import { TaskLogin } from "./pages/TaskLogin"
import { TaskRegister } from "./pages/TaskRegister";
import {Index} from "./components/Index";
import {Toaster} from "react-hot-toast";
import { TaskLogout } from "./pages/TaskLogout";
import { Header } from "./components/Header";


function App() {
  return(
    <BrowserRouter>
    <Header/>
  <div className='container mx-auto'>
      <Routes>
      <Route path="/" element={<Index/>} />
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