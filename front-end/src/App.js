import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUpdate from './pages/AddUpdate';
import Home from './pages/Home';
import Search from './pages/Search';
import Sidebar from './pages/Sidebar';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import View from './pages/View';
import Header from './components/Header';
import Turmas from './pages/Turmas';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Cart from './pages/Cart';
// import { CartProvider } from 'react-use-cart';
import ListAlunos from './pages/ListAlunos';
import TableMatriculas from './pages/Matricula';
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
          <Route path='/add' element={<AddUpdate />} />
          <Route path='/update/:id' element={<AddUpdate />} />
          <Route path='matriculas' element={<TableMatriculas />} />
          <Route path='/view/:id' element={<View />} />
          <Route path='/listall' element={<ListAlunos />} />
          <Route path='/search' element={<Search />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
