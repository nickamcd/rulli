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
import Contact from "./pages/Contact"
import Footer from "./components/Footer"

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
          <Route path='/facebook' component={ () => {
            window.location.href = 'https://www.facebook.com/emporiorulli/'
            return null
          } }/>
          <Route path='/twitter' component={ () => {
            window.location.href = 'https://twitter.com/emporiorulli'
            return null
          } }/>
          <Route path='/instagram' component={ () => {
            window.location.href = 'https://www.instagram.com/emporio_rulli_panettone/'
            return null
          } }/>
          <Route path='/pinterest' component={ () => {
            window.location.href = 'https://www.pinterest.com/pin/554365035352061124/'
            return null
          } }/>
          <Route path='/linkedin' component={ () => {
            window.location.href = 'https://www.linkedin.com/company/emporio-rulli-inc-/'
            return null
          } }/>
          <Route path='/yelp' component={ () => {
            window.location.href = 'https://www.yelp.com/biz/emporio-rulli-larkspur'
            return null
          } }/>
          <Route path='/tripadvisor' component={ () => {
            window.location.href = 'https://www.tripadvisor.com/Restaurant_Review-g32609-d379178-Reviews-Emporio_Rulli-Larkspur_Marin_County_California.html'
            return null
          } }/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App