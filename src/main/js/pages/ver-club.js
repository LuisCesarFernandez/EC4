const React = require('react');
const { Link, useParams } = require('react-router-dom');
const { useState, useEffect } = require('react');
const client = require('../client');

const VerClubPage = () => {

    let { id } = useParams();
    const [club, setClub] = useState({});
    const [jugador, setJugador] = useState([]);

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/clubes/' + id
        }).done(response => setClub(response.entity))
        client({
            method: 'GET',
            path: '/api/clubes/' + id + '/formacion'
        }).done(response => setJugador(response.entity))
    }, [])


    return (
        <>
            <h1>Ver Club</h1>
            <hr />

            <table border="1">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <td>{club.nombre}</td>
                    </tr>
                </tbody>
            </table>
            <hr />

            <h2>Formación</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Jugador</th>
                    </tr>
                </thead>
                <tbody>

                    {jugador.map(integrante=>{
                        return(
                            <tr key={integrante.ID}>
                                <td>{integrante.FUTBOLISTA}</td>
                            </tr>
                        )
                    })}

                </tbody>

            </table>

            <hr />
            <Link to={`/ver-club/${id}/nuevo-jugador`}>Nuevo Integrante</Link> |
            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = VerClubPage;