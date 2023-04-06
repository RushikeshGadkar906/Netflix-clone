
import './App.scss';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header/Header';
import Movies from './Components/Movies';
function App() {
  return (
    <Router >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route> 404 Page Not Found </Route>
      </Routes>
    </Router>
  );
}

export default App;
