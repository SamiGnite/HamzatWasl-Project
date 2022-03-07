import './App.css';
import Home from './components/Home/home'
import About from './components/About/about'
import Features from './components/Features/features';
function App() {
  return (
    <div className="App">
     <Home id="home" />
     <About id="about" />
     <Features />
    </div>
  );
}

export default App;
