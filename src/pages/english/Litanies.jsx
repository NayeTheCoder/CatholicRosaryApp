import React, { useState } from 'react';
import '../../styles/Litanies.css';
import { useNavigate } from 'react-router-dom';
import Switch from "react-switch";

const Litanies = () => {
  const [isPageOne, setIsPageOne] = useState(false);
        const navigate = useNavigate();
  
        const handleToggle = () => {
          setIsPageOne(!isPageOne);
          if (!isPageOne) {
            navigate('/prayers/Spanish-Litany'); // Navigate to /page-one when switching from page two
          }
        };
  // State to manage visibility of prayer sections
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Function to toggle the visibility of the prayer section
  const togglePrayerVisibility = (index) => {
    // Toggle the section: if it's open, close it; if it's closed, open it
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
     <>
    <div 
    style={{
      position:"fixed", 
      bottom:"40px", 
      left:"40px", 
      marginLeft:".5rem",
      backgroundColor:"white",
      opacity:"80%", 
      display:"flex", 
      flexDirection:"column", 
      borderRadius:"5px", 
      color:"black"}}>
      <span id="close" onClick ={()=>{document.getElementById("close").parentElement.remove(); return false;}} style={{"fontSize":"1.5rem", "marginLeft":"auto", "paddingRight":".5rem", "paddingLeft":".5rem"}}>x</span>
      <span style={{"alignText":"center","fontSize":"1.25rem"}}>Español!</span>
      <label>
        <Switch onChange={handleToggle} checked={isPageOne} />
      </label>
    </div>
    <div className='litanies-page'>
      <h1 style={{color: "#ffffff"}}>Litanies</h1>

      {/* The Litany of the Blessed Virgin Mary */}
      <h2  onClick={() => togglePrayerVisibility(0)} style={{ cursor: 'pointer', color: "#187ae2" }}>
          The Litany of the Blessed Virgin Mary
        </h2>
      <div className='litany'>
        
        {expandedIndex === 0 && (
          <div className='litany-prayer'>
            <ul>
              <li>Lord, have mercy on us.</li>
              <li> <b>Lord, have mercy on us. </b></li>
              <li>Christ, have mercy on us.</li>
              <li> <b>Christ, have mercy on us. </b></li>
              <li>Lord, have mercy on us.</li>
              <li> <b>Lord, have mercy on us. </b></li>
              <li>Christ, hear us.</li>
              <li> <b>Christ, hear us. </b></li>
              <li>Christ, graciously hear us.</li>
              <li> <b>Christ, graciously hear us. </b></li>
              <br></br>
              <li>God, the Father of heaven,</li> 
                <li> <b>have mercy on us. </b></li>
              <li>God, the Son, Redeemer of the world,</li>
              <li> <b>have mercy on us. </b></li>
              <li>God, the Holy Ghost,</li>
              <li> <b>have mercy on us. </b></li>
              <li>Holy Trinity, One God,</li>
              <li> <b>have mercy on us. </b></li>
              <br></br>
              <li>Holy Mary, pray for us.</li>
              <li> <b>pray for us. </b></li>
              <li>Holy Mother of God, </li>
              <li> <b>pray for us. </b></li>
              <li>Holy Mother of God,  </li>
              <li> <b>pray for us. </b></li>
              <li>Holy Virgin of virgins,</li>
              <li> <b>pray for us. </b></li>
              <li>Mother of Christ, </li>
              <li> <b>pray for us. </b></li>
              <li>Mother of divine grace, </li>
              <li> <b>pray for us. </b></li>
              <li>Mother most pure, </li>
              <li> <b>pray for us. </b></li>
              <li>Mother most chaste, </li>
              <li> <b>pray for us. </b></li>
              <li>Mother inviolate, </li>
              <li> <b>pray for us. </b></li>
              <li>Mother undefiled, </li>
              <li> <b>pray for us. </b></li>
              <li>Mother most amiable, </li>
              <li> <b>pray for us. </b></li>
              <li>Mother most admirable,</li>
              <li> <b>pray for us. </b></li>
              <li>Mother of good counsel,</li>
              <li> <b>pray for us. </b></li>
              <li>Mother of our Creator, </li>
              <li> <b>pray for us. </b></li>
              <li>Mother of our Savior, </li>
              <li> <b>pray for us. </b></li>
              <li>Virgin most prudent, </li>
              <li> <b>pray for us. </b></li>
              <li>Virgin most venerable, </li>
              <li> <b>pray for us. </b></li>
              <li>Virgin most renowned,</li>
              <li> <b>pray for us. </b></li>
              <li>Virgin most powerful,</li>
              <li> <b>pray for us. </b></li>
              <li>Virgin most merciful,</li>
              <li> <b>pray for us. </b></li>
              <li>Virgin most faithful, </li>
              <li> <b>pray for us. </b></li>
              <li>Mirror of justice, </li>
              <li> <b>pray for us. </b></li>
              <li>Seat of wisdom,</li>
              <li> <b>pray for us. </b></li>
              <li>Cause of our joy,</li>
              <li> <b>pray for us. </b></li>
              <li>Spiritual vessel,</li>
              <li> <b>pray for us. </b></li>
              <li>Vessel of honor,</li>
              <li> <b>pray for us. </b></li>
              <li>Singular vessel of devotion,</li>
              <li> <b>pray for us. </b></li>
              <li>Mystical rose,</li>
              <li> <b>pray for us. </b></li>
              <li>Tower of David,</li>
              <li> <b>pray for us. </b></li>
              <li>Tower of ivory, </li>
              <li> <b>pray for us. </b></li>
              <li>House of gold, </li>
              <li> <b>pray for us. </b></li>
              <li>Ark of the covenant, </li>
              <li> <b>pray for us. </b></li>
              <li>Gate of Heaven,  </li>
              <li> <b>pray for us. </b></li>
              <li>Morning star, </li>
              <li> <b>pray for us. </b></li>
              <li>Health of the sick,</li>
              <li> <b>pray for us. </b></li>
              <li>Refuge of sinners, </li>
              <li> <b>pray for us. </b></li>
              <li>Comforter of the afflicted,</li>
              <li> <b>pray for us. </b></li>
              <li>Help of Christians, </li>
              <li> <b>pray for us. </b></li>
              <li>Queen of angels,</li>
              <li> <b>pray for us. </b></li>
              <li>Queen of patriarchs,</li>
              <li> <b>pray for us. </b></li>
              <li>Queen of prophets, </li>
              <li> <b>pray for us. </b></li>
              <li>Queen of apostles,</li>
              <li> <b>pray for us. </b></li>
              <li>Queen of martyrs, </li>
              <li> <b>pray for us. </b></li>
              <li>Queen of confessors,</li>
              <li> <b>pray for us. </b></li>
              <li>Queen of virgins, </li>
              <li> <b>pray for us. </b></li>
              <li>Queen of all saints,</li>
              <li> <b>pray for us. </b></li>
              <li>Queen conceived without original sin, </li>
              <li> <b>pray for us. </b></li>
              <li>Queen assumed into heaven,</li>
              <li> <b>pray for us. </b></li>
              <li>Queen of the most holy Rosary, </li>
              <li> <b>pray for us. </b></li>
              <li>Queen of peace. </li>
              <li> <b>pray for us. </b></li>
              <br></br>
        <li>Lamb of God, who takest away the sins of the world, </li>
          <li> <b>Spare us, O Lord. </b></li>
        <li>Lamb of God, who takest away the sins of the world, </li>
        <li> <b>Graciously hear us O Lord. </b></li>
        <li>Lamb of God, who takest away the sins of the world, </li>
          <li> <b>Have mercy on us. </b></li>
          <br></br>
        <li>V. Pray for us, O holy Mother of God.</li>
        <li><b> R. That we may be made worthy of the promises of Christ.</b> </li>
            <br></br>
            <li>Let us pray: </li>
      <li><b>Grant, O Lord God, we beseech Thee, that we Thy servants may rejoice in continual health of mind and body; and, through the glorious intercession of Blessed Mary ever Virgin, may be freed from present sorrow, and enjoy eternal gladness. Through Christ our Lord. Amen.</b> </li>

            </ul>
          </div>
        )}
      </div>

      {/* The Litany of Humility */}
      <h2 onClick={() => togglePrayerVisibility(1)} style={{ cursor: 'pointer', color: "#187ae2"}}>
          Litany of Humility
        </h2>
      <div className='litany'>

        {expandedIndex === 1 && (
          <div className='litany-prayer'>
            <ul>
              <li>O Jesus, meek and humble of heart,</li>
              <li> <b> Hear me. </b></li>
              <br></br>
              <li>From the desire of being esteemed,</li>
              <li> <b> Deliver me, O Jesus. </b></li>
              <li>From the desire of being loved,</li>
              <li> <b> Deliver me, O Jesus. </b></li>
              <li>From the desire of being extolled,</li>
              <li> <b> Deliver me, O Jesus. </b></li>
              <li>From the desire of being honored,</li>
              <li> <b> Deliver me, O Jesus. </b></li>
              <li>From the desire of being praised, </li>
              <li> <b> Deliver me, O Jesus. </b></li>
               <li>From the desire of being preferred to others, </li>
               <li> <b> Deliver me, O Jesus. </b></li>
              <li>From the desire of being consulted, </li>
              <li> <b> Deliver me, O Jesus. </b></li>
              <li>From the desire of being approved, </li>
              <li> <b> Deliver me, O Jesus. </b></li>
              <li>From the fear of being humiliated, </li>
              <li> <b> Deliver me, O Jesus. </b></li>
               <li>From the fear of being despised, </li>
               <li> <b> Deliver me, O Jesus. </b></li>
             <li>From the fear of suffering rebukes,</li>
             <li> <b> Deliver me, O Jesus. </b></li>
            <li>From the fear of being calumniated,</li>
            <li> <b> Deliver me, O Jesus. </b></li>
            <li>From the fear of being forgotten,</li>
            <li> <b> Deliver me, O Jesus. </b></li>
          <li>From the fear of being ridiculed,</li>
          <li> <b> Deliver me, O Jesus. </b></li>
          <li>From the fear of being wronged,</li>
          <li> <b> Deliver me, O Jesus. </b></li>
          <li> From the fear of being suspected,</li>
          <li> <b> Deliver me, O Jesus. </b></li>
          <br></br>
        <li>That others may be loved more than I, Jesus, </li>
        <li> <b> Grant me the grace to desire it. </b></li>
        <li>That others may be esteemed more than I, Jesus, </li>
        <li> <b> Grant me the grace to desire it. </b></li>
        <li>That, in the opinion of the world, others may increase and I may decrease, Jesus,</li>
        <li> <b> Grant me the grace to desire it. </b></li>
        <li>That others may be chosen and I set aside, Jesus,</li>
        <li> <b> Grant me the grace to desire it. </b></li>
        <li>That others may be praised and I go unnoticed, Jesus,</li>
        <li> <b> Grant me the grace to desire it. </b></li>
      <li>That others may be preferred to me in everything, Jesus,</li>
      <li> <b> Grant me the grace to desire it. </b></li>
<li>That others may become holier than I, provided that I may become as holy as I should, Jesus,</li>
<li> <b> Grant me the grace to desire it. </b></li>
            </ul>
          </div>
        )}
      </div>
 {/* The Litany of the Sacred Heart of Jesus */}
 <h2 onClick={() => togglePrayerVisibility(2)} style={{ cursor: 'pointer', color: "#187ae2" }}>
          Litany of the Sacred Heart of Jesus
        </h2>
 <div className='litany'>
        
        {expandedIndex === 2 && (
          <div className='litany-prayer'>
            <ul>
              <li> Lord, have mercy.  </li>
              <li> <b> Lord, have mercy. </b></li>
              <li> Christ, have mercy. </li>
              <li> <b> Christ, have mercy. </b></li>
              <li> Lord, have mercy.</li>
              <li> <b> Lord, have mercy. </b></li>
              <li> God our Father in heaven,  </li>
              <li> <b> Have mercy on us.</b></li>
              <li> God the Son, Redeemer of the world, </li>
              <li> <b> Have mercy on us.</b></li>
              <li> God the Holy Spirit,</li>
              <li> <b> Have mercy on us.</b></li>
              <li> Holy Trinity, one God, </li>
              <li> <b> Have mercy on us.</b></li>
              <li> Heart of Jesus, Son of the eternal Father, </li>
              <li> <b> Have mercy on us.</b></li>
              <li> Heart of Jesus, formed by the Holy Spirit in the womb of the Virgin Mother,</li>
              <li> <b> Have mercy on us.</b></li>
              <li> Heart of Jesus, one with the eternal Word, </li>
              <li> <b> Have mercy on us.</b></li>
              <li> Heart of Jesus, infinite in majesty, </li>
              <li> <b> Have mercy on us.</b></li>
              <li> Heart of Jesus, holy temple of God, </li>
              <li> <b> Have mercy on us.</b></li>
              <li> Heart of Jesus, tabernacle of the Most High,</li>
              <li> <b> Have mercy on us.</b></li>
              <li> Heart of Jesus, house of God and gate of heaven,</li>
              <li> <b> Have mercy on us.</b></li>
              <li>Heart of Jesus, aflame with love for us, </li>
              <li> <b> Have mercy on us.</b></li>
              <li>Heart of Jesus, source of justice and love,</li>
              <li> <b> Have mercy on us.</b></li>
              <li>Heart of Jesus, full of goodness and love,</li>
              <li> <b> Have mercy on us.</b></li>
              <li>Heart of Jesus, well-spring of all virtue,</li>
              <li> <b> Have mercy on us.</b></li>
              <li>Heart of Jesus, worthy of all praise,</li>
              <li> <b> Have mercy on us.</b></li>
              <li>Heart of Jesus, king and center of all hearts,</li>
              <li> <b> Have mercy on us.</b></li>
              <li>Heart of Jesus, treasure-house of wisdom and knowledge,</li>
              <li> <b> Have mercy on us.</b></li>
              <li>Heart of Jesus, in whom there dwells the fullness of God,</li>
              <li> <b> Have mercy on us.</b></li>
              <li>Heart of Jesus, in whom the Father is well pleased,</li>
              <li> <b> Have mercy on us.</b></li>
              <li>Heart of Jesus, from whose fullness we have all received,</li>
              <li> <b> Have mercy on us.</b></li>
              <li>Heart of Jesus, desire of the eternal hills,</li>
              <li> <b> Have mercy on us.</b></li>
              <li>Heart of Jesus, patient and full of mercy,</li>
              <li> <b> Have mercy on us.</b></li>
              <li>Heart of Jesus, generous to all who turn to you,</li>
              <li> <b> Have mercy on us.</b></li>
              <li>Heart of Jesus, fountain of life and holiness,</li>
              <li> <b> Have mercy on us.</b></li>
              <li>Heart of Jesus, atonement for our sins,</li>
              <li> <b> Have mercy on us.</b></li>
              <li>Heart of Jesus, overwhelmed with insults,</li>
              <li> <b> Have mercy on us.</b></li>
              <li>Heart of Jesus, broken for our sins,</li>
              <li> <b> Have mercy on us.</b></li>
              <li>Heart of Jesus, obedient even to death,</li>
              <li> <b> Have mercy on us.</b></li>
              <li>Heart of Jesus, pierced by a lance,</li>
              <li> <b> Have mercy on us.</b></li>
              <li>Heart of Jesus, source of all consolation,</li>
              <li> <b> Have mercy on us.</b></li>
              <li>Heart of Jesus, our life and resurrection,</li>
              <li> <b> Have mercy on us.</b></li>
              <li>Heart of Jesus, our peace and reconciliation,</li>
              <li> <b> Have mercy on us.</b></li>
              <li>Heart of Jesus, victim of our sins,</li>
              <li> <b> Have mercy on us.</b></li>
              <li>Heart of Jesus, salvation of all who trust in you,</li>
              <li> <b> Have mercy on us.</b></li>
              <li>Heart of Jesus, hope of all who die in you,</li>
              <li> <b> Have mercy on us.</b></li>
              <li>Heart of Jesus, delight of all the saints,</li>
              <li> <b> Have mercy on us.</b></li>
              <li>Lamb of God, you take away the sins of the world,</li>
              <li> <b> Have mercy on us.</b></li>
              <li> Lamb of God, you take away the sins of the world,</li>
              <li> <b> Have mercy on us.</b></li>
              <li> Lamb of God, you take away the sins of the world,</li>
              <li> <b> Have mercy on us.</b></li>
              <li>Jesus, gentle and humble of heart.</li>
              <li> <b> Touch our hearts and make them like your own.</b></li>
              <li>Let us pray.</li>
<li> <b>
Grant, we pray, almighty God,
that we, who glory in the Heart of your beloved Son
and recall the wonders of his love for us,
may be made worthy to receive
an overflowing measure of grace
from that fount of heavenly gifts.
Through Christ our Lord.
Amen.</b></li>
            </ul>
          </div>
        )}
        </div>


{/*Litany of The Eucharist */}
  <h2 onClick={() => togglePrayerVisibility(3)} style={{ cursor: 'pointer', color: "#187ae2" }}>
           Litany of The Eucharist
         </h2>
        <div className='litany'>

          {expandedIndex === 3 && (
           <div className='litany-prayer'>
              <ul>
              <li> Lord, have mercy.  </li>
              <li> Christ, have mercy. </li>
              <li> Lord, have mercy.</li>
              <li> Christ hear us.</li>
              <li> Christ, graciously hear us.</li>
              <br></br>
              <li> Jesus, Eucharistic High Priest of the Sacrifice,</li>
              <li> <b> Have mercy on us. </b></li>
              <li> Jesus, Divine Victim for our salvation,</li>
              <li> <b> Have mercy on us. </b></li>
              <li> Jesus, Veiled in bread and wine,</li>
              <li> <b> Have mercy on us. </b></li>
              <li> Jesus, Dwelling in the tabernacles</li>
              <li> <b> Have mercy on us. </b></li>
              <li> Jesus, Really truly and substantially present in the Blessed Sacrament </li>
              <li> <b> Have mercy on us. </b></li>
              <li> Jesus, Body, Blood, Soul and Divinity,</li>
              <li> <b> Have mercy on us. </b></li>
              <li> Jesus, Bread of Life,</li>
              <li> <b> Have mercy on us. </b></li>
              <li> Jesus, Bread of Angels,</li>
              <li> <b> Have mercy on us. </b></li>
              <li> Jesus, Ever present until world's end,</li>
              <li> <b> Have mercy on us. </b></li>
              <br></br>

              <li> Sacred Host, Source and Summit,</li>
              <li> <b> Have mercy on us. </b></li>
              <li> Sacred Host, Adored by countless angels,</li>
              <li> <b> Have mercy on us. </b></li>
              <li> Sacred Host, Spiritual food,</li>
              <li> <b> Have mercy on us. </b></li>
              <li> Sacred Host, Bond of charity,</li>
              <li> <b> Have mercy on us. </b></li>
              <li> Sacred Host, Greatest aid to holiness, </li>
              <li> <b> Have mercy on us. </b></li>
              <li> Sacred Host, Gift and glory of the priesthood,</li>
              <li> <b> Have mercy on us. </b></li>
              <li> Sacred Host, In which we partake of Christ, </li>
              <li> <b> Have mercy on us. </b></li>
              <li> Sacred Host, Filling a soul with grace,</li>
              <li> <b> Have mercy on us. </b></li>
              <li> Sacred Host, Pledge of our future glory,</li>
              <li> <b> Have mercy on us. </b></li>

              <br></br>

              <li><b> Blessed Be Jesus in the Most Holy Sacrament of the Altar (3x)</b></li>

              <br></br>

              <li> For those who do not believe in the Real Presence, are indifferent, unworthily receive, 
                or have offended you in the Holy Sacrament of the Altar, </li>
              <li><b>Have Mercy on us.</b></li>

              <br></br>

              <li> Lamb of God, who takes away the sins of the world,</li>
              <li><b>Spare us, O Lord.</b></li>
              <li> Lamb of God, who takes away the sins of the world,</li>
              <li><b>Graciously hear us, O Lord.</b></li>
              <li> Lamb of God, who takes away the sins of the world,</li>
              <li><b>Have mercy on us, O Lord.</b></li>

              <br></br>
              <li><b>O Sacrament Most Holy, O Sacrament Divine, all praise and all thanksgiving
                be every moment Thine.</b>
              </li>
              <br></br>

            <li> Let Us Pray</li>

              <li> <b> Through Christ we pray. Merciful Father, draw us closer through
                the Eucharist. Instill in us a deep faith in the Sacrament of Love, where Christ is present
                and worthily received. Amen.
                </b></li>
              </ul>


            </div>
         )}
       </div>
     
         {/* Litany of Trust */}
         <h2 onClick={() => togglePrayerVisibility(4)} style={{ cursor: 'pointer', color: "#187ae2" }}>
           Litany of Trust
         </h2>
         <div className='litany'>
 
         {expandedIndex === 4 && (
           <div className='litany-prayer'>
            <ul>
          <li>From the belief that I have to earn Your love, </li>
          <li> <b> Deliver me, Jesus</b></li>
          <li> From the fear that I am unlovable, </li>
          <li> <b> Deliver me, Jesus</b></li>
          <li> From the false security that I have what it takes, </li>
          <li> <b> Deliver me, Jesus</b></li>
          <li> From the fear that trusting You will leave me more destitute,</li>
          <li> <b> Deliver me, Jesus</b></li> 
          <li> From all suspicion of Your words and promises,</li>
          <li> <b> Deliver me, Jesus</b></li>
          <li> From the rebellion against childlike depency on You,</li>
          <li> <b> Deliver me, Jesus</b></li>
          <li> From refusals and reluctances in accepting Your will,</li>
          <li> <b> Deliver me, Jesus</b></li>
          <li> From anxiety about the future, </li>
          <li> <b> Deliver me, Jesus</b></li>
          <li> From resentment or excessive preoccupation with the past,</li>
          <li> <b> Deliver me, Jesus</b></li>
          <li> From disbelief in Your love and presense </li> 
          <li> <b> Deliver me, Jesus</b></li>
          <li> From the fear of being asked to give more than I have, </li>
          <li> <b> Deliver me, Jesus</b></li>
          <li> From the belief that my life has no meaning or worth,</li>
          <li> <b> Deliver me, Jesus</b></li>
          <li> From the fear of what love demands</li>
          <li> <b> Deliver me, Jesus</b></li>
          <li>From discouragement,</li>
          <li> <b> Deliver me, Jesus</b></li>
          <br></br>
          <li> That you are continually holding me, sustaining me, loving me </li>
          <li> <b> Jesus, I trust in You.</b></li>
          <li> That your love goes deeper than my sins and failings and transforms me.</li> 
          <li> <b> Jesus, I trust in You.</b></li>
          <li> That not knowing what tomorrow brings is an invitation to lean on You,</li>
          <li> <b> Jesus, I trust in You.</b></li>
          <li> That You are with me in my suffering,</li>
          <li> <b> Jesus, I trust in You.</b></li>
          <li> That my suffering, united to Your own, will bear fruit in this life and the next, </li>
          <li> <b> Jesus, I trust in You.</b></li>
          <li> That You will not leave me orphan, that You are present in Your church,</li>
          <li> <b> Jesus, I trust in You.</b></li>
          <li> That Your plan is better than anything else,</li>
          <li> <b> Jesus, I trust in You.</b></li>
          <li> That You always hear me and in Your goodness always respond to me,</li>
          <li> <b> Jesus, I trust in You.</b></li>
          <li> That You give me the grace to accept forgiveness and to forgive others,</li>
          <li> <b> Jesus, I trust in You.</b></li>
          <li> That You give me all the strength I need for what is asked,</li>
          <li> <b> Jesus, I trust in You.</b></li>
          <li>That my life is a gift, </li>
          <li> <b> Jesus, I trust in You.</b></li>
          <li> That You will teach me to trust You,</li>
          <li> <b> Jesus, I trust in You.</b></li>
          <li>That You are my Lord and my God,</li>
          <li> <b> Jesus, I trust in You.</b></li>
          <li> That I am your beloved one,</li>
          <li> <b> Jesus, I trust in You.</b></li>

            </ul>
       )
         ;
          

           </div>
         )}
         
       </div>

       <h2 onClick={() => togglePrayerVisibility(5)} style={{ cursor: 'pointer',  color: "#187ae2"}}>
    Litany of Let Love 
         </h2>
       <div className='litany'>

      {expandedIndex === 5 && (
           <div className='litany-prayer'>
             <ul>
            <li><i>Father, good and ever-faithful, Jesus, Savior ever-merciful.
            Holy Spirit, well-spring of true life and love.
            I give You permission.
            Reign in my heart, mind, soul, and life.
            Let Your Love come into my past, present and future.
            Let Your Love unfold in me </i> </li>
            <br></br>
            <li>That I Let Love reveal who I am,</li>
            <li><b>God, in Whose Image I’ve been made, Father me.</b></li>
            <li>That I Let Love define me,</li>
            <li><b>God, in Whose Likeness I’ve been formed, shape me.</b></li>
            <li>That I Let Love with courage and hope,</li>
            <li><b>God, to Whose glory I’ve been called, be my strength.</b></li>
            <li>That I Let Love forgive me,</li>
            <li><b>Save me Lord Jesus.</b></li>
            <li>That I Let Love love me to the depths of my being,</li>
            <li><b>Save me Lord Jesus.</b></li>
            <li>That I Let Love heal and glorify my wounds,</li>
            <li><b>Save me Lord Jesus.</b></li>
            <li>That I Let Love free me from sin,</li>
            <li><b>Save me Lord Jesus.</b></li>
            <li>That I Let Love liberate me from all my fears,</li>
            <li><b>Save me Lord Jesus.</b></li>
            <li>That I Let Love reconcile me to wholeness and peace,</li>
            <li><b>Save me Lord Jesus.</b></li>
            <br></br>
            <li>That I Let Love awaken me,</li>
            <li><b>Come Holy Spirit.</b></li>
            <li>That I Let Love lead me in every moment,</li>
            <li><b>Come Holy Spirit.</b></li>
            <li>That I Let Love challenge me to live in and for love,</li>
            <li><b>Come Holy Spirit.</b></li>
            <li>That I Let Love grow my mind, heart, and soul,</li>
            <li><b>Come Holy Spirit.</b></li>
            <li>That I Let Love draw me to live in the truth,</li>
            <li><b>Come Holy Spirit.</b></li>
            <li>That I Let Love transform me into the life of Christ,</li>
            <li><b>Come Holy Spirit.</b></li>
            <li>That I Let Love fill me to overflowing,</li>
            <li><b>Come Holy Spirit.</b></li>
            <li>That I Let Love captivate my heart,</li>
            <li><b>Come Holy Spirit.</b></li>
            <li>That I Let Love live in me,</li>
            <li><b>Come Holy Spirit.</b></li>
            <li>That I Let Love inspire me,</li>
            <li><b>Come Holy Spirit.</b></li>
            <br></br>
            <li>That I Let Love cherish me</li>
            <li><b>Father, hold me in Your Heart.</b></li>
            <li>That I Let Love receive me,</li>
            <li><b>Jesus, keep me in your wounds</b></li>
            <li>That I Let Love be my rock and security,</li>
            <li><b>Spirit, keep me in your peace.</b></li>
            <br></br>
            <li>That I Let Love ask from me,</li>
            <li><b>Let Your will be done Father.</b></li>
            <li>That I Let Love in,</li>
            <li><b>Let Your will be done Father.</b></li>
            <li>That I Let Love live in me,</li>
            <li><b>Let Your will be done Father.</b></li>
            <li>That I Let Love go,</li>
            <li><b>Let Your Will be done Father.</b></li>
            <li>That I Let Love give,</li>
            <li><b>Let Your Will be done Father.</b></li>
            <li>That I Let Love speak,</li>
            <li><b>Let Your Will be done Father.</b></li>
            <li>That I Let Love call my name,</li>
            <li><b>Let Your Will be done Father.</b></li>
            <br></br>
            <li>That I Let Love bring me somewhere new,</li>
            <li><b>Blessed Trinity, reign over my life.</b></li>
            <li>That I Let Love be the adventure,</li>
            <li><b>Blessed Trinity, reign over my life.</b></li>
            <li>That I Let Love write the score,</li>
            <li><b>Blessed Trinity, reign over my life.</b></li>
            <li>That I Let Love win the victory,</li>
            <li><b>Blessed Trinity, reign over my life.</b></li>
            <li>That I Let Love be the answer,</li>
            <li><b>Blessed Trinity, reign over my life.</b></li>
            <li>Amen.</li>
            <br></br>
            <br></br>

            <li><i> Sisters of Life, Written by: Sr. Mariae Agnus Dei, Suffern NY</i></li>

             </ul>
             </div>
      )}
  </div>
  
        
  <h2 onClick={() => togglePrayerVisibility(6)} style={{ cursor: 'pointer', color: "#187ae2" }}>
  Litany of Hope, Seeking the Intercession of Saints in Times of Struggle
         </h2>
  <div className='litany'>

      {expandedIndex === 6 && (
           <div className='litany-prayer'>
             <ul>
            <li>Holy Mary, Mother of Hope,</li>
            <li><b>Pray for us.</b></li>
            <li>St. Joseph, steadfast in faith and trust in God’s promises,</li>
            <li><b>Pray for us.</b></li>
            <li>St. Augustine, who found hope after years of searching,</li>
            <li><b>Pray for us.</b></li>
            <li>St. Monica, who never gave up hope for her son,</li>
            <li><b>Pray for us.</b></li>
            <li>St. Maximilian Kolbe, who held onto hope in the face of death,</li>
            <li><b>Pray for us.</b></li>
            <li>St. John of the Cross, who found hope in the darkest nights, </li>
            <li><b>Pray for us.</b></li>
            <li>St. Therese of Lisieux, who trusted in the hope of God’s love,</li>
            <li><b>Pray for us.</b></li>
            <li>St. Joan of Arc, who maintained hope despite persecution,</li>
            <li><b>Pray for us.</b></li>
            <li>St. Josephine Bakhita, who embraced hope after enduring slavery,</li>
            <li><b>Pray for us.</b></li>
            <li>St. Padre Pio, who remained hopeful in suffering,</li>
            <li><b>Pray for us.</b></li>
            <li>St. Elizabeth Ann Seton, who found hope in times of loss and adversity,</li>
            <li><b>Pray for us.</b></li>
            <li>St. Oscar Romero, who courageously hoped for justice and peace,</li>
            <li><b>Pray for us.</b></li>
            <li>St. Kateri Tekakwitha, who kept hope alive amid persecution,</li>
            <li><b>Pray for us.</b></li>
            <li>St. Mother Teresa, who brought hope for the poorest of the poor,</li>
            <li><b>Pray for us.</b></li>
            <li>St. Francis of Assisi, who trusted in the hope of rebuilding God’s Church,</li>
            <li><b>Pray for us.</b></li>
            <li>Blessed Solanus Casey, who urged others to “thank God ahead of time” in hope,</li>
            <li><b>Pray for us.</b></li>
            <br></br>

            <li>In times of doubt and discouragement,</li>
            <li><b>Lord, fill us with hope.</b></li>
            <li>In times of illness and suffering, </li>
            <li><b>Lord, fill us with hope.</b></li>
            <li>When we face financial difficulties and uncertainty, </li>
            <li><b>Lord, fill us with hope.</b></li>
            <li>When we are overwhelmed by anxiety and fear, </li>
            <li><b>Lord, fill us with hope.</b></li>
            <li>When our loved ones are far from faith, </li>
            <li><b>Lord, fill us with hope.</b></li>
            <li>When we are burdened by loneliness or rejection, </li>
            <li><b>Lord, fill us with hope.</b></li>
            <li>When we encounter injustice or persecution, </li>
            <li><b>Lord, fill us with hope.</b></li>
            <li>When we grieve the loss of loved ones, </li>
            <li><b>Lord, fill us with hope.</b></li>
            <li>When our faith is tested in trials and temptations, </li>
            <li><b>Lord, fill us with hope.</b></li>
            <li>In moments when it seems all hope is lost, </li>
            <li><b>Lord, fill us with hope.</b></li>

             </ul>


             </div>
      )}
  </div>
  {/* paste here - two </divs> in between each litany */}
        </div>
        </>
        )}

         {/* Command Slash to uncomment */}
  {/* 
  <h2 onClick={() => togglePrayerVisibility(6)} style={{ cursor: 'pointer', color: "#187ae2" }}>
         Letany Template
         </h2>
  <div className='litany'>

      {expandedIndex === 6 && (
           <div className='litany-prayer'>
             <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>

             </ul>


             </div>
      )}
  </div> */}




export default Litanies;



// Litany of The Blessed Virgin Mary
// https://www.ourcatholicprayers.com/litany-of-the-blessed-virgin-mary.html


//Litany of Humility 
// https://www.ewtn.com/catholicism/devotions/litany-of-humility-245
// More on this litany
// https://www.ourcatholicprayers.com/litany-of-humility.html

//To have Charity is to love God above all things for Himself and be ready to renounce all created things rather than offend Him by serious sin. ( Matt. 22:36-40)




// corpuschristiforunityandpeace.org last time link did not work for me. might need to look
//up can add to resource page for the Litany of Eucharist

// https://sistersoflife.org/wp-content/uploads/2019/07/Mobile-Litany-of-Trust.pdf (credit for litany of trust)