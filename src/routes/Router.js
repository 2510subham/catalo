import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Layout from '../components/Layout.jsx'
import FirstPage from '../components/FirstPage.jsx'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<FirstPage/>} />
        <Route path='/layout' element={<Layout/>} />
    </Routes>
    )
}

export default Router;