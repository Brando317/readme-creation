import { BrowserRouter, Switch, Route } from "react-router-dom";
import Films from "./films";
import Navbar from "./navbar";
import People from "./people";



const App = () => {
  return (
  <BrowserRouter>
  <Navbar />
  <Switch>
      <Route path="/films">
          <Films />
      </Route>

         
      <Route path="/">
          <Home />
      </Route>
  </Switch>
</BrowserRouter>
)


 
  
  
  
};

export default App;
