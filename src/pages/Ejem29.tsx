import React from 'react'
import { Navigate } from 'react-router-dom';

export default function Ejem29() {
  const [hasAccess, ] = React.useState(false);
  if(!hasAccess) return <Navigate to="/Ejem1" />

  return (
    <div>Ejem29 esta protegido</div>
  )
}
