import React from 'react'
import { Navigation } from './components'

import '../styles/globals.css'

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>My First app with nexth 13</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>

    </html>
  )
}
