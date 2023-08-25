const React = require('react');
const { Link, useParams } = require('react-router-dom');
const {useState, useEffect} = require('react');
const client = require('../client');

const VerFutbolistaPage = () => {

    let { id } = useParams();
    const [futbolista, setFutbolista] = useState({});

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/futbolistas/' + id
        }).done(response=>setFutbolista(response.entity))
    }, [])


    return (
        <>
            <h1>Ver Futbolista</h1>

            <table>
                <tr>
                    <th>Nombre</th>
                    <td>{futbolista.nombre}</td>
                </tr>
            </table>

            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = VerFutbolistaPage;