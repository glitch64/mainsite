import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Assistant from './pages/Assistant';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeContext } from './contexts/ThemeContext';
import './App.css';

function App() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <Router>
            <div className={`App ${theme === 'dark' ? 'dark-mode' : 'light-mode'}`}>
                <Header theme={theme} toggleTheme={toggleTheme} />
                <main>
                    <Routes>
                        <Route path="/" element={<Home theme={theme} />} />
                        <Route path="/about" element={<About theme={theme} />} />
                        <Route path="/portfolio" element={<Portfolio theme={theme} />} />
                        <Route path="/assistant" element={<Assistant theme={theme} />} />
                    </Routes>
                </main>
                <Footer theme={theme} />
            </div>
        </Router>
    );
}

export default App;
