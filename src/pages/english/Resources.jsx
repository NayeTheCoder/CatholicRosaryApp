import react from "react";
import { Link } from 'react-router-dom'
import "../../styles/Resources.css";

const Resources = () => {
  return (
    <div className="resource-page">
      <h1> Resources </h1>

      <p>
        For the 15 promises: If you are hesitant I suggest you open your heart
        and try for yourself!
      </p>

      {/* Make the URL clickable */}
      <a
        className="resource-links"
        href="https://marian.org/13th/the-fifteen-promises-of-our-lady"
        target="_blank"
        rel="noopener noreferrer"
      >
        15 Promises of Our Lady
      </a>
      <p> The Divine Mercy Message. What does Jesus want from us?</p>
      <a
        className="resource-links"
        href="https://www.thedivinemercy.org/message"
        target="_blank"
        rel="noopener noreferrer"
      >
        Divine Mercy Message/meaning behind the prayer
      </a>
      <p> Bible Verses and Fruit of the Mysteries</p>
      <a
        className="resource-links"
        href="https://www.usccb.org/how-to-pray-the-rosary"
        target="_blank"
        rel="noopener noreferrer"
      >
        USCCB Bible Verses and fruit of The Mysteries
      </a>
      <p>Fruit of the Mysteries Explained </p>
      <a
        className="resource-links"
        href="https://catholicexchange.com/fruits-mysteries-of-the-rosary/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Catholic Exchange Link
      </a>
      <p> Spanish Rosary</p>
      <a
        className="resource-links"
        href="https://rosarycenter.org/es/the-joyful-mysteries-without-distractions"
        target="_blank"
        rel="noopener noreferrer"
      >
        Rosary Center Link
      </a>
      <p> This is a link to a story based Rosary if you are interested! </p>
      <a
        className="resource-links"
        href="https://www.catholiccompany.com/content/sorrowful-mysteries-of-the-rosary"
        target="_blank"
        rel="noopener noreferrer"
      >
        Catholic Company: rosary that walks you through the bible verse it is
        based off.
      </a>
      <p> The Chaplet of Divine Mercy Guide </p>
      <a
        className="resource-links"
        href="http://saintfrancischurch.org/app/uploads/2020/04/The-Divine-Mercy-Chaplet.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Saint Francis Church Divine Mercy Link
      </a>
      <p>Hail Mary in Multiple Languages!! (With Audio)</p>
      <a
        className="resource-links"
        href="https://www.mensajerosdivinos.org/en/orando-el-ave-maria-en-idiomas"
        target="_blank"
        rel="noopener noreferrer"
      >
        Hail Mary Multiple Languages Link
      </a>
      <p>Litany of Trust - Sisters of Life (Multiple Languages)</p>
      <a
        className="resource-links"
        href="https://sistersoflife.org/litany-of-trust/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Litany of Trust Link
      </a>
      <p> Interactive Map of Shrines around the US</p>
      <Link
        className="resource-links"
        to="/resources/shrine-map"
        target="_blank"
        rel="noopener noreferrer"
      >
        Shrine Map Link
      </Link>
      
    </div>
  );
};

export default Resources;


