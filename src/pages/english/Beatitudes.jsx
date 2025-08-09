import { Link } from 'react-router-dom';
import '../../styles/PrayersPage.css';

const Beatitudes = () => {
  return (
    <div className="prayers-page">
      <h1 className="page-title">The Beatitudes</h1>
      <div className="quote">
        <p className="BeatitudesVerse">
          Matthew 5:1-11 <br />
          “Seeing the crowds, he went up on the mountain, and when he sat down his disciples came to him. And he opened his mouth and taught them, saying: <br />
          ‘Blessed are the poor in spirit, for theirs is the kingdom of heaven. <br />
          ‘Blessed are those who mourn, for they shall be comforted. <br />
          ‘Blessed are the meek, for they shall inherit the earth. <br />
          ‘Blessed are those who hunger and thirst for righteousness, for they shall be satisfied. <br />
          ‘Blessed are the merciful, for they shall obtain mercy. <br />
          ‘Blessed are the pure in heart, for they shall see God. <br />
          ‘Blessed are the peacemakers, for they shall be called sons of God. <br />
          ‘Blessed are those who are persecuted for righteousness’ sake for theirs is the kingdom of heaven. <br />
          ‘Blessed are you when men revile you and persecute you and utter all kinds of evil against you falsely on my account. <br />
          ‘Rejoice and be glad, for your reward is great in heaven, for so men persecuted the prophets who were before you.’”
        </p>
      </div>
      <img src="./images/beatitudes-img.PNG" alt="Beatitudes" />
    </div>
  );
};

export default Beatitudes;
