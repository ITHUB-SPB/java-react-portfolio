import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

import WorkCard from '../components/WorkCard'
import type { WorkDTO } from '../types'


export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const [works, setWorks] = useState<WorkDTO[]>([])
  const [isLoading, setLoading] = useState(false)

  const getWorks = () => {
    setLoading(true)

    fetch('http://localhost:3000/works?_sort=-year,title')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network issues')
        }
        return response.json()
      })
      .then((data) => {
        setWorks(data)
      })
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(getWorks, [])

  return (
    <section>
      <h2>Featured Works</h2>
      { isLoading ? <p>Загрузка...</p> : null }
      {works.map(props => <WorkCard key={props.id} {...props} />)}
    </section>
  )
}