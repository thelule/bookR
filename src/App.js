import { Route, Switch } from 'react-router-dom';
import FavoritesPage from './pages/Favorites';
import NewBookPage from './pages/NewBook';
import AllBooksPage from './pages/AllBooks';
import Layout from './components/layout/Layout';


function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact={true}>
          <AllBooksPage />
        </Route>
        <Route path='/new'>
          <NewBookPage />
        </Route>
        <Route path='/fav'>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout> );
}

export default App;
