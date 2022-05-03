import { Route, Switch } from 'react-router-dom';
import CharacterList from './views/CharacterList';
import CharacterDetail from './views/CharacterDetail';
export default function App() {
  return (
    <Switch>
      <Route path='/characters/:id'>
        <CharacterDetail />
      </Route>
      <Route path='/'>
        <CharacterList />
      </Route>
    </Switch>
  )
}
