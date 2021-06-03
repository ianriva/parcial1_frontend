import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function MovieEdit(props) {
    const [movie, setMovie] = useState({});
    const [genres, setGenres] = useState([]);
    const [genreSelected, setGenreSelected] = useState(0);
    async function fetchMovie() {
        await fetch(`http://localhost:3001/movies/detail/${props.match.params.id}`)
            .then(response => response.json())
            .then(
                data => {
                    console.log(data);
                    setMovie(data);
                    setGenreSelected(movie.genre_id);
                }
            );
    }
    async function saveMovie() {
        await fetch(`http://localhost:3001/movies/update/${props.match.params.id}`,{
            "method": 'PUT',
            'mode': 'cors',
            "headers": {
                'Content-Type': 'application/json'
            },
            "body": JSON.stringify({
                "id": parseInt(movie.id)
            })
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
    useEffect(() => {
        fetchMovie();
        fetchGenres();
    }, []);
    return (
        <div>
            <div className="d-flex">
            <h1 className="m-3">Editar {props.match.params.id}</h1>
            <Link className="btn btn-outline-secondary m-3" to={`/movies/${props.match.params.id}`}>Atrás</Link>
            </div>
            <div>
                <div className="form-group m-3">
                    <label htmlFor="title">Título</label>
                    <input onChange={(event) => setMovie({...movie, title: event.target.value})} id="title" className="form-control w-auto" type="text" value={movie.title} />
                </div>
                <div className="form-group m-3">
                    <label htmlFor="length">Longitud</label>
                    <input onChange={(event) => setMovie({...movie,length: event.target.value})} id="length" className="form-control w-auto" type="number" value={movie.length} />
                </div>
                <div className="form-group m-3">
                    <label htmlFor="awards">Premios</label>
                    <input onChange={(event) => setMovie({...movie,awards: event.target.value})} id="awards" className="form-control w-auto" type="number" value={movie.awards} />
                </div>
                <div className="form-group m-3">
                    <label htmlFor="rating">Puntuación</label>
                    <input onChange={(event) => setMovie({...movie,rating: event.target.value})} id="rating" className="form-control w-auto" type="number" value={movie.rating} />
                </div>
                <div className="form-group m-3">
                    <label htmlFor="releaseDate">Fecha de lanzamiento</label>
                    <input onChange={(event) => {
                        setMovie({...movie,release_date: event.target.value}); 
                        }} 
                        id="releaseDate" className="form-control w-auto" type="date" value={movie.release_date} />
                </div>
                <div className="form-group m-3">
                    <label htmlFor="genre">Género</label>
                    <select className="form-control w-auto" id="genre" value={genreSelected}>
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

export default MovieEdit;