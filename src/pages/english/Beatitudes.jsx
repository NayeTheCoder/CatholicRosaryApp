import { Link } from 'react-router-dom';
import '../../styles/PrayersPage.css';

const Beatitudes = () => {

  return (
    <div className="prayers-page">
      <h1 className='page-title'>The Beatitudes</h1>
      <div className='quote'>
				"Blessed are the poor in spirit for theirs is the kingdom of heaven"
		  </div>
      <img src="./images/beatitudes-img.PNG"/>
    </div>
  );
};

export default Beatitudes;

