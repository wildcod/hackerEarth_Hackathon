import React from 'react';
import './App.scss';
import Layout from './components/common/Layout/Layout';
import Home from './components/pages/Home/Home';

function App() {
  return (
    <div className="app">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
