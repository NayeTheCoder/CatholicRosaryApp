import { Link } from 'react-router-dom';
import './PrayersPage.css';

const SpanishPrayersPage = () => {

  return (
    <div className="prayers-page">
      {/* <h1 className='page-title'>Rezos</h1> */}
      {/* <div className='quote'>
				"Que no sabers orar? Ponte en la presencia de Dios, y en cuanto comiences a decir: 'Señor, que no sé hacer oración!...'. Ten por seguro que has empezado a hercerla." - San Josemaria Escriva
		</div> */}
		<div className='quote'>
			<img id="spanish-prayers-img" src="./images/spanish-prayer-img-big.JPEG"/>
		</div>
      <div className="prayers-row">
        <Link to="/prayers/basic-prayers">
        <div className='prayer-box'>
            <h1 className="prayer-name" >Basic prayers</h1>
        </div>
        </Link> 
        <Link to="/prayers/litanies">
        <div className='prayer-box'>
          <h1 className="prayer-name">Litanies</h1>
        </div>
        </Link>
        <Link to="/prayers/psalms-page">
        <div className='prayer-box'> 
          <h1 className="prayer-name">Psalms</h1>
        </div>
        </Link>
        <Link href="/">
        <div className='prayer-box'>
         <i><h1 className="prayer-name">Coming soon...</h1></i>
        </div>
        </Link>
        </div>
        <div className="prayers-row">
          <Link to="/">
        <div className='prayer-box'>
          <i><h1 className="prayer-name">Coming soon...</h1></i>
        </div>
        </Link>
        <Link to="/">
        <div className='prayer-box'>
          <i><h1 className="prayer-name">Coming soon...</h1></i>
        </div>
         </Link>
        <Link to="/">
        <div className='prayer-box'>
          <i><h1 className="prayer-name">Coming soon...</h1></i>
        </div>
        </Link>
        <Link to="/">
        <div className='prayer-box'>
         <i><h1 className="prayer-name">Coming soon...</h1></i>
        </div>
        </Link>
        </div>
    </div>
  );
};

export default SpanishPrayersPage;

