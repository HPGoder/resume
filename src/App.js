
import './App.css';
import MenuToggler from './components/MenuToggler';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
// import Contact from './components/contact/Contact';
import Footer from'./components/Footer';




function App() {
  return (
    <div className="App">
      <header className="App-header">
          <MenuToggler/>
          <div className="landing-text">
            <h1> Henri-Pierre Goder</h1>
            <h6> Full Stack Developer | Python | Javascript </h6>
          </div>
      </header>
      <About/>
      <Services/>
      <Portfolio/>
      <Experience/>
      {/* <Contact/> */}
      <Footer/>
    </div>
  );
}

export default App;
