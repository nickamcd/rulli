import { useState } from 'react'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom'
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Shop from "./pages/Shop"
import Locations from "./pages/Locations"
import Gallery from "./pages/Gallery"
import Blog from "./pages/Blog"
import Careers from "./pages/Careers"
import Contact from './pages/Contact'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header />
        <Switch>
          <Route path='/' exact component={ Home } />
          <Route path='/about' component={ About } />
          <Route path='/products' component={ Products } />
          <Route path='/shop' component={ Shop } />
          <Route path='/locations' component={ Locations } />
          <Route path='/gallery' component={ Gallery } />
          <Route path='/blog' component={ Blog } />
          <Route path='/careers' component={ Careers } />
          <Route path='/contact' component={ Contact } />
        </Switch>
      </Router>
    </div>
  );
}

export default App