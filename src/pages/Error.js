import { useRouteError } from 'react-router-dom'

import React from 'react'

const Error = () => {
    const err=useRouteError();
    console.log(err)
  return (
    <div>
      <h1>oooyeahhhh</h1>
      <h3>{err.status}</h3>
    </div>
  )
}

export default Error
