import React, { useState } from 'react';
import './MainSections.css'; // Для стилей общего контейнера, если нужны
import Chakra1 from './chakras/chakra1-muladhara.svg';
import Chakra2 from './chakras/chakra2-svadhisthana.svg';
import Chakra3 from './chakras/chakra3-manipura.svg';
import Chakra4 from './chakras/chakra4-anahata.svg';
import Chakra5 from './chakras/chakra5-vishuddha.svg';
import Chakra6 from './chakras/chakra6-ajna.svg';
import Chakra7 from './chakras/chakra7-sahasrara.svg';

function ChakraPage({ onBack }) {
  const [showAjnaVideo, setShowAjnaVideo] = useState(false);

  const handleAjnaClick = () => setShowAjnaVideo(true);
  const handleCloseModal = (e) => {
    if (e.target.className === 'chakra-modal-overlay' || e.target.className === 'chakra-modal-close') {
      setShowAjnaVideo(false);
    }
  };

  return (
    <div className="knowledge-page chakra-page-container">
      <div style={{
        fontFamily: 'Comfortaa, cursive',
        fontWeight: 700,
        fontSize: '0.95rem',
        color: 'var(--text)',
        background: 'rgba(184,116,232,0.07)',
        borderRadius: 12,
        padding: 18,
        boxShadow: '0 1px 4px var(--shadow-color)',
        marginBottom: 12,
        textAlign: 'center',
        lineHeight: 1.6,
        letterSpacing: '0.01em',
        maxWidth: 430,
        margin: '0 auto 20px auto',
      }}>
        Чакры — это энергетические центры в теле, отвечающие за твое физическое и эмоциональное состояние. Когда чакры в балансе, ты чувствуешь гармонию, силу и внутренний покой.
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '18px', marginTop: '24px' }}>
        <img src={Chakra7} alt="Сахасрара" width={56} height={56} />
        <img src={Chakra6} alt="Аджна" width={56} height={56} style={{cursor: 'pointer'}} onClick={handleAjnaClick} />
        <img src={Chakra5} alt="Вишуддха" width={56} height={56} />
        <img src={Chakra4} alt="Анахата" width={56} height={56} />
        <img src={Chakra3} alt="Манипура" width={56} height={56} />
        <img src={Chakra2} alt="Свадхистхана" width={56} height={56} />
        <img src={Chakra1} alt="Муладхара" width={56} height={56} />
      </div>
      {showAjnaVideo && (
        <div className="chakra-modal-overlay" onClick={handleCloseModal} style={{position: 'fixed', top:0, left:0, width:'100vw', height:'100vh', background:'rgba(0,0,0,0.45)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:1000}}>
          <div style={{background:'#fff', borderRadius:16, padding:16, boxShadow:'0 4px 24px rgba(0,0,0,0.18)', position:'relative', maxWidth: '90vw', maxHeight: '80vh'}}>
            <button className="chakra-modal-close" onClick={handleCloseModal} style={{position:'absolute', top:8, right:12, background:'none', border:'none', fontSize:24, cursor:'pointer', color:'#7c5bb3'}}>×</button>
            <video src="/videos/chakra6-ajna.mp4" controls autoPlay style={{maxWidth:'80vw', maxHeight:'60vh', borderRadius:12}} />
          </div>
        </div>
      )}
      <button className="knowledge-back" onClick={onBack} style={{display: 'block', margin: '28px auto 0 auto'}}>← Назад</button>
    </div>
  );
}

export default ChakraPage; 