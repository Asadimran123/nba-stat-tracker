import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'

export default function App() {

  return (
    <main>
      <Navbar/>
      <select id="menu-select">
        <option value="Teams">Teams</option>
        <option value="Players">Players</option>
        <option value="My Teams">My Teams</option>
        <option value="My Players">My Players</option>
      </select>
      <div id="container">
        <Card
        name= "asad"
        />
      </div>
    </main>
  )
}

 
