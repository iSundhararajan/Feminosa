import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Sos from '../pages/Sos';
import Donate from '../pages/Donate';

function Main() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="products" element={<Products />} />
                <Route path="sos" element={<Sos />} />
                <Route path="/donate" element={<Donate />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Main;
