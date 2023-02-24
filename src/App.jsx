
import './App.css'
import './css/main.scss'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Landing from './pages/Landing'
import News from './pages/News'
import Performance from './pages/Performance'
import Support from './pages/Support'
import Transactions from './pages/Transactions'

import Sidebar from './Components/Sidebar'

function App() {
 
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/landing' element={<Landing/>} />
          <Route path='/news' element={<News/>} />
          <Route path='/performance' element={<Performance/>} />
          <Route path='/support' element={<Support/>} />
          <Route path='/transactions' element={<Transactions/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
