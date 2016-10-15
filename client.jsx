import Application from './src/Application';
import React from 'react';
import ReactDOM from 'react-dom';
import languages from './languages';

document.addEventListener('DOMContentLoaded', () => {

  let appContainer = document.createElement('div');
  appContainer.id = 'application';
  document.body.appendChild(appContainer);

  ReactDOM.render(
    <Application defaultLanguage="en" languages={languages} />,
    appContainer
  );
});
