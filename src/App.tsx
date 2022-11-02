import React from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return <div className="App">{t('English')}</div>;
}

export default App;
