import  MoviesList from './pages/MoviesList';
import Footer from './components/Footer';
import Cover from './components/Cover';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cover></Cover>
        <MoviesList></MoviesList>
        <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
