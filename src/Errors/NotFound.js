import React from 'react'
import '../Home/Home.css'

export default function NotFound() {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <h1>404</h1>
        <h1>Page not found</h1>
        <a href="/" className="btn mybtn">
          <span><i className="fa fa-arrow-left" aria-hidden="true"></i> Take me home</span>
        </a>
      </div>
    </div>
  )
}
