import React from 'react'
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4" aria-label="Eighth navbar example">
      <div className="container">
        <Link className="navbar-brand" to="/" >Movies</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample07">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/movies" >Catálogo</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/genres" >Géneros</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;
