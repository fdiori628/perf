import React from 'react';
import Header from './Comp/Header';
import './App.css';
import Body from './Comp/body';

function App() {

  //send request
  const mockData = {
    "host": "https://eyeguide-perf-02.essexlg.com",
    "vu" : 100,
    "spawnRate": 10,
    "runTime": "60m",
    "reportPath": "./reports/EyeVia/PerformanceReport_EyeViaVu50_100%cache_multiple_20230614.html",
    "status": "Running"
  }


  return (
    <div className='app-container'>
     <Header className="app-header"/>
     <Body className="app-body" data={mockData}/>
    </div>
  );
}

export default App;
