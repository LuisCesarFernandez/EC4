const React = require('react');
const {useState} = require('react');
const { Link } = require('react-router-dom');
const client = require('../client');




const NuevoFutbolistaPage = () => {

    const [nombre, setNombre] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/futbolistas',
            entity: {nombre: nombre},
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
            window.location = '/';
        })
    }

    return (
        <>
        <h1>Nuevo Futbolista</h1>
        <form onSubmit={handleSubmit}>
            <label>Nombre</label> <br />
            <input type="text" id='nombre' name='nombre' onChange={e=>setNombre(e.target.value)} /> <br />
            <input type="submit" value="Nuevo Futbolista" />
        </form>
        <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevoFutbolistaPage;