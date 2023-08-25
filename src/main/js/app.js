const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const HomePage = require('./pages/home');
const NuevoFutbolistaPage = require('./pages/nuevo-futbolista');
const VerFutbolistaPage = require('./pages/ver-futbolista');
const VerClubPage = require('./pages/ver-club');
const NuevoJugadorPage = require('./pages/nuevo-jugador');


const router = createBrowserRouter([
	{ path: '/', element: <HomePage /> },
	{ path: '/ver-futbolista/:id', element: <VerFutbolistaPage /> },
	{ path: '/nuevo-futbolista', element: <NuevoFutbolistaPage /> },
	{ path: '/ver-club/:id', element: <VerClubPage /> },
	{ path: '/ver-club/:id/nuevo-jugador', element: <NuevoJugadorPage /> },


])


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react'))
