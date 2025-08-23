import { useEffect } from 'react'
import '../styles/map.css'
import { shrineLocations } from '../ShrineLocations'

export default function Map () {

	useEffect(()=>{
		setTimeout(()=>{
		var map = L.map('map', {maxBounds: [[60.5852, -165.2539], [21.0079, -10.9408]]}).setView([41.5896, -93.6164], 4);
		L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB',
		maxZoom: 6,
		minZoom: 3
		}).addTo(map);

		shrineLocations.map((location)=>{
			var popup = L.popup(location.coordinates,{content: location.content, });
				L.marker(location.coordinates, {title: location.title, riseOnHover: true}).addTo(map).bindPopup(popup)
		})
	}, 1000)
	}, [])
	
	return (
		<>
	<h1 style={{color: "white"}}>Shrines in the US - Santuarios en EEUU</h1>
	 <div id="map">

		</div>
		</>
		
	);
}