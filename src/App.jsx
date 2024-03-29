import React, { useState, useEffect, useRef } from 'react';
import { ModalProvider } from './context/modal-context';
import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Portfolio from './sections/portfolio/Portfolio';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floatingNav/FloatingNav';
import Theme from './theme/Theme';

import { useThemeContext } from './context/theme-context';

// Custom hook for managing floating nav state and logic
const useFloatingNavLogic = () => {
    const [siteYPosition, setSiteYPosition] = useState(0); // Declare siteYPosition
    const [showFloatingNav, setShowFloatingNav] = useState(false);
    const mainRef = useRef(null);
    const { themeState } = useThemeContext();

    const floatingNavToggleHandler = () => {
        // check if scrolled up or down at least 20px
        if (siteYPosition < (mainRef?.current?.getBoundingClientRect().y - 20) || siteYPosition > (mainRef?.current?.getBoundingClientRect().y + 20)) {
            setShowFloatingNav(true);
        } else {
            setShowFloatingNav(false);
        }

        setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
    };

    useEffect(() => {
        const checkYPosition = setInterval(floatingNavToggleHandler, 2000);

        // cleanup function
        return () => clearInterval(checkYPosition);
    }, [siteYPosition]); // Dependency array updated

    return { showFloatingNav, setShowFloatingNav };
};



const App = () => {
    const { showFloatingNav } = useFloatingNavLogic(); // Destructure needed values

    return (
        <div>
            <ModalProvider>
                <Navbar />
                <Header />
                <About />
                <Portfolio />
                <Contact />
                <Footer />
                <FloatingNav isVisible={showFloatingNav} /> {/* Pass showFloatingNav prop */}
                <Theme />
            </ModalProvider>
        </div>
    );
};

export default App;
