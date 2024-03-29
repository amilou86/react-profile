import ReactDom from 'react-dom/client'
import { StrictMode } from 'react';
import App from './App';

import { ThemeProvider } from './context/theme-context';
import './index.css'

const root = ReactDom.createRoot(document.querySelector('#root'));
root.render(
    <StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </StrictMode>
);