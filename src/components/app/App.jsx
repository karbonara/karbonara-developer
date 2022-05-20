import About from '../../pages/about/about';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/home/home';
import Layout from '../layout/layout';
import Work from '../../pages/Work/work';
import Stack from '../../pages/stack/stack';
import ErrorPage from '../../pages/error-page/error-page';
import '../../App.css';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/stack" element={<Stack />} />
                </Route>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </div>
    );
}

export default App;
