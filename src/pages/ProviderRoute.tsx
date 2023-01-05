import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProviderRoute({
  user,
  children,
}: {
  user: any
  children: any
}) {
  if (user === null) {
    return <Navigate to="login" />
  }
  return children
}
