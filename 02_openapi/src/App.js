import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main'
import RestList from './pages/RestList'
import RestDetail from './pages/RestDetail'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="rest">
            <Route index element={<RestList/>}/>
            <Route path=":MSRADMCODE" element={<RestDetail/>}/>
          </Route>
          </Route>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
