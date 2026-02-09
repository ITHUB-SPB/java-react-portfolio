import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

import WorkCard from '../components/WorkCard'
import useWorks from '../hooks/useWorks'


export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const {         
    getWorks,
    isLoading,
    works 
  } = useWorks()

  useEffect(getWorks, [])

  return (
    <section>
      <h2>Featured Works</h2>
      { isLoading ? <p>Загрузка...</p> : null }
      {works.slice(0, 2).map(props => <WorkCard key={props.id} {...props} />)}
    </section>
  )
}