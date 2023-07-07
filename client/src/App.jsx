import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { TasksPage } from "./pages/TasksPage";
import { TasksFormPage } from "./pages/TaskFormPage";
import { TaskLogin } from "./pages/TaskLogin"
import {Navigation} from "./components/Navigation";
import {Toaster} from "react-hot-toast";


function App() {
  return(
  <BrowserRouter>
  <div className='container mx-auto'>
    <Navigation />
      <Routes>
      <Route path="/" element={<TaskLogin/>} />
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