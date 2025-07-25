import { Link } from 'react-router-dom';
import './PrayersPage.css';

const PrayersPage = () => {

  return (
    <div className="prayers-page">
      <h1 className='page-title'>Prayers</h1>
      <div className='quote'>
				"You don't know how to pray? Put yourself in the presence of God, and as soon as you have said, '<i>Lord, I don't know how to pray!</i>' you can be sure you have already begun." - Josemaria Escriva
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
        <Link to="/">
        <div className='prayer-box'> 
          <i><h1 className="prayer-name">Coming soon...</h1></i>
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

export default PrayersPage;

