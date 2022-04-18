import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import store from './configStore';
import App from './Containers/App';
import Notes from './Containers/Notes';
import Archieves from './Containers/Archieves';

ReactDOM.render(
  <React.StrictMode>
    <Provider
      store={store}
    >
      <Router>
        <Routes>
          {/* {
                Object.keys(routesConfig).map((key, index) => {
                  let obj  = routesConfig[key as keyof typeof routesConfig]
                  console.log(obj)
                  return <Route path={obj.path} element={obj.element}  key={index} />
                })
              } */}
          <Route
            path="/"
            element={<App />}
          >
            <Route
              index
              element={<Notes />}
            />
            <Route
              path="archieve"
              element={<Archieves />}
            />
          </Route>

          {/* <Route path="/" element={<Notes />}   /> */}
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
