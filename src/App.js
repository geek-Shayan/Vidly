import logo from './logo.svg';
import './App.css';
import Movies from './components/movies';

function App() {
    return (
        <div className="App">
            <main className='container'>
                <img src={logo} className="App-logo" alt="logo" />
                <span><h1>Hello Movie World</h1></span>
                <Movies/>
            </main>  
        
        </div>
    );
}

export default App;
