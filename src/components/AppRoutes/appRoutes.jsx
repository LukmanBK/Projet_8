import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Apartment from '../../pages/Apartment/Apartment';
import NotFound from '../../pages/NotFound/NotFound';

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/appartement/:id' element={<Apartment />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes;