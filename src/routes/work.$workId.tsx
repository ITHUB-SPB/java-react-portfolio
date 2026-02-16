import { useEffect, createElement } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import useWork from '../hooks/useWork'

export const Route = createFileRoute('/work/$workId')({
  component: DetailsPage,
})

function renderContent(content: string[][]) {
  const elementMapping = {
    h1: "h1",
    h2: "h2",
    text: "p"
  } as const;

  return content
    ?.filter(([elementType, _]) => elementType !== "img")
    ?.map(([elementType, elementContent]) => {
      return createElement(elementMapping[elementType], {}, elementContent)
    })
}

function DetailsPage() {
  const { workId } = Route.useParams()

  const {
    getWork,
    isLoading,
    work
  } = useWork(workId)

  useEffect(getWork, [])

  if (isLoading) {
    return <p>Загрузка...</p>
  }

  return (
    <main>
      <h2>{work?.full_title}</h2>
      <p>{work?.text}</p>
      <div>{renderContent(work?.content)}</div>
    </main>
  )
}
