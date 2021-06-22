import { useState } from 'react'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom'
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Shop from "./pages/Shop"
import Locations from "./pages/Locations"
import Careers from "./pages/Careers"
import Contact from "./pages/Contact"

import Larkspur from "./pages/locations/Larkspur"
import Ristobar from "./pages/locations/Ristobar"

const App = () => {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <Switch>
          <Route path='/' exact component={ Home } />
          <Route path='/about' component={ About } />
          <Route path='/products' component={ Products } />
          <Route path='/shop' component={ Shop } />
          <Route path='/locations' exact component={ Locations } />
          <Route path='/locations/larkspur' component={ Larkspur }/>
          <Route path='/locations/ristobar' component={ Ristobar } />
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
    </div>
  );
}

export default App