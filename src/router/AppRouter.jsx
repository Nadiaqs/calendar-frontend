import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginPage } from '../auth';
import { CalendarPage } from '../calendar';
import { useAuthStore } from '../hooks';




export const AppRouter = () => {
  
  const { status, checkAuthToken } = useAuthStore();
  //const authStatus = 'not-authenticated'; // 'authenticated'; 'not-authenticated'; 'checking'
  
    
useEffect(() => {
    checkAuthToken();
  }, [])
 
    if ( status === 'checking' ) {
      return (
        <h3>Cargando...</h3>
      )

    }

    return (
      <Routes>
          {
                ( status === 'not-authenticated')  
                ? (
                    <>
                      <Route path="/auth/*" element={ <LoginPage />} /> {/*sino estoy autenticado me llevara a esta ruta*/}
                      <Route path="/*" element={ <Navigate to="/auth/login" /> } />
                    </>

                )
                : (
                  <>
                    <Route path="/" element={ <CalendarPage />} /> {/*si estoy autenticado me llava esta ruta*/}
                    <Route path="/*" element={ <Navigate to="/" /> } />
                  </>

                ) 
          }

         
      </Routes>
    )
}
