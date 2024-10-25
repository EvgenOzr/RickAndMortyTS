import React, { useEffect } from 'react';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundary/ErrorBoundary';
import Header from '../components/Header/Header';
import AppRouter from './providers/router/AppRouter';

function App() {

	

	return (
		<ErrorBoundry>
			<div className="App">
				{/* <PostConatiner/> */}
				{/* <CharacterPage/> */}
				

				<Header/>
				<AppRouter/>
			</div>
		</ErrorBoundry>
	);
}

export default App;
