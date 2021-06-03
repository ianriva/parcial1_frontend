import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function MovieDetail(props) {
    const [movie, setMovie] = useState({});
    const [genres, setGenres] = useState([]);
    const [genreSelected, setGenreSelected] = useState({});

    async function fetchMovie() {
        await fetch(`http://localhost:3001/movies/detail/${props.match.params.id}`)
            .then(response => response.json())
            .then(
                data => {
                    console.log(data);
                    setMovie(data);
                }
            );
    }
    console.log(props);
    useEffect(() => {
        fetchMovie();
        fetchGenres();
        
        console.log(genreSelected)
    }, []);
    async function deleteMovie() {
        console.log(`about to delete ${props.match.params.id}`);
        await fetch(`http://localhost:3001/movies/delete/${props.match.params.id}`,{
            "method": 'POST',
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
        .catch()
    }
    async function fetchGenres() {
        await fetch('http://localhost:3001/genres')
            .then(response => response.json())
            .then(
                data => {
                    console.log(data);
                    setGenres(data);
                    setGenreSelected(genres.filter(genre=>genre.id == movie.genre_id));
                }
            );
    }
    return (
        <div>
            <Link className="btn btn-outline-secondary my-3" to="/movies">Atrás</Link>
            <div>
                <h1 className="text-danger">{movie.title}</h1>
                <p>Duración: {movie.length}</p>
                <p>Cantidad de premios: {movie.awards}</p>
                <p>Puntuación: {movie.rating}</p>
                <p>Fecha de lanzamiento: {movie.release_date}</p>
                <p>Género: {genreSelected.name}</p>
            </div>
            <div>
                <Link className="btn btn-secondary m-3" to={`/movies/${movie.id}/edit`}>Editar</Link>
                <button className="btn btn-danger" onClick= { () => {
                    window.confirm("Eliminar?") && deleteMovie();
                }}>Eliminar</button>
        </div>
        </div >
    )
}

export default MovieDetail;