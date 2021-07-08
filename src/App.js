import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import { GlobalStyle } from './pages/globalstyle';
import Menuweb from './pages/Menu/index';


function App() {
  return (
    <>
      <BrowserRouter>
      <GlobalStyle />  
      <Menuweb /> 
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
