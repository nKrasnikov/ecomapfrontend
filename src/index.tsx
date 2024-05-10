import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/header';
import Footer from './components/footer';
import { YMaps } from '@pbe/react-yandex-maps';
import { IHideComponent } from './common/types/main';

const HideableFooter = (props: IHideComponent) => {
  const { location } = props;
  if (location.match('map') || location.match('create')) {
    return null;
  }
  return (
    <Footer />
  )
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <YMaps 
          enterprise
          query={{
            apikey: "41494eed-cc9e-454e-9145-44327fbf56d9",
            ns: "use-load-option",
            load: "package.full",
          }}>
            <Header />
            <App />
            <HideableFooter location={window.location.pathname} />
        </YMaps>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();