import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function GenreList() {
    const [genres, setGenres] = useState([]);
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
        fetchGenres();
    }, []);
    return (
        <div>
            <div className="d-flex justify-content-between">
            <h1>Géneros</h1>
            </div>
            <div className="table-responsive-md">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {genres.map((genre) => (
                            <tr key={genre.id}>
                                <td>
                                    {genre.name}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default GenreList
