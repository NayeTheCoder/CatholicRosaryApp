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
        <div className='prayer-box'>
          <Link to="/prayers/basic-prayers">
            <h1>Basic prayers</h1>
          </Link> 
        </div>
        <div className='prayer-box'>
          <Link to="/prayers/litanies">
          <h1>Litanies</h1>
          </Link>
        </div>
        <div className='prayer-box'>
          <Link to="/">
          <i><h1>Coming soon...</h1></i>
          </Link>
        </div>
        <div className='prayer-box'>
          <Link href="/">
         <i><h1>Coming soon...</h1></i>
          </Link>
        </div>
        </div>
        <div className="prayers-row">
        <div className='prayer-box'>
          <Link to="/">
          <i><h1>Coming soon...</h1></i>
          </Link>
        </div>
        <div className='prayer-box'>
          <Link to="/">
          <i><h1>Coming soon...</h1></i>
          </Link>
        </div>
        <div className='prayer-box'>
          <Link to="/">
          <i><h1>Coming soon...</h1></i>
          </Link>
        </div>
        <div className='prayer-box'>
          <Link to="/">
         <i><h1>Coming soon...</h1></i>
          </Link>
        </div>
        </div>
    </div>
  );
};

export default PrayersPage;

