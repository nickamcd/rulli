import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'

const App = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' />
        </Switch>
      </Router>
      <Header />
    </div>
  );
}

export default App