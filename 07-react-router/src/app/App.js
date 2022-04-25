import { Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from './componets/dashboard';
import NavBar from './componets/navBar';
import Login from './componets/login';
import Home from './componets/home';
import Stats from './componets/stats';
import Posts from './componets/posts';
import NotFound from './componets/notFound';

function App() {
  return (
    <div>
      <NavBar/>
      <h1>App</h1>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/dashboard/stats' component={Stats}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/login' component={Login}/>
        <Route
          path='/posts/:postId?' component={Posts}
        />
        <Route path='/404' component={NotFound} />
        <Redirect from='/admin' to='/dashboard' />
        <Redirect to='/404' />
      </Switch>
    </div>
  );
}

export default App;
