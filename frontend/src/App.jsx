import { useEffect, useState } from 'react'
import Navigaion from './customer/components/Navigation/Navigation'
import HomePage from './pages/HomePage/HomePage'
import { Routes, Route } from 'react-router-dom'
import DressesSection from './customer/components/ProductPage/womanSections/DressesSection.jsx';
// import { getDressData } from '../src/api/Fetch'
import TopsSection from './customer/components/ProductPage/womanSections/TopsSection.jsx';
import Lehenga from './customer/components/ProductPage/womanSections/LehengaSection.jsx';
import JeansSection from './customer/components/ProductPage/womanSections/JeansSection.jsx';
import LehengaCholi from './customer/components/ProductPage/womanSections/LehengaCholiSection.jsx';
import ShirtsSection from './customer/components/ProductPage/manSections/ShirtsSection.jsx';
import PantsSection from './customer/components/ProductPage/manSections/PantsSection.jsx';
import ShoesSection from './customer/components/ProductPage/manSections/ShoesSection.jsx';
import KurtaSection from './customer/components/ProductPage/manSections/KurtaSection.jsx';
import ProductOverview from './pages/ProductOverview.jsx';
import Search from './pages/search/Search.jsx';
function App() {
  return (
    <>
      <div>
        <Navigaion />
      </div>
      <Routes>
        <Route element={<HomePage />} path='/' />
        <Route element={<DressesSection category='dress' />} path='/product/woman/dress' />
        <Route element={<JeansSection category='Wjeans'/>} path='/product/woman/Wjeans' />
        <Route element={<TopsSection category='tops' />} path='/product/woman/tops' />
        <Route element={<Lehenga category='lehenga'/>} path='/product/woman/lehenga' />
        <Route element={<LehengaCholi category='lehengaCholi' />} path='/product/woman/lehengaCholi' />
        <Route element={<ProductOverview />} path='/product/:gender/:category/:id' />
          <Route element={<ShirtsSection category='shirts'/>} path='/product/man/shirts'/>
          <Route element={<PantsSection category='pants'/>}   path='/product/man/pants'/>
           <Route element={<ShoesSection category='shoes'/>}  path='/product/man/shoes'/> 
          <Route element={<KurtaSection category='kurta' />}  path='/product/man/kurta'/> 
          <Route element={<Search/>}  path='/search'/> 
          <Route element={<Authentication/>}  path='/authentication'/> 


      </Routes>
    </>
  )
}

export default App
