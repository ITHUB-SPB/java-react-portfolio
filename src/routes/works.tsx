import { useEffect } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import WorkCard from '../components/WorkCard'
import useWorks from '../hooks/useWorks'

export const Route = createFileRoute('/works')({
  component: WorksPage,
})

function WorksPage() {
    const {
      getWorks,
      isLoading,
      works 
    } = useWorks()
  
    useEffect(getWorks, [])
  
    return (
      <section>
        <h2>Work</h2>
        { isLoading ? <p>Загрузка...</p> : null }
        {works.map(props => <WorkCard key={props.id} {...props} />)}
      </section>
    )
}
