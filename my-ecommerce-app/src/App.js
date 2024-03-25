import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './component/Homepage.js';
import ProductsPage from './component/ProductPage.js';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path='/products' element={<ProductsPage/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
