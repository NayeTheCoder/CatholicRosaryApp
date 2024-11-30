// src/components/LongRosary.jsx
import React, { useState }from 'react';
import './LongRosary.css';  // Import the CSS file


const LongRosary = () => {

     // State to control visibility of specific mysteries (each with a unique index)
     const [visibleMysteries, setVisibleMysteries] = useState([]);
  
     // Function to toggle the visibility of a mystery based on its index
     const toggleVisibility = (index) => {
       setVisibleMysteries((prev) => 
         prev.includes(index) ? prev.filter(item => item !== index) : [...prev, index]
       );
     };

  return (
    <div className="long-rosary-container">

        <h1>The Holy Rosary</h1> 

         <p>This is a longer version of the Holy Rosary designed to help you meditate and learn from each mystery. Remember these are all meant to lead us closer to Jesus. We learn about his life through scriptural references.</p> 
          <p> Open you heart and watch how Jesus will transform your life.</p> 

      <img
        src='https://images.squarespace-cdn.com/content/v1/57f874e8440243944ef66aa7/1588056576305-5YHNGFCK4J473KBWH27L/Rosary.jpg'
        alt="The Holy Rosary"
        className="rosary-image"
        style={{ width: '40%', height: 'auto', marginBottom: '20px'}}
      />

      
      
      {/* Example of a prayer structure */}
      <div className="rosary-prayer">
        <h2> The Sign of the Cross</h2>
        <p> In the name of the Father and of the Son and of the Holy Spirit. Amen.</p>
      </div>
      
      <div className="rosary-prayer">
        <h2> The Apostle's Creed</h2>
        <p> I believe in God,
the Father Almighty,
Creator of heaven and earth,
and in Jesus Christ, His only Son, our Lord,
who was conceived by the Holy Spirit,
born of the Virgin Mary,
suffered under Pontius Pilate,
was crucified, died and was buried;
He descended into hell;
on the third day He rose again from the dead;
He ascended into heaven,
and is seated at the right hand of God the Father Almighty;
from there He will come to judge the living and the dead.
I believe in the Holy Spirit,
the Holy Catholic Church,
the communion of Saints,
the forgiveness of sins,
the resurrection of the body,
and life everlasting.
Amen. </p>
      </div>
      <div className="rosary-prayer">
        <h2> Our Father</h2> 
        <p> 
        Our Father, Who art in heaven, 
Hallowed be Thy Name. 
Thy Kingdom come. 
Thy Will be done, 
on earth as it is in Heaven.

Give us this day our daily bread. 
And forgive us our trespasses, 
as we forgive those who trespass against us. 
And lead us not into temptation, 
but deliver us from evil. Amen.
        </p>
        </div>

        <div className="rosary-prayer">
    <h2> Hail Mary (x3)</h2> 
    <p> Hail Mary full of Grace, the Lord is with thee.
Blessed are thou amongst women and blessed is the fruit of thy womb Jesus.
Holy Mary Mother of God,
pray for us sinners now and at the hour of our death
Amen. 
</p>
      </div>

      {/* This is the first Mystery section where when you click on the day it expands to show the text */}
      <div className="rosary-prayer">
        <h2>The First Mystery</h2>

        <h2 id="joyful"
          onClick={() => toggleVisibility(0)} 
          style={{ cursor: 'pointer' }}
        >
          The Joyful Mystery (Monday and Saturday)
        </h2>

     
      {/* The Joyful Mystery clickable*/}
        {visibleMysteries.includes(0) && (
          <div>
            <h3>1st Joyful Mystery: The Annunciation to Mary</h3>
            <p>“In the sixth month, the angel Gabriel was sent from God to a town of Galilee
               called Nazareth, to a virgin betrothed to a man named Joseph, 
               of the house of David, and the virgin’s name was Mary.” - Luke 1:26-27 </p>
              <p>  Fruit of the mystery: Humility </p>
          </div>
        )}

       
      {/* The 1st Sorrowful Mystery clickable*/}
        <h2 id="sorrowful"
          onClick={() => toggleVisibility(1)} 
          style={{ cursor: 'pointer' }}
        >
         The Sorrowful Mysteries (Tuesday and Fridays)
        </h2>

        {visibleMysteries.includes(1) && (
          <div>
            <h2>1st Sorrowful Mystery: The Agony in the Garden</h2>
            <p>“Then Jesus came with them to a place called Gethsemane, and he said to his disciples, 
              'Sit here while I go over there and pray.' He took along Peter and the two sons of Zebedee, 
              and began to feel sorrow and distress. Then he said to them, 'My soul is sorrowful even to death. 
              Remain here and keep watch with me.
              'He advanced a little and fell prostrate in prayer, saying, 'My Father, if it is possible, 
              let this cup pass from me; yet, not as I will, but as you will.'” - Matthew 26:36-39 </p>
              <p>Fruit of the mystery: Obedience to God’s Will</p>
          </div>
        )}

      {/* The 1st Glorious Mystery clickable*/}
        <h2 id="glorious"
          onClick={() => toggleVisibility(2)} 
          style={{ cursor: 'pointer' }}
        >
        The Glorious Mysteries (Wednesdays and Sundays)
        </h2>

        {visibleMysteries.includes(2) && (
          <div>
            <h2>1st Glorious Mystery: The Resurrection of Our Lord</h2>
            <p> “But at daybreak on the first day of the week they took the spices 
              they had prepared and went to the tomb.They found the stone rolled away from the tomb;
               but when they entered, they did not find the body of the Lord Jesus. While they were puzzling 
               over this, behold, two men in dazzling garments appeared to them. They were terrified 
               and bowed their faces to the ground. They said to them, 'Why do you seek the living one among 
               the dead?  He is not here, but he has been raised.'” - Luke 24:1-5 </p>
               <p>Fruit of the mystery: Faith</p>
          </div>
        )}
          <h2 id="luminous"
          onClick={() => toggleVisibility(3)} 
          style={{ cursor: 'pointer' }}
        >

      {/* The 1st Luminous Mystery clickable*/}
        The Luminous Mysteries(Thursdays)
        </h2>

        {visibleMysteries.includes(3) && (
          <div>
            <h2> 1st Luminous Mystery: The Baptism of Jesus in the Jordan</h2>
            <p>“After Jesus was baptized, he came up from the water and behold, the heavens were opened
               [for him], and he saw the Spirit of God descending like a dove [and] coming upon him. And a 
               voice came from the heavens, saying, 'This is my beloved Son, with whom I am well pleased.'” - Matthew 3:16-17</p>
          <p>Fruit of the mystery: Openness to the Holy Spirit</p>
          </div>
        )}
      </div>

      <div className="rosary-prayer">
        <h2> Our Father</h2> 
        <p> 
        Our Father, Who art in heaven, 
Hallowed be Thy Name. 
Thy Kingdom come. 
Thy Will be done, 
on earth as it is in Heaven.

Give us this day our daily bread. 
And forgive us our trespasses, 
as we forgive those who trespass against us. 
And lead us not into temptation, 
but deliver us from evil. Amen.
        </p>
        </div>
<div className="rosary-prayer">
    <h2> Hail Mary (x10)</h2> 
    <p> Hail Mary full of Grace, the Lord is with thee.
Blessed are thou amongst women and blessed is the fruit of thy womb Jesus.
Holy Mary Mother of God,
pray for us sinners now and at the hour of our death
Amen. 
</p>
      </div>
  <div className="rosary-prayer">
  <h2>  Glory Be</h2>
  <p>
  Glory be to the Father,
And to the Son,
And to the Holy Spirit.
As it was in the beginning, is now,
And ever shall be,
World without end. Amen.
  </p>
  </div>  
  <div className="rosary-prayer">
    <h2>  O My Jesus - Fatima</h2>
<p>O my Jesus, forgive us our sins,
save us from the fires of hell;
lead all souls to heaven especially those who are in most need of
Your mercy.
Amen.</p>
</div>

 {/* This is the second Mystery section where when you click on the day it expands to show the text */}
 <div className="rosary-prayer">
        <h2>The Second Mystery</h2>

        <h2 id="joyful"
          onClick={() => toggleVisibility(4)} 
          style={{ cursor: 'pointer' }}
        >
          The Joyful Mystery (Monday and Saturday)
        </h2>

     
      {/* The Glorious Mystery clickable*/}
        {visibleMysteries.includes(4) && (
          <div>
            <h3>2nd Joyful Mystery: The Visitation of Mary</h3>
            <p>“During those days Mary set out and traveled to the hill country in haste to a town of Judah,
               where she entered the house of Zechariah and greeted Elizabeth. When Elizabeth heard Mary’s
                greeting, the infant leaped in her womb, and Elizabeth, filled with the holy Spirit, 
                cried out in a loud voice and said, 'Most blessed are you among women, and blessed is 
                the fruit of your womb.'” - Luke 1:39-42 </p>
                <p>Fruit of the mystery: Love of Neighbor</p>
          </div>
        )}

       
      {/* The 2nd Sorrowful Mystery clickable*/}
        <h2 id="sorrowful"
          onClick={() => toggleVisibility(5)} 
          style={{ cursor: 'pointer' }}
        >
         The Sorrowful Mysteries (Tuesday and Fridays)
        </h2>

        {visibleMysteries.includes(5) && (
          <div>
            <h2>2nd Sorrowful Mystery: The Scourging at the Pillar</h2>
            <p>“Then he released Barabbas to them, but after he had Jesus scourged,
               he handed him over to be crucified.” - Matthew 27:26 </p>
               <p> Fruit of the mystery: Mortification, Purity </p>
          </div>
        )}

      {/* The 2nd glorious Mystery clickable*/}
        <h2 id="glorious"
          onClick={() => toggleVisibility(6)} 
          style={{ cursor: 'pointer' }}
        >
        The Glorious Mysteries (Wednesdays and Sundays)
        </h2>

        {visibleMysteries.includes(6) && (
          <div>
            <h2>2nd Glorious Mystery: The Ascension of Our Lord</h2>
            <p>“So then the Lord Jesus, after he spoke to them, was taken up into heaven
               and took his seat at the right hand of God.” - Mark 16:19  </p>
               <p>Fruit of the mystery: Hope, Desire for Heaven</p>
          </div>
        )}
          <h2 id="luminous"
          onClick={() => toggleVisibility(7)} 
          style={{ cursor: 'pointer' }}
        >

      {/* The 2nd Luminous Mystery clickable*/}
        The Luminous Mysteries(Thursdays)
        </h2>

        {visibleMysteries.includes(7) && (
          <div>
            <h2> 2nd Luminous Mystery: The Wedding Feast at Cana</h2>
            <p> “On the third day there was a wedding in Cana in Galilee, and the mother of Jesus was
               there. Jesus and his disciples were also invited to the wedding. When the wine ran short, 
               the mother of Jesus said to him, 'They have no wine.' [And] Jesus said to her, 
               'Woman, how does your concern affect me? My hour has not yet come.' 
              His mother said to the servers, 'Do whatever he tells you.'” - John 2:1-5</p>
              <p>Fruit of the mystery: To Jesus through Mary</p>
          </div>
        )}
      </div>

<div className="rosary-prayer">
        <h2> Our Father</h2> 
        <p> 
        Our Father, Who art in heaven, 
Hallowed be Thy Name. 
Thy Kingdom come. 
Thy Will be done, 
on earth as it is in Heaven.

Give us this day our daily bread. 
And forgive us our trespasses, 
as we forgive those who trespass against us. 
And lead us not into temptation, 
but deliver us from evil. Amen.
        </p>
        </div>
<div className="rosary-prayer">
  <h2> Hail Mary (x10)</h2> 
  <p> Hail Mary full of Grace, the Lord is with thee.
Blessed are thou amongst women and blessed is the fruit of thy womb Jesus.
Holy Mary Mother of God,
pray for us sinners now and at the hour of our death
Amen. 
</p>
      </div>
  <div className="rosary-prayer">
  <h2>  Glory Be</h2>
  <p>
  Glory be to the Father,
And to the Son,
And to the Holy Spirit.
As it was in the beginning, is now,
And ever shall be,
World without end. Amen.
  </p>
  </div>  
  <div className="rosary-prayer">
    <h2>  O My Jesus - Fatima</h2>
<p>O my Jesus, forgive us our sins,
save us from the fires of hell;
lead all souls to heaven especially those who are in most need of
Your mercy.
Amen.</p>
</div>
 {/* This is the third Mystery section where when you click on the day it expands to show the text */}
 <div className="rosary-prayer">
        <h2>The Third Mystery</h2>

        <h2 id="joyful"
          onClick={() => toggleVisibility(8)} 
          style={{ cursor: 'pointer' }}
        >
          The Joyful Mystery (Monday and Saturday)
        </h2>

     
      {/* The joyful Mystery clickable*/}
        {visibleMysteries.includes(8) && (
          <div>
            <h3>3rd Joyful Mystery: The Nativity of Our Lord </h3>
            <p>“In those days a decree went out from Caesar Augustus that the whole world should be enrolled. 
              This was the first enrollment, when Quirinius was governor of Syria. So all went to be enrolled, 
              each to his own town. And Joseph too went up from Galilee from the town of Nazareth to Judea, to 
              the city of David that is called Bethlehem, because he was of the house and family of David, 
              to be enrolled with Mary, his betrothed, who was with child. While they were there, the time came 
              for her to have her child, and she gave birth to her firstborn son. She wrapped him in swaddling
               clothes and laid him in a manger, because there was no room for them in the inn.” - Luke 2:1-7 </p>
          <p>Fruit of the mystery: Poverty of Spirit, Detachment from the things of the world</p>
          </div>
        )}

       
      {/* The 3rd Sorrowful Mystery clickable*/}
        <h2 id="sorrowful"
          onClick={() => toggleVisibility(9)} 
          style={{ cursor: 'pointer' }}
        >
         The Sorrowful Mysteries (Tuesday and Fridays)
        </h2>

        {visibleMysteries.includes(9) && (
          <div>
            <h2>3rd Sorrowful Mystery: The Crowning with Thorns </h2>
            <p> "Then the soldiers of the governor took Jesus inside the praetorium and gathered the whole 
              cohort around him. They stripped off his clothes and threw a scarlet military cloak about him. 
              Weaving a crown out of thorns, they placed it on his head, and a reed in his right hand. And 
              kneeling before him, they mocked him, saying, 'Hail, King of the Jews!'” - Matthew 27:27-29</p>
          <p>Fruit of the mystery: Courage</p>
          </div>
        )}

      {/* The 3rd glorious Mystery clickable*/}
        <h2 id="glorious"
          onClick={() => toggleVisibility(10)} 
          style={{ cursor: 'pointer' }}
        >
        The Glorious Mysteries (Wednesdays and Sundays)
        </h2>

        {visibleMysteries.includes(10) && (
          <div>
            <h2>3rd Glorious Mystery: The Descent of the Holy Spirit upon the Apostles </h2>
            <p> “When the time for Pentecost was fulfilled, they were all in one place together. 
              And suddenly there came from the sky a noise like a strong driving wind, and it filled the entire 
              house in which they were. Then there appeared to them tongues as of fire, which parted and came to
               rest on each one of them. And they were all filled with the holy Spirit and began to speak in 
               different tongues, as the Spirit enabled them to proclaim.” - Acts 2:1-4 </p>
          <p> Fruit of the mystery: Wisdom, Love of God</p>
          </div>
        )}
          <h2 id="luminous"
          onClick={() => toggleVisibility(11)} 
          style={{ cursor: 'pointer' }}
        >

      {/* The 3rd Luminous Mystery clickable*/}
        The Luminous Mysteries(Thursdays)
        </h2>

        {visibleMysteries.includes(11) && (
          <div>
            <h2> 3rd Luminous Mystery: The Proclamation of the Kingdom </h2>
            <p> “'This is the time of fulfillment. The kingdom of God is at hand. 
              Repent, and believe in the gospel.'” - Mark 1:15   </p>
              <p> Fruit of the mystery: Repentance, Trust in God </p>
          </div>
        )}
      </div>


<div className="rosary-prayer">
        <h2> Our Father</h2> 
        <p> 
        Our Father, Who art in heaven, 
Hallowed be Thy Name. 
Thy Kingdom come. 
Thy Will be done, 
on earth as it is in Heaven.

Give us this day our daily bread. 
And forgive us our trespasses, 
as we forgive those who trespass against us. 
And lead us not into temptation, 
but deliver us from evil. Amen.
        </p>
        </div>
        <div className="rosary-prayer">
    <h2> Hail Mary (x10)</h2> 
    <p> Hail Mary full of Grace, the Lord is with thee.
Blessed are thou amongst women and blessed is the fruit of thy womb Jesus.
Holy Mary Mother of God,
pray for us sinners now and at the hour of our death
Amen. 
</p>
      </div>
  <div className="rosary-prayer">
  <h2> Glory Be</h2>
  <p>
  Glory be to the Father,
And to the Son,
And to the Holy Spirit.
As it was in the beginning, is now,
And ever shall be,
World without end. Amen.
  </p>
  </div>  
  <div className="rosary-prayer">
    <h2> O My Jesus - Fatima</h2>
<p>O my Jesus, forgive us our sins,
save us from the fires of hell;
lead all souls to heaven especially those who are in most need of
Your mercy.
Amen.</p>
</div>

   {/* This is the fourth Mystery section where when you click on the day it expands to show the text */}
   <div className="rosary-prayer">
        <h2>The Fourth Mystery</h2>

        <h2 id="joyful"
          onClick={() => toggleVisibility(12)} 
          style={{ cursor: 'pointer' }}
        >
          The Joyful Mystery (Monday and Saturday)
        </h2>

     
      {/* The joyful Mystery clickable*/}
        {visibleMysteries.includes(12) && (
          <div>
            <h3>4th Joyful Mystery: The Presentation of the Child Jesus in the Temple </h3>
            <p> “When eight days were completed for his circumcision, he was named Jesus,
               the name given him by the angel before he was conceived in the womb.
            "When the days were completed for their purification according to the law of Moses, 
            they took him up to Jerusalem to present him to the Lord, just as it is written in the 
            law of the Lord, 'Every male that opens the womb shall be consecrated to the Lord,' 
            and to offer the sacrifice of 'a pair of turtledoves or two young pigeons,'
            in accordance with the dictate in the law of the Lord.” - Luke 2:21-24 </p>
            <p>Fruit of the mystery: Purity of Heart and Body, obedience</p>
          </div>
        )}

       
      {/* The 4th Sorrowful Mystery clickable*/}
        <h2 id="sorrowful"
          onClick={() => toggleVisibility(13)} 
          style={{ cursor: 'pointer' }}
        >
         The Sorrowful Mysteries (Tuesday and Fridays)
        </h2>

        {visibleMysteries.includes(13) && (
          <div>
            <h2>4th Sorrowful Mystery: The Carrying of The Cross </h2>
            <p>"They pressed into service a passer-by, Simon, a Cyrenian, who was coming in from the country,
               the father of Alexander and Rufus, to carry his cross. They brought him to the place of Golgotha
               (which is translated Place of the Skull).” - Mark 15:21-22   </p>
               <p>Fruit of the mystery: Patience</p>
          </div>
        )}

      {/* The 4th glorious Mystery clickable*/}
        <h2 id="joyful"
          onClick={() => toggleVisibility(14)} 
          style={{ cursor: 'pointer' }}
        >
        The Glorious Mysteries (Wednesdays and Sundays)
        </h2>

        {visibleMysteries.includes(14) && (
          <div>
            <h2>4th Glorious Mystery: The Assumption of the Blessed Virgin Mary </h2>
            <p> "Behold, from now on will all ages call me blessed.
              The Mighty One has done great things for me,
              and holy is his name.” - Luke 1:48-49</p>
            <p> Fruit of the mystery: Devotion to Mary</p>
          </div>
        )}
          <h2 id="luminous"
          onClick={() => toggleVisibility(15)} 
          style={{ cursor: 'pointer' }}
        >

      {/* The 4th Luminous Mystery clickable*/}
        The Luminous Mysteries(Thursdays)
        </h2>

        {visibleMysteries.includes(15) && (
          <div>
            <h2> 4th Luminous Mystery: The Transfiguration  </h2>
            <p> “After six days Jesus took Peter, James, and John his brother, and led them up a high 
              mountain by themselves. And he was transfigured before them; his face shone 
              like the sun and his clothes became white as light.” - Matthew 17:1-2 </p>
              <p>Fruit of the mystery: Desire for holiness</p>
          </div>
        )}
      </div>

<div className="rosary-prayer">
        <h2> Our Father</h2> 
        <p> 
        Our Father, Who art in heaven, 
Hallowed be Thy Name. 
Thy Kingdom come. 
Thy Will be done, 
on earth as it is in Heaven.

Give us this day our daily bread. 
And forgive us our trespasses, 
as we forgive those who trespass against us. 
And lead us not into temptation, 
but deliver us from evil. Amen.
        </p>
        </div>
  <div className="rosary-prayer">
    <h2> Hail Mary (x10)</h2> 
    <p> Hail Mary full of Grace, the Lord is with thee.
Blessed are thou amongst women and blessed is the fruit of thy womb Jesus.
Holy Mary Mother of God,
pray for us sinners now and at the hour of our death
Amen. 
</p>
      </div>
  <div className="rosary-prayer">
  <h2> Glory Be</h2>
  <p>
  Glory be to the Father,
And to the Son,
And to the Holy Spirit.
As it was in the beginning, is now,
And ever shall be,
World without end. Amen.
  </p>
  </div>  
  <div className="rosary-prayer">
    <h2> O My Jesus - Fatima</h2>
<p>O my Jesus, forgive us our sins,
save us from the fires of hell;
lead all souls to heaven especially those who are in most need of
Your mercy.
Amen.</p>
</div>
{/* This is the fifth Mystery section where when you click on the day it expands to show the text */}
<div className="rosary-prayer">
        <h2>The Fifth Mystery</h2>

        <h2 id="joyful"
          onClick={() => toggleVisibility(16)} 
          style={{ cursor: 'pointer' }}
        >
          The Joyful Mystery (Monday and Saturday)
        </h2>

     
      {/* The joyful Mystery clickable*/}
        {visibleMysteries.includes(16) && (
          <div>
            <h3>5th Joyful Mystery: The Finding of the Child Jesus in the Temple </h3>
            <p>“Each year his parents went to Jerusalem for the feast of Passover,  and when he was 
              twelve years old, they went up according to festival custom. After they had completed 
              its days, as they were returning, the boy Jesus remained behind in Jerusalem, but his 
              parents did not know it. Thinking that he was in the caravan, they journeyed for a day and
               looked for him among their relatives and acquaintances, but not finding him, they returned
                to Jerusalem to look for him. After three days they found him in the temple, sitting in 
                the midst of the teachers, listening to them and asking them questions, and all who heard
                 him were astounded at his understanding and his answers.” - Luke 2:41-47  </p>
                 <p>Fruit of the mystery: Devotion to Jesus</p>
          </div>
        )}

       
      {/* The 5th Sorrowful Mystery clickable*/}
        <h2 id="sorrowful"
          onClick={() => toggleVisibility(17)} 
          style={{ cursor: 'pointer' }}
        >
         The Sorrowful Mysteries (Tuesday and Fridays)
        </h2>

        {visibleMysteries.includes(17) && (
          <div>
            <h2>5th Sorrowful Mystery: The Crucifixion  </h2>
            <p> “When they came to the place called the Skull, they crucified him and the criminals there,
               one on his right, the other on his left. [Then Jesus said, 'Father, forgive them, they know not
                what they do.'] They divided his garments by casting lots. The people stood by and watched; 
                the rulers, meanwhile, sneered at him and said, 'He saved others, let him save himself if he is 
                the chosen one, the Messiah of God.' Even the soldiers jeered at him. As they approached to offer
                 him wine they called out, 'If you are King of the Jews, save yourself.' Above him there was an 
                 inscription that read, 'This is the King of the Jews.' Now one of the criminals hanging there reviled Jesus, saying, 'Are you not the Messiah? Save yourself and us.' The other, however, rebuking him, said in reply, 'Have you no fear of God, for you are subject to the same condemnation? And indeed, we have been condemned justly, for the sentence we received corresponds to our crimes, but this man has done nothing criminal.' Then he said, 'Jesus, remember me when you come into your kingdom.' He replied to him, 
              'Amen, I say to you, today you will be with me in Paradise.'"It was now about noon and 
              darkness came over the whole land until three in the afternoon because of an eclipse of 
              the sun. Then the veil of the temple was torn down the middle. Jesus cried out in a loud
               voice, 'Father, into your hands I commend my spirit'; and when he had said this he 
               breathed his last.” - Luke 23:33-46</p>
               <p>Fruit of the mystery: Sorrow for our Sins, Salvation</p>
          </div>
        )}

      {/* The 5th glorious Mystery clickable*/}
        <h2 id="glorious"
          onClick={() => toggleVisibility(18)} 
          style={{ cursor: 'pointer' }}
        >
        The Glorious Mysteries (Wednesdays and Sundays)
        </h2>

        {visibleMysteries.includes(18) && (
          <div>
            <h2>5th Glorious Mystery: The Coronation of our Lady </h2>
            <p> “A great sign appeared in the sky, a woman clothed with the sun, with the moon under her feet, 
              and on her head a crown of twelve stars.” - Revelation 12:1 </p>
            <p> Fruit of the mystery: Eternal Happiness </p>
          </div>
        )}
          <h2 id="luminous"
          onClick={() => toggleVisibility(19)} 
          style={{ cursor: 'pointer' }}
        >

      {/* The 5th Luminous Mystery clickable*/}
        The Luminous Mysteries(Thursdays)
        </h2>

        {visibleMysteries.includes(19) && (
          <div>
            <h2> 5th Luminous Mystery: The Institution of the Eucharist  </h2>
            <p> “While they were eating, Jesus took bread, said the blessing, broke it, and giving 
              it to his disciples said, 'Take and eat; this is my body.'” - Matthew 26:26 </p>
              <p> Fruit of the mystery: Adoration, Active Participation at Mass </p>
          </div>
        )}
      </div>

<div className="rosary-prayer">
        <h2> Our Father</h2> 
        <p> 
        Our Father, Who art in heaven, 
Hallowed be Thy Name. 
Thy Kingdom come. 
Thy Will be done, 
on earth as it is in Heaven.

Give us this day our daily bread. 
And forgive us our trespasses, 
as we forgive those who trespass against us. 
And lead us not into temptation, 
but deliver us from evil. Amen.
        </p>
        </div>
 <div className="rosary-prayer">
    <h2> Hail Mary (x10)</h2> 
        <p> 
        Hail Mary full of Grace, the Lord is with thee.
Blessed are thou amongst women and blessed is the fruit of thy womb Jesus.
Holy Mary Mother of God,
pray for us sinners now and at the hour of our death
Amen. 
</p>
      </div>
  <div className="rosary-prayer">
  <h2> Glory Be</h2>
  <p>
  Glory be to the Father,
And to the Son,
And to the Holy Spirit.
As it was in the beginning, is now,
And ever shall be,
World without end. Amen.
  </p>
  </div>  
  <div className="rosary-prayer">
    <h2> O My Jesus - Fatima</h2>
<p>O my Jesus, forgive us our sins,
save us from the fires of hell;
lead all souls to heaven especially those who are in most need of
Your mercy.
Amen.</p>
</div>
<div className="rosary-prayer">
    <h2>  Hail holy Queen</h2>
<p>Hail, holy Queen,
Mother of mercy,
our life, our sweetness and our hope.
To thee do we cry,
poor banished children of Eve:
to thee do we send up our sighs,
mourning and weeping in this valley of tears.
Turn then,
most gracious advocate,
thine eyes of mercy toward us,
and after this our exile,
show unto us the blessed fruit of thy womb, Jesus,
O clement, O loving,
O sweet Virgin Mary!

Amen.</p>
</div>
<div className="rosary-prayer">
    <h2>  Memorare</h2>
<p>REMEMBER, O most gracious Virgin Mary, 
  that never was it known that anyone who fled to thy protection,
   implored thy help, or sought thy intercession was left unaided.
    Inspired with this confidence, I fly to thee, O Virgin of virgins,
     my Mother; to thee do I come; before thee I stand, sinful and sorrowful.
     O Mother of the Word Incarnate, despise not my petitions, 
    but in thy mercy hear and answer me. Amen.</p>
</div>
</div>
  );
};

export default LongRosary;


// I added the x3 next to the Hail Mary's but ideally will add 3 
// checks or something to mark as complete

// same for the 10 Hail Mary's


// links to different litany's at the end !!