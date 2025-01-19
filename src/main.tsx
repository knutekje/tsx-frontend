import { StrictMode } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient } from '@tanstack/react-query';



//export const apiUrl = import.meta.env.VITE_TASKS_HTTPS;
export const apiUrl = "http://localhost:4000/api/tasks/"
console.log(apiUrl)


const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
)
