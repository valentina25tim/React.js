/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { SearchPage } from './components/pages/SearchPage';
import { SignInPage } from './components/pages/SignInPage';
import { Header } from './components/Header';
import { HomePage } from './components/pages/HomePage';
import { QuestionPage } from './components/pages/QuestionPage';
import { NotFoundPage } from './components/pages/NotFoundPage';
import { fontFamily, fontSize, gray2 } from './Styles';
import {Provider} from 'react-redux'
import { configureStore } from './API/services/Store';

const store = configureStore()

function App() {

  // The lazy function in React lets us render a dynamic import as a regular 
  // component. A dynamic import returns a promise for the requested module that is 
  // resolved after it has been fetched, instantiated, and evaluated
  const AskPage = React.lazy(() => import ('./components/pages/AskPage'))
  
  return (
  <Provider store={store}>
    <BrowserRouter>
      <div css={css`
        font-family: ${fontFamily};
        font-size: ${fontSize};
        color:${gray2};
      `}>
        <Header/>
        <Routes>
          <Route path="" element={<HomePage/>}/>
          <Route path="search" element={<SearchPage/>}/>
          
{/* The Suspense fallback prop allows us to render a component while AskPage
is loading.  */}
          <Route
            path="ask"
            element={ <React.Suspense
              fallback={
                <div css={css`
                  margin-top: 100px;
                  text-align: center;
                  `}
                >
                  Loading...

                </div>
              }
            >
              <AskPage />
            </React.Suspense>
            }
          />

          <Route path="signin" element={<SignInPage/>}/>
          <Route path="questions/:questionId" element={<QuestionPage/>}/>          
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  </Provider>
  );
}

export default App;
