import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function MovieAdd(props) {
    const [movie, setMovie] = useState({});
    const [genres, setGenres] = useState([]);
    async function saveMovie() {
        await fetch(`http://localhost:3001/movies/create/`,{
            "method": 'POST',
            'mode': 'cors',
            "headers": {
                'Content-Type': 'application/json'
            },
            "body": JSON.stringify(movie)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            props.history.push("/movies");
        })
    }
    async function fetchGenres() {
        await fetch('http://localhost:3001/genres')
            .then(response => response.json())
            .then(
                data => {
                    console.log(data);
                    setGenres(data);
                }
            );
    }
    useEffect(()=>{
        fetchGenres();
    },[]);
    return (
        <div>
            <div className="d-flex">
            <h1 className="m-3">Crear</h1>
            <Link className="btn btn-outline-secondary m-3" to={`/movies/`}>Atrás</Link>
            </div>
            <div>
                <div className="form-group m-3">
                    <label htmlFor="title">Título</label>
                    <input onChange={(event) => setMovie({...movie, title: event.target.value})} id="title" className="form-control w-auto" type="text" />
                </div>
                <div className="form-group m-3">
                    <label htmlFor="length">Longitud</label>
                    <input onChange={(event) => setMovie({...movie,length: event.target.value})} id="length" className="form-control w-auto" type="number" />
                </div>
                <div className="form-group m-3">
                    <label htmlFor="awards">Premios</label>
                    <input onChange={(event) => setMovie({...movie,awards: event.target.value})} id="awards" className="form-control w-auto" type="number" />
                </div>
                <div className="form-group m-3">
                    <label htmlFor="rating">Puntuación</label>
                    <input onChange={(event) => setMovie({...movie,rating: event.target.value})} id="rating" className="form-control w-auto" type="number" />
                </div>
                <div className="form-group m-3">
                    <label htmlFor="releaseDate">Fecha de lanzamiento</label>
                    <input onChange={(event) => {
                        setMovie({...movie,release_date: event.target.value}); 
                        }} 
                        id="releaseDate" className="form-control w-auto" type="date" />
                </div>
                <div className="form-group m-3">
                    <label htmlFor="genre">Género</label>
                    <select className="form-control w-auto" id="genre">
                        {genres.map((genre)=>(
                            <option key={`genre${genre.id}`} value={genre.id}>{genre.name}</option>
                        ))}
                    </select>
                </div>
                <button className="btn btn-success" type="button" onClick={()=>saveMovie()}>Guardar</button>
            </div>
        </div>
    )
}

export default MovieAdd;