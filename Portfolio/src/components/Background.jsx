import React from 'react'
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import config from '../assets/configs/particles.json'

function Background () {
    const particlesInit = async (main) => {
		console.log(main);
		await loadFull(main);
	};
	const particlesLoaded = (container) => {
		console.log(container);
	};
	return (
		<Particles
			options={config}
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
		/>
	);
};


export default Background