import './App.css'
import { useState, useEffect } from 'react';
import LoadingMask from './components/LoadingMask'
import Hotel from './components/Hotel';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!data) fetch("api/hotels", {
      method: "get"
    })
      .then(res => res.json())
      .then(d => setData(d))
  }, []);

  return (
    <div className="App">
      <h1>Hotels</h1>
      {data ? data.map(i => (
      <Hotel key={i.name} data={i} />
      )) :
      <LoadingMask />}
    </div>
  )
}

export default App
