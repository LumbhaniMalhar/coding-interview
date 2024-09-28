import { useEffect } from 'react';
import './App.css';

function App() {
  const getOrders = async () => {
    const data = await fetch('http://localhost:8000/orders');
    const orders = await data.json();
    console.log(orders);
  }
  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="App">
      <p>
        Hi Tushar, Welcome to the Full Stack role Interview!
      </p>
    </div>
  );
}

export default App;
