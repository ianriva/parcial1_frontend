import './App.css';
import Navigation from './Navigation';
import Home from './Home';
import MovieList from '../movies/MovieList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieDetail from '../movies/MovieDetail';
import MovieEdit from '../movies/MovieEdit';
import MovieAdd from '../movies/MovieAdd';
import GenreList from '../genres/GenreList';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="container h-100">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/movies" component={MovieList}></Route>
          <Route exact path="/genres" component={GenreList}></Route>
          <Route exact path="/movies/add" component={MovieAdd}></Route>
          <Route exact path="/movies/:id" component={MovieDetail}></Route>
          <Route exact path="/movies/:id/edit" component={MovieEdit}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
