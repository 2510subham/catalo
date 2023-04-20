// import './App.css'
// import { useSelector } from 'react-redux';
import Layout from "./components/Layout.jsx";
import { Route, Routes } from 'react-router-dom';
import FirstPage from './components/FirstPage';
function App() {
 
    // const name = useSelector(state => state.name);
    // const email = useSelector(state => state.email);
    // console.log(name,email);
  

  return(
    <>
    <Routes>
      <Route path="/" element={<FirstPage/>}/>
      <Route path="/layout" element={<Layout/>}/>
    </Routes>
    </>


  ) 
}

export default App
