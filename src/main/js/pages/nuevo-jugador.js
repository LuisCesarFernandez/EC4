const React = require('react');
const {useState, useEffect} = require('react');
const { Link,useParams } = require('react-router-dom');
const client = require('../client');

const NuevoJugadorPage = () => {

    let { id } = useParams();

    const [futbolistas, setFutbolistas] = useState([])
    const [clubes, setClubes] = useState([])
    
    const [idFutbolista, setIdFutbolista] = useState('')
    const [idClub, setIdClub] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/jugadores',
            entity: {
                club: 'http://localhost:8080/api/clubes/'+id,
                futbolista: 'http://localhost:8080/api/futbolistas/'+idFutbolista,
                club: 'http://localhost:8080/api/clubes/'+idClub},
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
           window.location = '/';
        })
    }

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/futbolistas'
        }).done(response=>{
            setFutbolistas(response.entity._embedded.futbolistas)
        })
        client({
            method: 'GET',
            path: '/api/clubes'
        }).done(response=>{
            setClubes(response.entity._embedded.clubes)
        })

    },[])

    return (
        <>
            <h1>Nuevo Jugador</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor='futbolista'>Futbolista </label>
                <select name="futbolista" id="futbolista" onChange={(e)=>{setIdFutbolista(e.target.value)}}>
                    {futbolistas.map(futbolista => {	
                        const value = futbolista._links.self.href.split('/').slice(-1)
                        return (
                            <option key={value} value={value}>[{futbolista.nombre}]</option>
                        )
                    })}
                </select><br />
                
                <label>Club </label>
                <select name="club" id="club" onChange={(e)=>{setIdClub(e.target.value)}}>
                    {clubes.map(club => {	
                        const value = club._links.self.href.split('/').slice(-1)
                        return (
                            <option key={value} value={value}>({club.nombre})</option>
                        )
                    })}
                </select><br />

                <input type="submit" value="Nuevo Jugador" />

            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevoJugadorPage;