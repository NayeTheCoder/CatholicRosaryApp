// src/components/ShortRosary.jsx
import React, { useState } from "react";
import "../../styles/ShortRosary.css";

// Declaring ShortRosary
//For the short version you only have to state each meditation. ex. The 1st (Glorious) Mystery + (Name)
const ShortRosary = () => {
  // State to control visibility of specific mysteries (each with a unique index)
  const [visibleMysteries, setVisibleMysteries] = useState([]);

  // Function to toggle the visibility of a mystery based on its index
  const toggleVisibility = (index) => {
    setVisibleMysteries((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="short-rosary-container">
      <h1>The Holy Rosary</h1>

      <p>
        This is a shorter version of the Holy Rosary designed to help you
        meditate on each mystery. Remember these are all meant to lead us closer
        to Jesus.{" "}
      </p>
      <p> Open you heart and watch how Jesus will transform your life.</p>

      <img
        src="./images/short_rosary.jpg"
        alt="The Holy Rosary"
        className="rosary-image"
        style={{ width: "75%", height: "auto", marginBottom: "20px" }}
      />

      <div className="rosary-prayer">
        <h2>
          {" "}
          The Sign of the Cross <input type="checkbox" />
        </h2>
        <p>
          {" "}
          In the name of the Father and of the Son and of the Holy Spirit. Amen.
        </p>
      </div>

      <div className="rosary-prayer">
        <h2>
          {" "}
          The Apostle's Creed <input type="checkbox" />{" "}
        </h2>
        <p>
          {" "}
          I believe in God, the Father Almighty, Creator of heaven and earth,
          and in Jesus Christ, His only Son, our Lord, who was conceived by the
          Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate,
          was crucified, died and was buried; He descended into hell; on the
          third day He rose again from the dead; He ascended into heaven, and is
          seated at the right hand of God the Father Almighty; from there He
          will come to judge the living and the dead. I believe in the Holy
          Spirit, the Holy Catholic Church, the communion of Saints, the
          forgiveness of sins, the resurrection of the body, and life
          everlasting. Amen.{" "}
        </p>
      </div>
      <div className="rosary-prayer">
        <h2>
          {" "}
          Our Father <input type="checkbox" />{" "}
        </h2>
        <p>
          Our Father, Who art in heaven, Hallowed be Thy Name. Thy Kingdom come.
          Thy Will be done, on earth as it is in Heaven. Give us this day our
          daily bread. And forgive us our trespasses, as we forgive those who
          trespass against us. And lead us not into temptation, but deliver us
          from evil. Amen.
        </p>
      </div>
      <div className="rosary-prayer">
        <h2> Hail Mary (x3)</h2> <input type="checkbox" />{" "}
        <input type="checkbox" /> <input type="checkbox" />
        <p>
          Hail Mary full of Grace, the Lord is with thee. Blessed are thou
          amongst women and blessed is the fruit of thy womb Jesus. Holy Mary
          Mother of God, pray for us sinners now and at the hour of our death
          Amen.
        </p>
      </div>

      {/* This is the first Mystery section where when you click on the day it expands to show the text */}
      <div className="rosary-prayer">
        <h2>The First Mystery</h2>

        <h2
          id="joyful"
          onClick={() => toggleVisibility(0)}
          style={{ cursor: "pointer" }}
        >
          The Joyful Mystery (Monday and Saturday)
        </h2>

        {/* The Glorious Mystery clickable*/}
        {visibleMysteries.includes(0) && (
          <div>
            <h3>1st Joyful Mystery: The Annunciation to Mary</h3>
            <p> Fruit of the mystery: Humility </p>
          </div>
        )}

        {/* The 1st Sorrowful Mystery clickable*/}
        <h2
          id="sorrowful"
          onClick={() => toggleVisibility(1)}
          style={{ cursor: "pointer" }}
        >
          The Sorrowful Mysteries (Tuesday and Fridays)
        </h2>

        {visibleMysteries.includes(1) && (
          <div>
            <h2>1st Sorrowful Mystery: The Agony in the Garden</h2>
            <p>Fruit of the mystery: Obedience to God’s Will</p>
          </div>
        )}

        {/* The 1st glorious Mystery clickable*/}
        <h2
          id="glorious"
          onClick={() => toggleVisibility(2)}
          style={{ cursor: "pointer" }}
        >
          The Glorious Mysteries (Wednesdays and Sundays)
        </h2>

        {visibleMysteries.includes(2) && (
          <div>
            <h2>1st Glorious Mystery: The Resurrection of Our Lord</h2>
            <p>Fruit of the mystery: Faith</p>
          </div>
        )}
        <h2
          id="luminous"
          onClick={() => toggleVisibility(3)}
          style={{ cursor: "pointer" }}
        >
          {/* The 1st Luminous Mystery clickable*/}
          The Luminous Mysteries(Thursdays)
        </h2>

        {visibleMysteries.includes(3) && (
          <div>
            <h2> 1st Luminous Mystery: The Baptism of Jesus in the Jordan</h2>
            <p>Fruit of the mystery: Openness to the Holy Spirit</p>
          </div>
        )}
      </div>

      <div className="rosary-prayer">
        <h2>
          {" "}
          Our Father <input type="checkbox" />{" "}
        </h2>
        <p>
          Our Father, Who art in heaven, Hallowed be Thy Name. Thy Kingdom come.
          Thy Will be done, on earth as it is in Heaven. Give us this day our
          daily bread. And forgive us our trespasses, as we forgive those who
          trespass against us. And lead us not into temptation, but deliver us
          from evil. Amen.
        </p>
      </div>
      <div className="rosary-prayer">
        <h2> Hail Mary (x10)</h2> <input type="checkbox" />{" "}
        <input type="checkbox" /> <input type="checkbox" />{" "}
        <input type="checkbox" /> <input type="checkbox" />{" "}
        <input type="checkbox" /> <input type="checkbox" />{" "}
        <input type="checkbox" /> <input type="checkbox" />{" "}
        <input type="checkbox" />
        <p>
          {" "}
          Hail Mary full of Grace, the Lord is with thee. Blessed are thou
          amongst women and blessed is the fruit of thy womb Jesus. Holy Mary
          Mother of God, pray for us sinners now and at the hour of our death
          Amen.
        </p>
      </div>
      <div className="rosary-prayer">
        <h2>
          {" "}
          Glory Be <input type="checkbox" />
        </h2>
        <p>
          Glory be to the Father, And to the Son, And to the Holy Spirit. As it
          was in the beginning, is now, And ever shall be, World without end.
          Amen.
        </p>
      </div>
      <div className="rosary-prayer">
        <h2>
          {" "}
          O My Jesus - Fatima <input type="checkbox" />{" "}
        </h2>
        <p>
          O my Jesus, forgive us our sins, save us from the fires of hell; lead
          all souls to heaven especially those who are in most need of Your
          mercy. Amen.
        </p>
      </div>

      {/* This is the second Mystery section where when you click on the day it expands to show the text */}
      <div className="rosary-prayer">
        <h2>The Second Mystery</h2>

        <h2
          id="joyful"
          onClick={() => toggleVisibility(4)}
          style={{ cursor: "pointer" }}
        >
          The Joyful Mystery (Monday and Saturday)
        </h2>

        {/* The joyful Mystery clickable*/}
        {visibleMysteries.includes(4) && (
          <div>
            <h3>2nd Joyful Mystery: The Visitation of Mary</h3>
            <p>Fruit of the mystery: Love of Neighbor</p>
          </div>
        )}

        {/* The 2nd Sorrowful Mystery clickable*/}
        <h2
          id="sorrowful"
          onClick={() => toggleVisibility(5)}
          style={{ cursor: "pointer" }}
        >
          The Sorrowful Mysteries (Tuesday and Fridays)
        </h2>

        {visibleMysteries.includes(5) && (
          <div>
            <h2>2nd Sorrowful Mystery: The Scourging at the Pillar</h2>
            <p> Fruit of the mystery: Mortification, Purity </p>
          </div>
        )}

        {/* The 2nd glorious Mystery clickable*/}
        <h2
          id="glorious"
          onClick={() => toggleVisibility(6)}
          style={{ cursor: "pointer" }}
        >
          The Glorious Mysteries (Wednesdays and Sundays)
        </h2>

        {visibleMysteries.includes(6) && (
          <div>
            <h2>2nd Glorious Mystery: The Ascension of Our Lord</h2>
            <p>Fruit of the mystery: Hope, Desire for Heaven</p>
          </div>
        )}
        <h2
          id="luminous"
          onClick={() => toggleVisibility(7)}
          style={{ cursor: "pointer" }}
        >
          {/* The 2nd Luminous Mystery clickable*/}
          The Luminous Mysteries(Thursdays)
        </h2>

        {visibleMysteries.includes(7) && (
          <div>
            <h2> 2nd Luminous Mystery: The Wedding Feast at Cana</h2>
            <p>Fruit of the mystery: To Jesus through Mary</p>
          </div>
        )}
      </div>

      <div className="rosary-prayer">
        <h2>
          Our Father <input type="checkbox" />
        </h2>
        <p>
          Our Father, Who art in heaven, Hallowed be Thy Name. Thy Kingdom come.
          Thy Will be done, on earth as it is in Heaven. Give us this day our
          daily bread. And forgive us our trespasses, as we forgive those who
          trespass against us. And lead us not into temptation, but deliver us
          from evil. Amen.
        </p>
      </div>
      <div className="rosary-prayer">
        <h2> Hail Mary (x10)</h2> <input type="checkbox" />{" "}
        <input type="checkbox" /> <input type="checkbox" />{" "}
        <input type="checkbox" /> <input type="checkbox" />{" "}
        <input type="checkbox" /> <input type="checkbox" />{" "}
        <input type="checkbox" /> <input type="checkbox" />{" "}
        <input type="checkbox" />
        <p>
          {" "}
          Hail Mary full of Grace, the Lord is with thee. Blessed are thou
          amongst women and blessed is the fruit of thy womb Jesus. Holy Mary
          Mother of God, pray for us sinners now and at the hour of our death
          Amen.
        </p>
      </div>
      <div className="rosary-prayer">
        <h2>
          {" "}
          Glory Be <input type="checkbox" />
        </h2>
        <p>
          Glory be to the Father, And to the Son, And to the Holy Spirit. As it
          was in the beginning, is now, And ever shall be, World without end.
          Amen.
        </p>
      </div>
      <div className="rosary-prayer">
        <h2>
          {" "}
          O My Jesus - Fatima <input type="checkbox" />
        </h2>
        <p>
          O my Jesus, forgive us our sins, save us from the fires of hell; lead
          all souls to heaven especially those who are in most need of Your
          mercy. Amen.
        </p>
      </div>
      {/* This is the third Mystery section where when you click on the day it expands to show the text */}
      <div className="rosary-prayer">
        <h2>The Third Mystery</h2>

        <h2
          id="joyful"
          onClick={() => toggleVisibility(8)}
          style={{ cursor: "pointer" }}
        >
          The Joyful Mystery (Monday and Saturday)
        </h2>

        {/* The joyful Mystery clickable*/}
        {visibleMysteries.includes(8) && (
          <div>
            <h3>3rd Joyful Mystery: The Nativity of Our Lord </h3>
            <p>
              Fruit of the mystery: Poverty of Spirit, Detachment from the
              things of the world
            </p>
          </div>
        )}

        {/* The 3rd Sorrowful Mystery clickable*/}
        <h2
          id="sorrowful"
          onClick={() => toggleVisibility(9)}
          style={{ cursor: "pointer" }}
        >
          The Sorrowful Mysteries (Tuesday and Fridays)
        </h2>

        {visibleMysteries.includes(9) && (
          <div>
            <h2>3rd Sorrowful Mystery: The Crowning with Thorns </h2>
            <p>Fruit of the mystery: Courage</p>
          </div>
        )}

        {/* The 3rd glorious Mystery clickable*/}
        <h2
          id="glorious"
          onClick={() => toggleVisibility(10)}
          style={{ cursor: "pointer" }}
        >
          The Glorious Mysteries (Wednesdays and Sundays)
        </h2>

        {visibleMysteries.includes(10) && (
          <div>
            <h2>
              3rd Glorious Mystery: The Descent of the Holy Spirit upon the
              Apostles{" "}
            </h2>
            <p> Fruit of the mystery: Wisdom, Love of God</p>
          </div>
        )}
        <h2
          id="luminous"
          onClick={() => toggleVisibility(11)}
          style={{ cursor: "pointer" }}
        >
          {/* The 3rd Luminous Mystery clickable*/}
          The Luminous Mysteries(Thursdays)
        </h2>

        {visibleMysteries.includes(11) && (
          <div>
            <h2> 3rd Luminous Mystery: The Proclamation of the Kingdom </h2>
            <p> Fruit of the mystery: Repentance, Trust in God </p>
          </div>
        )}
      </div>

      <div className="rosary-prayer">
        <h2>
          {" "}
          Our Father <input type="checkbox" />
        </h2>
        <p>
          Our Father, Who art in heaven, Hallowed be Thy Name. Thy Kingdom come.
          Thy Will be done, on earth as it is in Heaven. Give us this day our
          daily bread. And forgive us our trespasses, as we forgive those who
          trespass against us. And lead us not into temptation, but deliver us
          from evil. Amen.
        </p>
      </div>
      <div className="rosary-prayer">
        <h2> Hail Mary (x10)</h2> <input type="checkbox" />{" "}
        <input type="checkbox" /> <input type="checkbox" />{" "}
        <input type="checkbox" /> <input type="checkbox" />{" "}
        <input type="checkbox" /> <input type="checkbox" />{" "}
        <input type="checkbox" /> <input type="checkbox" />{" "}
        <input type="checkbox" />
        <p>
          {" "}
          Hail Mary full of Grace, the Lord is with thee. Blessed are thou
          amongst women and blessed is the fruit of thy womb Jesus. Holy Mary
          Mother of God, pray for us sinners now and at the hour of our death
          Amen.
        </p>
      </div>
      <div className="rosary-prayer">
        <h2>
          {" "}
          Glory Be <input type="checkbox" />
        </h2>
        <p>
          Glory be to the Father, And to the Son, And to the Holy Spirit. As it
          was in the beginning, is now, And ever shall be, World without end.
          Amen.
        </p>
      </div>
      <div className="rosary-prayer">
        <h2>
          {" "}
          O My Jesus - Fatima <input type="checkbox" />
        </h2>
        <p>
          O my Jesus, forgive us our sins, save us from the fires of hell; lead
          all souls to heaven especially those who are in most need of Your
          mercy. Amen.
        </p>
      </div>
      {/* This is the fourth Mystery section where when you click on the day it expands to show the text */}
      <div className="rosary-prayer">
        <h2>The Fourth Mystery</h2>

        <h2
          id="joyful"
          onClick={() => toggleVisibility(12)}
          style={{ cursor: "pointer" }}
        >
          The Joyful Mystery (Monday and Saturday)
        </h2>

        {/* The joyful Mystery clickable*/}
        {visibleMysteries.includes(12) && (
          <div>
            <h3>
              4th Joyful Mystery: The Presentation of the Child Jesus in the
              Temple{" "}
            </h3>
            <p>Fruit of the mystery: Purity of Heart and Body, obedience</p>
          </div>
        )}

        {/* The 4th Sorrowful Mystery clickable*/}
        <h2
          id="sorrowful"
          onClick={() => toggleVisibility(13)}
          style={{ cursor: "pointer" }}
        >
          The Sorrowful Mysteries (Tuesday and Fridays)
        </h2>

        {visibleMysteries.includes(13) && (
          <div>
            <h2>4th Sorrowful Mystery: The Carrying of The Cross </h2>
            <p>Fruit of the mystery: Patience</p>
          </div>
        )}

        {/* The 4th glorious Mystery clickable*/}
        <h2
          id="glorious"
          onClick={() => toggleVisibility(14)}
          style={{ cursor: "pointer" }}
        >
          The Glorious Mysteries (Wednesdays and Sundays)
        </h2>

        {visibleMysteries.includes(14) && (
          <div>
            <h2>
              4th Glorious Mystery: The Assumption of the Blessed Virgin Mary{" "}
            </h2>
            <p> Fruit of the mystery: Devotion to Mary</p>
          </div>
        )}
        <h2
          id="luminous"
          onClick={() => toggleVisibility(15)}
          style={{ cursor: "pointer" }}
        >
          {/* The 4th Luminous Mystery clickable*/}
          The Luminous Mysteries(Thursdays)
        </h2>

        {visibleMysteries.includes(15) && (
          <div>
            <h2> 4th Luminous Mystery: The Transfiguration </h2>
            <p>Fruit of the mystery: Desire for holiness</p>
          </div>
        )}
      </div>

      <div className="rosary-prayer">
        <h2>
          {" "}
          Our Father <input type="checkbox" />
        </h2>
        <p>
          Our Father, Who art in heaven, Hallowed be Thy Name. Thy Kingdom come.
          Thy Will be done, on earth as it is in Heaven. Give us this day our
          daily bread. And forgive us our trespasses, as we forgive those who
          trespass against us. And lead us not into temptation, but deliver us
          from evil. Amen.
        </p>
      </div>
      <div className="rosary-prayer">
        <h2> Hail Mary (x10)</h2> <input type="checkbox" />{" "}
        <input type="checkbox" /> <input type="checkbox" />{" "}
        <input type="checkbox" /> <input type="checkbox" />{" "}
        <input type="checkbox" /> <input type="checkbox" />{" "}
        <input type="checkbox" /> <input type="checkbox" />{" "}
        <input type="checkbox" />
        <p>
          Hail Mary full of Grace, the Lord is with thee. Blessed are thou
          amongst women and blessed is the fruit of thy womb Jesus. Holy Mary
          Mother of God, pray for us sinners now and at the hour of our death
          Amen.
        </p>
      </div>
      <div className="rosary-prayer">
        <h2>
          {" "}
          Glory Be <input type="checkbox" />
        </h2>
        <p>
          Glory be to the Father, And to the Son, And to the Holy Spirit. As it
          was in the beginning, is now, And ever shall be, World without end.
          Amen.
        </p>
      </div>
      <div className="rosary-prayer">
        <h2>
          {" "}
          O My Jesus - Fatima <input type="checkbox" />
        </h2>
        <p>
          O my Jesus, forgive us our sins, save us from the fires of hell; lead
          all souls to heaven especially those who are in most need of Your
          mercy. Amen.
        </p>
      </div>
      {/* This is the fifth Mystery section where when you click on the day it expands to show the text */}
      <div className="rosary-prayer">
        <h2>The Fifth Mystery</h2>

        <h2
          id="joyful"
          onClick={() => toggleVisibility(16)}
          style={{ cursor: "pointer" }}
        >
          The Joyful Mystery (Monday and Saturday)
        </h2>

        {/* The joyful Mystery clickable*/}
        {visibleMysteries.includes(16) && (
          <div>
            <h3>
              5th Joyful Mystery: The Finding of the Child Jesus in the Temple{" "}
            </h3>
            <p>Fruit of the mystery: Devotion to Jesus</p>
          </div>
        )}

        {/* The 5th Sorrowful Mystery clickable*/}
        <h2
          id="sorrowful"
          onClick={() => toggleVisibility(17)}
          style={{ cursor: "pointer" }}
        >
          The Sorrowful Mysteries (Tuesday and Fridays)
        </h2>

        {visibleMysteries.includes(17) && (
          <div>
            <h2>5th Sorrowful Mystery: The Crucifixion </h2>
            <p>Fruit of the mystery: Sorrow for our Sins, Salvation</p>
          </div>
        )}

        {/* The 5th glorious Mystery clickable*/}
        <h2
          id="glorious"
          onClick={() => toggleVisibility(18)}
          style={{ cursor: "pointer" }}
        >
          The Glorious Mysteries (Wednesdays and Sundays)
        </h2>

        {visibleMysteries.includes(18) && (
          <div>
            <h2>5th Glorious Mystery: The Coronation of our Lady </h2>
            <p> Fruit of the mystery: Eternal Happiness </p>
          </div>
        )}
        <h2
          id="luminous"
          onClick={() => toggleVisibility(19)}
          style={{ cursor: "pointer" }}
        >
          {/* The 5th Luminous Mystery clickable*/}
          The Luminous Mysteries(Thursdays)
        </h2>

        {visibleMysteries.includes(19) && (
          <div>
            <h2> 5th Luminous Mystery: The Institution of the Eucharist </h2>
            <p>
              {" "}
              Fruit of the mystery: Adoration, Active Participation at Mass{" "}
            </p>
          </div>
        )}
      </div>

      <div className="rosary-prayer">
        <h2>
          {" "}
          Our Father <input type="checkbox" />
        </h2>
        <p>
          Our Father, Who art in heaven, Hallowed be Thy Name. Thy Kingdom come.
          Thy Will be done, on earth as it is in Heaven. Give us this day our
          daily bread. And forgive us our trespasses, as we forgive those who
          trespass against us. And lead us not into temptation, but deliver us
          from evil. Amen.
        </p>
      </div>
      <div className="rosary-prayer">
        <h2> Hail Mary (x10)</h2> <input type="checkbox" />{" "}
        <input type="checkbox" /> <input type="checkbox" />{" "}
        <input type="checkbox" /> <input type="checkbox" />{" "}
        <input type="checkbox" /> <input type="checkbox" />{" "}
        <input type="checkbox" /> <input type="checkbox" />{" "}
        <input type="checkbox" />
        <p>
          Hail Mary full of Grace, the Lord is with thee. Blessed are thou
          amongst women and blessed is the fruit of thy womb Jesus. Holy Mary
          Mother of God, pray for us sinners now and at the hour of our death
          Amen.
        </p>
      </div>
      <div className="rosary-prayer">
        <h2>
          {" "}
          Glory Be <input type="checkbox" />
        </h2>
        <p>
          Glory be to the Father, And to the Son, And to the Holy Spirit. As it
          was in the beginning, is now, And ever shall be, World without end.
          Amen.
        </p>
      </div>
      <div className="rosary-prayer">
        <h2>
          {" "}
          O My Jesus - Fatima <input type="checkbox" />
        </h2>
        <p>
          O my Jesus, forgive us our sins, save us from the fires of hell; lead
          all souls to heaven especially those who are in most need of Your
          mercy. Amen.
        </p>
      </div>
      <div className="rosary-prayer">
        <h2>
          {" "}
          Hail Holy Queen <input type="checkbox" />
        </h2>
        <p>
          Hail, holy Queen, Mother of mercy, our life, our sweetness and our
          hope. To thee do we cry, poor banished children of Eve: to thee do we
          send up our sighs, mourning and weeping in this valley of tears. Turn
          then, most gracious advocate, thine eyes of mercy toward us, and after
          this our exile, show unto us the blessed fruit of thy womb, Jesus, O
          clement, O loving, O sweet Virgin Mary!
        </p>

        <p>
          Pray for us Oh Holy Mother of God. That we may be made worthy of the
          promises of Christ. Amen.
        </p>
      </div>
      <div className="rosary-prayer">
        <h2>
          {" "}
          Let Us Pray <input type="checkbox" />
        </h2>
        <p>
          {" "}
          O God whose only begotten Son by His Life has purchased for us the
          rewards of eternal life, Grant that we beseech Thee while meditating
          upon these mysteries of the Most Holy Rosary of the Blessed Virgin
          Mary, we may both imitate what they contain and obtain what they
          promise, through the same Christ our Lord Amen.
        </p>
      </div>
    </div>
  );
};

export default ShortRosary;


// I added the x3 next to the Hail Mary's but ideally will add 3 
// checks or something to mark as complete
// same for the 10 Hail Mary's


// links to different litany's at the end !!


