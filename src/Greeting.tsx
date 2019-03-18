import React from 'react'

interface Props {
  name?: string  // who to greet?
}

export default ({ name='world' }: Props) => {
  return (
    <h1>Hello {name}!</h1>
  )
}

