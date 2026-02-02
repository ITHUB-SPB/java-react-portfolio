import * as React from 'react'
import { Outlet, createRootRoute, Link } from '@tanstack/react-router'
import '../index.css'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/works">Works</Link>
      </nav>
      <Outlet />
    </React.Fragment>
  )
}
