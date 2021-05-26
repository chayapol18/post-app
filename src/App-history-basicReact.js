import logo from './logo.svg';
import './App.css';
import GreetingMessage from './GreetingMessage.js' // . คืออ้างอิงที่อยู่ของไฟล์จากที่อยู่ไฟล์นั้นๆ (App.js)
import ProductItem from './ProductItem.js'
import Counter from './Counter.js'

function App() {
  return (
    <div className="App">
      <h1> React Codecamp #8</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <GreetingMessage />
      <ProductItem title="iPhone 12 pro" description="expensive" price={50000} />
      <ProductItem title="Samsung S21" description="expensive too" price={45000} />
      <ProductItem title="Play station 5" description="very good" price={16000} />
    </div>
  );
}

function App() {
  return (
    <div className="App">
    <Counter />
    </div>
  )
}


// export default App;

//default react ที่ใส่มาให้
/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */