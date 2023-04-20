
import Layout from "./components/Layout.jsx";
import { Route, Routes } from 'react-router-dom';
import FirstPage from './components/FirstPage';
function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/layout" element={<Layout />} />
      </Routes>
    </>


  )
}

export default App
