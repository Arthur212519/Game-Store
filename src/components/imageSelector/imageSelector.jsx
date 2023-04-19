import React, { useState } from 'react';
import { data } from '../../data';
import "./imageSelector.css"
import { useParams } from 'react-router-dom';

const ImageSelector = () => {
  const { id } = useParams()
  const images = data[id - 1].screenShots
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="image-selector">
      <div className="image-selector-preview">
        <img src={selectedImage} alt="Selected Image" />
      </div>
      <div className="image-selector-thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={selectedImage === image ? 'selected' : ''}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
    </div>
  );
};

export { ImageSelector };
