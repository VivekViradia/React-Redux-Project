
import './App.css';

function App() {
  return (
    <>
      <div className='container'>
        <h1>
          Increment/Descrement Counter
        </h1>
        <h4>Using React & Redux</h4>
        <div className='quantity'>
          <a className='quantity__minus' title='Decrement'><span>-</span></a>
          <input className='quantity__input' name='quantity' type='text' value='0' />
          <a className='quantity__plus' title='Increment'><span>+</span></a>
        </div>
      </div>
    </>
  );
}

export default App;
