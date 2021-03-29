// import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/Footer.jsx'
import Home from './container/home/Home.jsx'
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <body>
        <Home/>
      </body>
      <Footer/>
    </div>
  );
}

export default App;
