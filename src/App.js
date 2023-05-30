import logo from './logo.svg';
import './App.css';
import Header from './companents/Header';
import Main from './companents/Main';
import Footer from './companents/Footer';

function App() {
  return (
    <section className="todoapp">
      <Header/>
      <Main/>
      <Footer/>
    </section>
  );
}

export default App;
