import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import amplifyConfig from "./amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
import './index.css'
import App from './App.tsx'


Amplify.configure(amplifyConfig);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
