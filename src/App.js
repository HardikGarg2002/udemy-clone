// import logo from './logo.svg';
import './App.css';
import Courses from './components/selection/Selection';
import Header from './components/header/Header';
import SearchPage from './container/searchPage/SearchPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Courses />
      <SearchPage />
    </div>
  );
}

export default App;
