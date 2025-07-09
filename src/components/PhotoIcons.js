import React from 'react';
import './PhotoIcons.css';

// Импорты изображений
import about1 from './about1.jpg';
import about2 from './about2.jpg';

const PhotoIcons = ({ onDianaGuruClick }) => {
  const photos = [
    {
      id: 1,
      src: about1,
      alt: 'Йога фото 1'
    },
    {
      id: 2,
      src: about2,
      alt: 'Йога фото 2'
    }
  ];

  const handlePhotoClick = (photoId) => {
    if (photoId === 1 && onDianaGuruClick) {
      // Переход к странице Дианы Гуру для первой фотографии
      onDianaGuruClick();
    } else {
      console.log(`Открываем фото ${photoId}`);
      // Здесь можно добавить логику для открытия второй фотографии
    }
  };

  return (
    <div className="photo-icons-container">
      {photos.map(photo => (
        <div 
          key={photo.id} 
          className="photo-icon-square"
          onClick={() => handlePhotoClick(photo.id)}
        >
          <div className="photo-image-container">
            <img 
              src={photo.src} 
              alt={photo.alt} 
              className="photo-image-square"
            />
          </div>
          <div className="photo-text-container">
            <span className="photo-text">ОТКРЫТЬ</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoIcons; 