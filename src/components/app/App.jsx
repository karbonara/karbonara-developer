import About from '../../pages/about/about';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../../pages/home/home';
import Layout from '../layout/layout';
import Work from '../../pages/Work/work';
import Stack from '../../pages/stack/stack';
import ErrorPage from '../../pages/error-page/error-page';
import { useTransition, animated } from 'react-spring';
import '../../App.css';

function App() {
    const location = useLocation();
    const transitions = useTransition(location, {
        from: {
            opacity: 0,
        },
        enter: {
            opacity: 1,
        },
        leave: {
            opacity: 0,
        }
    });

    return transitions((props, item) => (
        <div style={{ position: 'relative' }}>
            <animated.div style={props}>
                <div style={{ position: 'absolute', width: '100%' }}>
                    <Routes location={item}>
                        <Route path="/" element={<Layout />}>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/work" element={<Work />} />
                            <Route path="/stack" element={<Stack />} />
                        </Route>
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </div>
            </animated.div>
        </div>
    ));
}

export default App;
