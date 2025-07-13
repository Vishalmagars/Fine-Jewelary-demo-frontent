// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/About'
import ExportShipping from './pages/Export&Shipping'
import CustomOrder from './pages/Custom'
import FAQs from './pages/FAQs'
import Certifications from './pages/Certifications'
import CustomOrderForm from './componets/CustomOrderForm'
import CustomPortfolio from './pages/CustomPortpolio'
import CustomForm from './pages/CustomForm'
import ExportDacumements from './pages/ExportDacumements'
import ProductsPages from './pages/ProductsPages'
import Page from './pages/ProductShowCase'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/b" element={<ExportShipping />} />
      <Route path="/custom" element={<CustomOrder />} />
      <Route path="/d" element={<FAQs />} />
      <Route path="/certifications" element={<Certifications />} />
      <Route path="/custom/portfolio" element={<CustomPortfolio />} />
      <Route path="/custom/form" element={<CustomForm />} />
      <Route path="/dac" element={<ExportDacumements />} />
      <Route path="/page" element={<ProductsPages />} />
      <Route path="/page1" element={<Page/>} />

    </Routes>
  )
}

export default App
