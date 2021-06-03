import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="mt-5">
            <main className="px-3 text-center">
                <h1>Peliculas</h1>
                <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, exercitationem?</p>
                <p className="lead">
                    <Link to="/movies" className="btn btn-lg btn-secondary fw-bold ">Ver catálogo</Link>
                </p>
            </main>
        </div>
    )
}

export default Home;