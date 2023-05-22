
import './App.css';
import { Route,Routes,BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';
import Index from './pages/Index';
import Service from './pages/Service';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Index/>}/>
        {/* <Route path='signup' element={<Signup/>}/> */}
        {/* <Route path='main' element={<Main/>}/> */}
        {/* <Route path='index' element={<Index/>}/> */}
        <Route path='service' element={<Service/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
