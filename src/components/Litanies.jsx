import React, { useState } from 'react';
import './Litanies.css';
import { useNavigate } from 'react-router-dom';
import Switch from "react-switch";

const Litanies = () => {
  const [isPageOne, setIsPageOne] = useState(false);
        const navigate = useNavigate();
  
        const handleToggle = () => {
          setIsPageOne(!isPageOne);
          if (!isPageOne) {
            navigate('/Spanish-Litany'); // Navigate to /page-one when switching from page two
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
      right:"40px", 
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
              <li>God, the Father of heaven,</li> 
                <li> <b>have mercy on us. </b></li>
              <li>God, the Son, Redeemer of the world,</li>
              <li> <b>have mercy on us. </b></li>
              <li>God, the Holy Ghost,</li>
              <li> <b>have mercy on us. </b></li>
              <li>Holy Trinity, One God,</li>
              <li> <b>have mercy on us. </b></li>
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
        <li>Lamb of God, who takest away the sins of the world, </li>
          <li> <b>Spare us, O Lord. </b></li>
        <li>Lamb of God, who takest away the sins of the world, </li>
        <li> <b>Graciously hear us O Lord. </b></li>
        <li>Lamb of God, who takest away the sins of the world, </li>
          <li> <b>Have mercy on us. </b></li>
        <li>V. Pray for us, O holy Mother of God.</li>
        <li><b> R. That we may be made worthy of the promises of Christ.</b> </li>

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
              <li> <b> hear me. </b></li>
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
              <li> <b> have mercy on us.</b></li>
              <li> God the Son, Redeemer of the world, </li>
              <li> <b> have mercy on us.</b></li>
              <li> God the Holy Spirit,</li>
              <li> <b> have mercy on us.</b></li>
              <li> Holy Trinity, one God, </li>
              <li> <b> have mercy on us.</b></li>
              <li> Heart of Jesus, Son of the eternal Father, </li>
              <li> <b> have mercy on us.</b></li>
              <li> Heart of Jesus, formed by the Holy Spirit in the womb of the Virgin Mother,</li>
              <li> <b> have mercy on us.</b></li>
              <li> Heart of Jesus, one with the eternal Word, </li>
              <li> <b> have mercy on us.</b></li>
              <li> Heart of Jesus, infinite in majesty, </li>
              <li> <b> have mercy on us.</b></li>
              <li> Heart of Jesus, holy temple of God, </li>
              <li> <b> have mercy on us.</b></li>
              <li> Heart of Jesus, tabernacle of the Most High,</li>
              <li> <b> have mercy on us.</b></li>
              <li> Heart of Jesus, house of God and gate of heaven,</li>
              <li> <b> have mercy on us.</b></li>
              <li>Heart of Jesus, aflame with love for us, </li>
              <li> <b> have mercy on us.</b></li>
              <li>Heart of Jesus, source of justice and love,</li>
              <li> <b> have mercy on us.</b></li>
              <li>Heart of Jesus, full of goodness and love,</li>
              <li> <b> have mercy on us.</b></li>
              <li>Heart of Jesus, well-spring of all virtue,</li>
              <li> <b> have mercy on us.</b></li>
              <li>Heart of Jesus, worthy of all praise,</li>
              <li> <b> have mercy on us.</b></li>
              <li>Heart of Jesus, king and center of all hearts,</li>
              <li> <b> have mercy on us.</b></li>
              <li>Heart of Jesus, treasure-house of wisdom and knowledge,</li>
              <li> <b> have mercy on us.</b></li>
              <li>Heart of Jesus, in whom there dwells the fullness of God,</li>
              <li> <b> have mercy on us.</b></li>
              <li>Heart of Jesus, in whom the Father is well pleased,</li>
              <li> <b> have mercy on us.</b></li>
              <li>Heart of Jesus, from whose fullness we have all received,</li>
              <li> <b> have mercy on us.</b></li>
              <li>Heart of Jesus, desire of the eternal hills,</li>
              <li> <b> have mercy on us.</b></li>
              <li>Heart of Jesus, patient and full of mercy,</li>
              <li> <b> have mercy on us.</b></li>
              <li>Heart of Jesus, generous to all who turn to you,</li>
              <li> <b> have mercy on us.</b></li>
              <li>Heart of Jesus, fountain of life and holiness,</li>
              <li> <b> have mercy on us.</b></li>
              <li>Heart of Jesus, atonement for our sins,</li>
              <li> <b> have mercy on us.</b></li>
              <li>Heart of Jesus, overwhelmed with insults,</li>
              <li> <b> have mercy on us.</b></li>
              <li>Heart of Jesus, broken for our sins,</li>
              <li> <b> have mercy on us.</b></li>
              <li>Heart of Jesus, obedient even to death,</li>
              <li> <b> have mercy on us.</b></li>
              <li>Heart of Jesus, pierced by a lance,</li>
              <li> <b> have mercy on us.</b></li>
              <li>Heart of Jesus, source of all consolation,</li>
              <li> <b> have mercy on us.</b></li>
              <li>Heart of Jesus, our life and resurrection,</li>
              <li> <b> have mercy on us.</b></li>
              <li>Heart of Jesus, our peace and reconciliation,</li>
              <li> <b> have mercy on us.</b></li>
              <li>Heart of Jesus, victim of our sins,</li>
              <li> <b> have mercy on us.</b></li>
              <li>Heart of Jesus, salvation of all who trust in you,</li>
              <li> <b> have mercy on us.</b></li>
              <li>Heart of Jesus, hope of all who die in you,</li>
              <li> <b> have mercy on us.</b></li>
              <li>Heart of Jesus, delight of all the saints,</li>
              <li> <b> have mercy on us.</b></li>
              <li>Lamb of God, you take away the sins of the world,</li>
              <li> <b> have mercy on us.</b></li>
              <li> Lamb of God, you take away the sins of the world,</li>
              <li> <b> have mercy on us.</b></li>
              <li> Lamb of God, you take away the sins of the world,</li>
              <li> <b> have mercy on us.</b></li>
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
         {/* Litany of Healing and Renewal */}
         <h2 onClick={() => togglePrayerVisibility(3)} style={{ cursor: 'pointer', color: "#187ae2" }}>
           Litany of Healing and Renewal
         </h2>
         <div className='litany'>
 
         {expandedIndex === 3 && (
           <div className='litany-prayer'>
             <ul>
               <li>For those who have been abused: that they may experience
healing from shame, isolation, anger, and despair; that they may be
listened to with compassion, treated with dignity, and supported in
the healing process. We pray, Have mercy on us, Lord.</li>
<li><b>Have mercy on us, Lord.</b></li>
             <li> For those who counsel victims: That their words of wisdom
and compassion may be instruments of healing for those they
accompany. We pray,</li>
<li><b> Have mercy on us, Lord.</b></li>
<li> For the perpetrators of abuse: That they may experience sincere
remorse for their crimes, approach God with sorrow, and be prepared
to make reparation for the damage they have caused. We pray,</li>
<li><b> Have mercy on us, Lord.</b></li>
<li> For those who failed to protect children, those who, in any way,
betrayed the trust placed in them: May they humbly acknowledge
their responsibility for harm done to children. We pray,</li>
<li><b> Have mercy on us, Lord.</b></li>
<li> For the faithful who are angry, scandalized, discouraged: That they
may come to recognize the real presence of Christ in His Church
despite the tragic failures of Church members and leaders. We pray,</li>
<li><b> Have mercy on us, Lord.</b></li>
<li> For all the faithful: That our response to this dark episode will
result in even stronger faith that Christ will rebuild His Church and
not allow evil to prevail; may we grow in our conviction that where
sin abounds, grace abounds all the more; and may we renew our
commitment to participate in the sacraments, learn the faith, join our
parish communities, and serve the poor and marginalized. We pray, </li>
<li><b> Have mercy on us, Lord.</b></li>
<li>For our priests: that they may be protected from discouragement
and that they may experience a renewal of authentic priestly
identity, intimate union with Christ, joyful zeal for souls, liberating
chastity, and humble charity. We pray, </li>
<li><b> Have mercy on us, Lord.</b></li>
<li>For young people discerning a religious vocation to priesthood
or consecrated life: That the tragic failures of some may not blind
them to the heroic virtue of many. We pray, </li>
<li><b> Have mercy on us, Lord.</b></li>
<li>For our bishops: That they may take initiatives which: protect the flock
entrusted to their care, restore trust, are transparent and free of self-
interest, and unite the flock with the Heart of the Shepherd. We pray,</li>
<li><b> Have mercy on us, Lord.</b></li>
<li>For non-Catholics who may be tempted to disparage Catholics,
the Catholic faith, and the Catholic Church because of these
scandals: May they be blessed to encounter the witness of faithful
Catholics. We pray,</li>
<li><b> Have mercy on us, Lord.</b></li>
<li> For law enforcement officials, legislators and judges: That
they may carefully weigh all aspects of the scourge of child
abuse in our society as they pursue justice. We pray,</li>
<li><b> Have mercy on us, Lord.</b></li>
<li> For all professionals in the news media and communications:
That they may adhere to the highest ethical standards, seeking
the truth as they bring to light the extent of this scandal and
the ways the Church is responding. We pray,</li>
<li><b> Have mercy on us, Lord.</b></li>
<li> For all who work with children, especially teachers, coaches,
and youth ministers: That they might experience a renewed
commitment to their treasured service, and find ways to
protect and enhance the dignity of each child. We pray,</li>
<li><b> Have mercy on us, Lord.</b></li>
<li>For all parents: that they may foster family life rooted in
love, prayer, faith, and mercy; homes filled with joy and
consecrated to God which form children in virtue and mature
faith. We pray, </li>
<li><b> Have mercy on us, Lord.</b></li>
<li> For all children: That they may be loved by their family,
protected in home and school, and learn about the goodness
of God so that they can develop a personal relationship with
Jesus. We pray,</li>
<li><b> Have mercy on us, Lord.</b></li>
</ul>
           </div>
         )}
       </div>
        </div>
        </>
   );
 };

export default Litanies;



// Litany of The Blessed Virgin Mary
// https://www.ourcatholicprayers.com/litany-of-the-blessed-virgin-mary.html


//Litany of Humility 
// https://www.ewtn.com/catholicism/devotions/litany-of-humility-245
// More on this litany
// https://www.ourcatholicprayers.com/litany-of-humility.html

//To have Charity is to love God above all things for Himself and be ready to renounce all created things rather than offend Him by serious sin. ( Matt. 22:36-40)


//Litany of Healing and Renewal