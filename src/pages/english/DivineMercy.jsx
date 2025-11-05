import React, { useState } from "react";
import "../../styles/DivineMercy.css";
import { useNavigate } from "react-router-dom";
import Switch from "react-switch";

// Reusable prayer components
const Prayer = ({ title, children }) => (
  <div className="Divine-Mercy-prayer-English">
    <h2>{title}</h2>
    <p>{children}</p>
  </div>
);

const DivineMercy = () => {
  const [isPageOne, setIsPageOne] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsPageOne(!isPageOne);
    if (!isPageOne) {
      navigate("/divine-mercySpanish"); // Navigate to /page-one when switching from page two
    }
  };
  // State to control visibility of specific mysteries (each with a unique index)
  const [visibleMysteries, setVisibleMysteries] = useState([]);

  // Function to toggle the visibility of the repeated lines
  const toggleVisibility = (index) => {
    setVisibleMysteries((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  // Data for the mystery sections (simplified)
  const mysteryData = [
    "On the first 10 small beads of the Rosary",
    "On the second 10 small beads of the Rosary",
    "On the third 10 small beads of the Rosary",
    "On the fourth 10 small beads of the Rosary",
    "On the fifth 10 small beads of the Rosary",
  ];

  return (
    <>
      <div className="Divine-Mercy-container-English">
        <h1>The Chaplet of Divine Mercy</h1>
        <img
          src="https://2.bp.blogspot.com/-dr3TdWdX3rs/V_vvvgrAF_I/AAAAAAAADKU/97DfidLQ3f8B7C-jqtDL45JK4NICmMiMACLcB/s1600/0%2Bdivina-misericordia.jpg"
          alt="Divine Mercy Jesus appearing in front of St Faustina showing the rays of mercy"
          className="Divine-Mercy-image"
        />
        <p>
          A daily invocation for the mercy of Jesus, who rejoices when we turn
          to Him in faith.
        </p>
        {/* Images side by side */}
        <div className="Divine-Mercy-images-container-English">
          <img
            src="https://bookofheaven.org/wp-content/uploads/2016/03/DIvine-Mercy-images-2.jpg"
            alt="Divine Mercy Image, Jesus I Trust In You"
            className="Divine-Mercy-image-English"
          />
          <img
            src="https://blessedisshe.net/wp-content/uploads/2020/04/divine-mercy-chaplet-prayer-how-to-scaled.jpg"
            alt="Divine Mercy Rosary Guide"
            className="Divine-Mercy-image-English"
          />
        </div>

        {/* The opening prayers */}
        <Prayer title="The Sign of the Cross">
          In the name of the Father and of the Son and of the Holy Spirit. Amen.
        </Prayer>
        <Prayer title="Opening Prayer">
          You expired, Jesus, but the source of life gushed forth for souls, and
          the ocean of mercy opened up for the whole world. O Fount of Life,
          unfathomable Divine Mercy, envelop the whole world and empty Yourself
          out upon us.
        </Prayer>
        <Prayer title="">
          O Blood and Water, which gushed forth from the Heart of Jesus as a
          fount of mercy for us, I trust in You! (Repeat 3X)
        </Prayer>
        <Prayer title="Our Father">
          Our Father, Who art in heaven, Hallowed be Thy Name. Thy Kingdom come.
          Thy Will be done, on earth as it is in Heaven. Give us this day our
          daily bread. And forgive us our trespasses, as we forgive those who
          trespass against us. And lead us not into temptation, but deliver us
          from evil. Amen.
        </Prayer>
        <Prayer title="Hail Mary">
          Hail Mary full of Grace, the Lord is with thee. Blessed are thou
          amongst women and blessed is the fruit of thy womb Jesus. Holy Mary
          Mother of God, pray for us sinners now and at the hour of our death.
          Amen.
        </Prayer>
        <Prayer title="The Apostles' Creed">
          I believe in God, the Father Almighty, Creator of heaven and earth,
          and in Jesus Christ, His only Son, our Lord, who was conceived by the
          Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate,
          was crucified, died and was buried; He descended into hell; on the
          third day He rose again from the dead; He ascended into heaven, and is
          seated at the right hand of God the Father Almighty; from there He
          will come to judge the living and the dead. I believe in the Holy
          Spirit, the Holy Catholic Church, the communion of Saints, the
          forgiveness of sins, the resurrection of the body, and life
          everlasting. Amen.
        </Prayer>

        {/* <Prayer title="The Eternal Father">
        Eternal Father, I offer You the Body and Blood, Soul and Divinity of Your Dearly Beloved Son, Our Lord, Jesus Christ, in atonement for our sins and those of the whole world.
      </Prayer> */}

        {/* Render mystery sections dynamically */}
        {mysteryData.map((title, index) => (
          <div key={index} className="Divine-Mercy-mystery-container-English">
            {/* Mystery title */}

            {/* Repeated prayer for each mystery */}
            <Prayer title="The Eternal Father">
              Eternal Father, I offer You the Body and Blood, Soul and Divinity
              of Your Dearly Beloved Son, Our Lord, Jesus Christ, in atonement
              for our sins and those of the whole world.
            </Prayer>
            <h2
              id={`mystery-${index}`}
              onClick={() => toggleVisibility(index)}
              style={{ cursor: "pointer" }}
            >
              {title} (Click to Expand)
            </h2>

            {/* Expanding content */}
            {visibleMysteries.includes(index) && (
              <div className="Divine-Mercy-mystery-content-English">
                <p>
                  For the sake of His sorrowful Passion, have mercy on us and on
                  the whole world.
                </p>
                <p>
                  For the sake of His sorrowful Passion, have mercy on us and on
                  the whole world.
                </p>
                <p>
                  For the sake of His sorrowful Passion, have mercy on us and on
                  the whole world.
                </p>
                <p>
                  For the sake of His sorrowful Passion, have mercy on us and on
                  the whole world.
                </p>
                <p>
                  For the sake of His sorrowful Passion, have mercy on us and on
                  the whole world.
                </p>
                <p>
                  For the sake of His sorrowful Passion, have mercy on us and on
                  the whole world.
                </p>
                <p>
                  For the sake of His sorrowful Passion, have mercy on us and on
                  the whole world.
                </p>
                <p>
                  For the sake of His sorrowful Passion, have mercy on us and on
                  the whole world.
                </p>
                <p>
                  For the sake of His sorrowful Passion, have mercy on us and on
                  the whole world.
                </p>
                <p>
                  For the sake of His sorrowful Passion, have mercy on us and on
                  the whole world.
                </p>
              </div>
            )}
          </div>
        ))}

        <Prayer title="Conclusion: Holy God">
          Holy God, Holy Mighty One, Holy Immortal One, have mercy on us and on
          the whole world. (Repeat 3X)
        </Prayer>

        <Prayer title="Optional Closing Prayer">
          Eternal God, in Whom mercy is endless and the treasury of compassion —
          inexhaustible, look kindly upon us and increase Your mercy in us, that
          in difficult moments we might not despair nor become despondent, but
          with great confidence submit ourselves to Your holy will, which is
          Love and Mercy itself.
        </Prayer>
      </div>
    </>
  );
};

export default DivineMercy;

