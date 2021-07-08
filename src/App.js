import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home/index';
import { GlobalStyle } from './pages/globalstyle';


function App() {
  return (
    <>
      <BrowserRouter>
      <GlobalStyle /> 
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
