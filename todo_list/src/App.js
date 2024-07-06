import './App.css';
// import Form from 'react-bootstrap/Form';
import Task from './components/todoTask'
import TodoContainer from './components/todoContainer';
import NavBar from './components/navBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/home';
import CompletedTasks from './components/completedTasks';






function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
      <Route index element={<Home/>} />
      <Route path='/task' element={<TodoContainer/>}/>
      <Route path='/completed' element={<CompletedTasks/>}/>

      </Routes>
    </BrowserRouter>
      
    
    </>
  );
}

export default App;
