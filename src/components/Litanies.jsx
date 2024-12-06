import React, { useState } from 'react';
import './Litanies.css';

const Litanies = () => {
  // State to manage visibility of prayer sections
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Function to toggle the visibility of the prayer section
  const togglePrayerVisibility = (index) => {
    // Toggle the section: if it's open, close it; if it's closed, open it
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className='litanies-page'>
      <h1>Litanies</h1>

      {/* The Litany of the Blessed Virgin Mary */}
      <div className='litany'>
        <h2 onClick={() => togglePrayerVisibility(0)} style={{ cursor: 'pointer' }}>
          The Litany of the Blessed Virgin Mary
        </h2>

        {expandedIndex === 0 && (
          <div className='litany-prayer'>
            <ul>
              <li>Lord, have mercy on us.</li>
              <li>Christ, have mercy on us.</li>
              <li>Lord, have mercy on us.</li>
              <li>Christ, hear us.</li>
              <li>Christ, graciously hear us.</li>
              <li>God, the Father of heaven, have mercy on us.</li>
              <li>God, the Son, Redeemer of the world, have mercy on us.</li>
              <li>God, the Holy Ghost, have mercy on us.</li>
              <li>Holy Trinity, One God, have mercy on us.</li>
              <li>Holy Mary, pray for us.</li>
              <li>Holy Mother of God, pray for us.</li>
              <li>Holy Mother of God, pray for us. </li>
              <li>Holy Virgin of virgins, pray for us. </li>
              <li>Mother of Christ, pray for us. </li>
              <li>Mother of divine grace, pray for us. </li>
              <li>Mother most pure, pray for us. </li>
              <li>Mother most chaste, pray for us. </li>
              <li>Mother inviolate,pray for us. </li>
              <li>Mother undefiled, pray for us. </li>
              <li>Mother most amiable, pray for us. </li>
              <li>Mother most admirable,pray for us.</li>
              <li>Mother of good counsel, pray for us.</li>
              <li>Mother of our Creator,pray for us. </li>
              <li>Mother of our Savior,pray for us. </li>
              <li>Virgin most prudent, pray for us. </li>
              <li>Virgin most venerable, pray for us. </li>
              <li>Virgin most renowned, pray for us. </li>
              <li>Virgin most powerful, pray for us. </li>
              <li>Virgin most merciful, pray for us.</li>
              <li>Virgin most faithful, pray for us. </li>
              <li>Mirror of justice, pray for us. </li>
              <li>Seat of wisdom, pray for us. </li>
              <li>Cause of our joy, pray for us. </li>
              <li>Spiritual vessel, pray for us. </li>
              <li>Vessel of honor, pray for us. </li>
              <li>Singular vessel of devotion, pray for us. </li>
              <li>Mystical rose, pray for us. </li>
              <li>Tower of David, pray for us.</li>
              <li>Tower of ivory, pray for us. </li>
              <li>House of gold, pray for us. </li>
              <li>Ark of the covenant, pray for us. </li>
              <li>Gate of Heaven, pray for us. </li>
              <li>Morning star, pray for us. </li>
              <li>Health of the sick, pray for us.</li>
              <li>Refuge of sinners, pray for us. </li>
              <li>Comforter of the afflicted, pray for us.</li>
              <li>Help of Christians, pray for us. </li>
              <li>Queen of angels, pray for us.</li>
              <li>Queen of patriarchs,pray for us.</li>
              <li>Queen of prophets, pray for us. </li>
              <li>Queen of apostles, pray for us.</li>
              <li>Queen of martyrs, pray for us. </li>
              <li>Queen of confessors,pray for us. </li>
              <li>Queen of virgins, pray for us. </li>
              <li>Queen of all saints, pray for us. </li>
              <li>Queen conceived without original sin, pray for us. </li>
              <li>Queen assumed into heaven, pray for us. </li>
              <li>Queen of the most holy Rosary, pray for us. </li>
              <li>Queen of peace. pray for us. </li>
        <li>Lamb of God, who takest away the sins of the world, </li>
          <li>Spare us, O Lord. </li>
        <li>Lamb of God, who takest away the sins of the world, </li>
        <li>Graciously hear us O Lord. </li>
        <li>Lamb of God, who takest away the sins of the world, </li>
            <li>Have mercy on us. </li>
        <li>V. Pray for us, O holy Mother of God.</li>
        <li>R. That we may be made worthy of the promises of Christ. </li>

            <li>Let us pray: </li>
      <li>Grant, O Lord God, we beseech Thee, that we Thy servants may rejoice in continual health of mind and body; and, through the glorious intercession of Blessed Mary ever Virgin, may be freed from present sorrow, and enjoy eternal gladness. Through Christ our Lord. Amen. </li>

            </ul>
          </div>
        )}
      </div>

      {/* The Litany of Humility */}
      <div className='litany'>
        <h2 onClick={() => togglePrayerVisibility(1)} style={{ cursor: 'pointer' }}>
          Litany of Humility
        </h2>

        {expandedIndex === 1 && (
          <div className='litany-prayer'>
            <ul>
              <li>O Jesus, meek and humble of heart, hear me.</li>
              <li>From the desire of being esteemed, deliver me, O Jesus.</li>
              <li>From the desire of being loved, deliver me, O Jesus.</li>
              <li>From the desire of being extolled, deliver me, O Jesus.</li>
              <li>From the desire of being honored, deliver me, O Jesus.</li>
              <li>From the desire of being praised, Deliver me, O Jesus. </li>
               <li>From the desire of being preferred to others, Deliver me, O Jesus. </li>
              <li>From the desire of being consulted,Deliver me, O Jesus. </li>
              <li>From the desire of being approved, Deliver me, O Jesus. </li>
              <li>From the fear of being humiliated, Deliver me, O Jesus. </li>
               <li>From the fear of being despised, Deliver me, O Jesus. </li>
             <li>From the fear of suffering rebukes, Deliver me, O Jesus.</li>
            <li>From the fear of being calumniated,Deliver me, O Jesus.</li>
            <li>From the fear of being forgotten, Deliver me, O Jesus.</li>
          <li>From the fear of being ridiculed, Deliver me, O Jesus.</li>
          <li>From the fear of being wronged, Deliver me, O Jesus.</li>
          <li> From the fear of being suspected, Deliver me, O Jesus.</li>
        <li>That others may be loved more than I, Jesus, grant me the grace to desire it.</li>
        <li>That others may be esteemed more than I, Jesus, grant me the grace to desire it.</li>
        <li>That, in the opinion of the world, others may increase and I may decrease, Jesus, grant me the grace to desire it.</li>
        <li>That others may be chosen and I set aside, Jesus, grant me the grace to desire it.</li>
        <li>That others may be praised and I go unnoticed, Jesus, grant me the grace to desire it.</li>
      <li>That others may be preferred to me in everything, Jesus, grant me the grace to desire it.</li>
<li>That others may become holier than I, provided that I may become as holy as I should, Jesus, grant me the grace to desire it.</li>
            </ul>
          </div>
        )}
      </div>
 {/* The Litany of the Sacred Heart of Jesus */}
 <div className='litany'>
        <h2 onClick={() => togglePrayerVisibility(2)} style={{ cursor: 'pointer' }}>
          Litany of the Sacred Heart of Jesus
        </h2>
        {expandedIndex === 2 && (
          <div className='litany-prayer'>
            <ul>
              <li> Lord, have mercy. Lord, have mercy. </li>
              <li> Christ, have mercy. Christ, have mercy. </li>
              <li> Lord, have mercy. Lord, have mercy.</li>
              <li> God our Father in heaven, have mercy on us. </li>
              <li> God the Son, Redeemer of the world, have mercy on us.  </li>
              <li> God the Holy Spirit, have mercy on us.</li>
              <li> Holy Trinity, one God, have mercy on us. </li>
              <li> Heart of Jesus, Son of the eternal Father, have mercy on us. </li>
              <li> Heart of Jesus, formed by the Holy Spirit in the womb of the Virgin Mother, have mercy on us.</li>
              <li> Heart of Jesus, one with the eternal Word, have mercy on us. </li>
              <li> Heart of Jesus, infinite in majesty, have mercy on us. </li>
              <li> Heart of Jesus, holy temple of God, have mercy on us. </li>
              <li> Heart of Jesus, tabernacle of the Most High, have mercy on us. </li>
              <li> Heart of Jesus, house of God and gate of heaven, have mercy on us.</li>
              <li>Heart of Jesus, aflame with love for us, have mercy on us. </li>
              <li>Heart of Jesus, source of justice and love, have mercy on us.</li>
              <li>Heart of Jesus, full of goodness and love, have mercy on us.</li>
              <li>Heart of Jesus, well-spring of all virtue, have mercy on us.</li>
              <li>Heart of Jesus, worthy of all praise, have mercy on us.</li>
              <li>Heart of Jesus, king and center of all hearts, have mercy on us.</li>
              <li>Heart of Jesus, treasure-house of wisdom and knowledge, have mercy on us.</li>
              <li>Heart of Jesus, in whom there dwells the fullness of God, have mercy on us.</li>
              <li>Heart of Jesus, in whom the Father is well pleased, have mercy on us.</li>
              <li>Heart of Jesus, from whose fullness we have all received, have mercy on us.</li>
              <li>Heart of Jesus, desire of the eternal hills, have mercy on us.</li>
              <li>Heart of Jesus, patient and full of mercy, have mercy on us.</li>
              <li>Heart of Jesus, generous to all who turn to you, have mercy on us.</li>
              <li>Heart of Jesus, fountain of life and holiness, have mercy on us.</li>
              <li>Heart of Jesus, atonement for our sins, have mercy on us.</li>
              <li>Heart of Jesus, overwhelmed with insults, have mercy on us.</li>
              <li>Heart of Jesus, broken for our sins, have mercy on us.</li>
              <li>Heart of Jesus, obedient even to death, have mercy on us.</li>
              <li>Heart of Jesus, pierced by a lance, have mercy on us.</li>
              <li>Heart of Jesus, source of all consolation, have mercy on us.</li>
              <li>Heart of Jesus, our life and resurrection, have mercy on us.</li>
              <li>Heart of Jesus, our peace and reconciliation, have mercy on us.</li>
              <li>Heart of Jesus, victim of our sins, have mercy on us.</li>
              <li>Heart of Jesus, salvation of all who trust in you, have mercy on us.</li>
              <li>Heart of Jesus, hope of all who die in you, have mercy on us.</li>
              <li>Heart of Jesus, delight of all the saints have mercy on us.</li>
              <li>Lamb of God, you take away the sins of the world, have mercy on us.</li>
              <li> Lamb of God, you take away the sins of the world, have mercy on us.</li>
              <li> Lamb of God, you take away the sins of the world, have mercy on us.</li>
              <li>Jesus, gentle and humble of heart.</li>
              <li>Touch our hearts and make them like your own.</li>
              <li>Let us pray.</li>
<li>
Grant, we pray, almighty God,
that we, who glory in the Heart of your beloved Son
and recall the wonders of his love for us,
may be made worthy to receive
an overflowing measure of grace
from that fount of heavenly gifts.
Through Christ our Lord.
R/. Amen.</li>
            </ul>
          </div>
        )}
        </div>
         {/* Litany of Healing and Renewal */}
         <div className='litany'>
         <h2 onClick={() => togglePrayerVisibility(3)} style={{ cursor: 'pointer' }}>
           Litany of Healing and Renewal
         </h2>
 
         {expandedIndex === 3 && (
           <div className='litany-prayer'>
             <ul>
               <li>For those who have been abused: that they may experience
healing from shame, isolation, anger, and despair; that they may be
listened to with compassion, treated with dignity, and supported in
the healing process. We pray, Have mercy on us, Lord.</li>
             <li> For those who counsel victims: That their words of wisdom
and compassion may be instruments of healing for those they
accompany. We pray, Have mercy on us, Lord.</li>
<li> For the perpetrators of abuse: That they may experience sincere
remorse for their crimes, approach God with sorrow, and be prepared
to make reparation for the damage they have caused. We pray,
Have mercy on us, Lord.</li>
<li> For those who failed to protect children, those who, in any way,
betrayed the trust placed in them: May they humbly acknowledge
their responsibility for harm done to children. We pray,
Have mercy on us, Lord.</li>
<li> For the faithful who are angry, scandalized, discouraged: That they
may come to recognize the real presence of Christ in His Church
despite the tragic failures of Church members and leaders. We pray,
Have mercy on us, Lord.</li>
<li> For all the faithful: That our response to this dark episode will
result in even stronger faith that Christ will rebuild His Church and
not allow evil to prevail; may we grow in our conviction that where
sin abounds, grace abounds all the more; and may we renew our
commitment to participate in the sacraments, learn the faith, join our
parish communities, and serve the poor and marginalized. We pray,
Have mercy on us, Lord. </li>
<li>For our priests: that they may be protected from discouragement
and that they may experience a renewal of authentic priestly
identity, intimate union with Christ, joyful zeal for souls, liberating
chastity, and humble charity. We pray,
Have mercy on us, Lord. </li>
<li>For young people discerning a religious vocation to priesthood
or consecrated life: That the tragic failures of some may not blind
them to the heroic virtue of many. We pray,
Have mercy on us, Lord. </li>
<li>For our bishops: That they may take initiatives which: protect the flock
entrusted to their care, restore trust, are transparent and free of self-
interest, and unite the flock with the Heart of the Shepherd. We pray,
Have mercy on us, Lord.</li>
<li>For non-Catholics who may be tempted to disparage Catholics,
the Catholic faith, and the Catholic Church because of these
scandals: May they be blessed to encounter the witness of faithful
Catholics. We pray,
Have mercy on us, Lord.</li>
<li> For law enforcement officials, legislators and judges: That
they may carefully weigh all aspects of the scourge of child
abuse in our society as they pursue justice. We pray,
Have mercy on us, Lord. </li>
<li> For all professionals in the news media and communications:
That they may adhere to the highest ethical standards, seeking
the truth as they bring to light the extent of this scandal and
the ways the Church is responding. We pray,
Have mercy on us, Lord.</li>
<li> For all who work with children, especially teachers, coaches,
and youth ministers: That they might experience a renewed
commitment to their treasured service, and find ways to
protect and enhance the dignity of each child. We pray,
Have mercy on us, Lord.</li>
<li>For all parents: that they may foster family life rooted in
love, prayer, faith, and mercy; homes filled with joy and
consecrated to God which form children in virtue and mature
faith. We pray,
Have mercy on us, Lord. </li>
<li> For all children: That they may be loved by their family,
protected in home and school, and learn about the goodness
of God so that they can develop a personal relationship with
Jesus. We pray,
Have mercy on us, Lord.</li>
</ul>
           </div>
         )}
       </div>
     </div>
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