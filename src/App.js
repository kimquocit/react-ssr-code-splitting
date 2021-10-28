import React from 'react';
import './App.css';
import { Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';
import './assets/css/app.scss';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Switch>
          {renderRoutes(routes)}
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
