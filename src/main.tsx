import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import amplifyConfig from "./amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
import './index.css'
import App from './App.tsx'
import { Toaster } from './components/ui/sonner.tsx';
import { ThemeProvider } from './components/theme/theme-provider.tsx';


Amplify.configure(amplifyConfig);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster 
      richColors
      position="top-center"
    />
    <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
    <App />
    </ThemeProvider>
  </StrictMode>,
)
