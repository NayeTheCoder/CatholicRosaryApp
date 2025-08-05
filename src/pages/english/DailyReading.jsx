import {useEffect, useState} from 'react'
import '../../styles/DailyReading.css';
export default function DailyReading() {
	const [dailyReading, setDailyReading] = useState({reading_title:"Loading..."});
	const currentDate = new Date();
	async function getDailyReading(){
   			await fetch("https://backend-opal-seven-58.vercel.app/getDailyReading")
  			.then(async response => {
    			// Check if the request was successful (e.g., status code 200)
    			if (!response.ok) {
      				throw new Error(`HTTP error! status: ${response.status}`);
    			}
    			// Determine the expected response type and parse accordingly
    			return await response.json(); 
  			})
  			.then(data => {
    		console.log(data)
			setDailyReading(data)
  		})
  		.catch(error => {
    		console.error('There was a problem with the fetch operation:', error);
  	});
	}
	useEffect(()=>
		{
			getDailyReading();
		},[]
	)

	return (

		<div>
			<h1 className='title'>{currentDate.getMonth()+1}-{currentDate.getDate()}-{currentDate.getFullYear()}</h1>
			<h1 className='title'>{dailyReading.reading_title}</h1>
			<h3 className='heading'>{dailyReading.reading_heading}</h3>
			<p className='content'>{dailyReading.reading_content}</p>
			<h4 className='address'>-{dailyReading.reading_address}</h4>
			<hr/>
			<h3 className='heading'>{dailyReading.responsorial_psalm_heading}</h3>
			<p className='content'>{dailyReading.responsorial_psalm_content}</p>
			<h4 className='address'>-{dailyReading.responsorial_psalm_address}</h4>
			<hr/>
			<h3 className='heading'>{dailyReading.alleluia_heading}</h3>
			<p className='content'>{dailyReading.alleluia_content}</p>
			<h4 className='address'>-{dailyReading.alleluia_address}</h4>
			<hr/>
			<h3 className='heading'>{dailyReading.gospel_heading}</h3>
			<p className='content'>{dailyReading.gospel_content}</p>
			<h4 className='address'>-{dailyReading.gospel_address}</h4>
			<hr/>
			{Object.keys(dailyReading).length != '1' && 
			<>
			<h3 className='heading'>Explore Daily/Weekly Homilies:</h3>
				<ul className='homilies-list'>
					<li>Fr. Nivin - Des Moines, Iowa: <a href='https://nivinhomilies.blogspot.com/'>https://nivinhomilies.blogspot.com/</a></li>
					<li>Fr. Mike - Duluth, Minnesota: <a href='https://www.youtube.com/playlist?list=PLZEB5VH_ET9Tfi-zykCaiBDmFIyl-n0lk'>https://www.youtube.com/playlist?list=PLZEB5VH_ET9Tfi-zykCaiBDmFIyl-n0lk</a></li>
				</ul></>}

		</div>);
		
}