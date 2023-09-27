import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import './styles/styles.css';
import './i18n';
import i18next from "i18next";
import {I18nextProvider} from "react-i18next";

ReactDOM.render(
  <Suspense fallback="loading">
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </Suspense>,
  document.getElementById('root')
);
