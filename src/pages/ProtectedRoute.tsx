import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ element, profile }: any) {
  if (!profile) {
    return <Navigate to="/login" />
  }
  return element
}
