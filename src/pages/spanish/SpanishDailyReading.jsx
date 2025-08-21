import {useEffect, useState} from 'react'
import '../../styles/DailyReading.css';
export default function DailyReading() {
	const [dailyReading, setDailyReading] = useState({reading_title:"Loading..."});
	const currentDate = new Date();
	async function getDailyReading(){
   			await fetch("https://backend-opal-seven-58.vercel.app/getDailyReadingSpanish")
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
			<h1 className='title' style={{border:"1px solid white"}}>{dailyReading.reading_title}</h1>
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
			<h3 className='heading'>Homilías Diarias/Semanales</h3>
				<ul className='homilies-list'>
					<li>P. Ignacio Fernández González - Mexico: <a target="_blank" rel="noopener norefferer" href='http://igfergon.com.mx/homilia-diaria/'>http://igfergon.com.mx/homilia-diaria/</a></li>
					<li>P. Miguel Martinez  - Paraguay: <a target="_blank" rel="noopener norefferer" href='https://formacioncatolica.org/categoria/programas/homilia-diaria/'>https://formacioncatolica.org/categoria/programas/homilia-diaria/</a></li>
				</ul></>}

		</div>);
		
}