import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Professores/Home';
import Sidebar from './components/Sidebar';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import Turmas from './pages/Turmas/Turmas';
import TableMatriculas from './pages/Turmas/Matricula';
import ListAlunos from './pages/Estudantes/ListAlunos';
import CreateP from './pages/Professores/create-updateP';
import CreateA from './pages/Estudantes/create-updateA';
function App() {
  return (
    
    <BrowserRouter>
      <div className="App">
     
        <Sidebar />
        <Header />
        <ToastContainer position='top-center' />
        <Routes>
          {/* <Route exact path='/' element={<Authentication />} /> */}
          <Route path='/turmas' element={<Turmas />} />
          <Route exact path='/professor' element={<Home />} />
          <Route path='/professor/adicionar' element={<CreateP />} />
          <Route path='/professor/adicionar/:id' element={<CreateP />} />
          <Route path='/alumno/adicionar' element={<CreateA />} />
          <Route path='/alumno/adicionar/:id' element={<CreateA />} />
          <Route path='/matriculas/:id' element={<TableMatriculas />} />
          <Route path='/alumno' element={<ListAlunos />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
