import { useState, useEffect } from 'react'
import './App.css'
import WorkCard from './components/WorkCard'

function App() {
  const [works, setWorks] = useState([])

  const getWorks = () => {
    fetch('http://localhost:3000/works?_sort=-year,title')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network issues')
        }
        return response.json()
      })
      .then(data => {
        setWorks(data)
      })
      .catch(error => {
        console.error(error)
      })
  }

  useEffect(getWorks, [])

  return (
    <section>
      <h2>Featured Works</h2>
      {works.map(props => <WorkCard {...props} />)}
    </section>
  )
}

export default App
