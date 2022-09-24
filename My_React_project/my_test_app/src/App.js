import React, { useEffect, useState } from "react";
import Router from "./components/routers/routerPages/RouterWithLogin";
import {BrowserRouter} from "react-router-dom";
import './styles/app.css'
import { AuthorizContext } from "./context";

function App() {

  const [isAuthoriz, setIsAuthoriz] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
// это убирает переход на логин при обновлении страниц для авториз юзера
    if(localStorage.getItem('auth'))
    {setIsAuthoriz(true)}
    else
    {setIsAuthoriz(false)}
// это позволяет не обновлять страницу с открытым оффером
    setLoading(false)
  }, [])

  return (
    
    <div className="App">

      <AuthorizContext.Provider value= {{
        isAuthoriz,
        setIsAuthoriz,
        isLoading
      }}>

        <BrowserRouter> 
          <Router/>
        </BrowserRouter>

      </AuthorizContext.Provider>

    </div> 
  
  );
}

export default App;
