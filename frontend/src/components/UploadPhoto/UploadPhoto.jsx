
import React, { useRef, useState } from 'react';
import styles from './UploadPhoto.module.css';
import UploadBox from '../UploadBox/UploadBox';

function UploadPhoto({ imageSrc = '', onChange, defaultImage }) {
  const [imageUrl, setImageUrl] = useState(imageSrc || defaultImage || '');
  const [showUploadBox, setShowUploadBox] = useState(false)

  const handlerImageChange = (url) => {
    setImageUrl(url);
  };

  const viewUploadBox = () => {
    setShowUploadBox(!showUploadBox)
  }


  return (
    <div className={styles.UploadPhoto}>
      <span className={styles.PhotoWrapper}>
        <img className={styles.Photo} src={imageUrl} alt='uploadImage' />
      </span>
      <div style={{ backgroundColor: 'red' }}>
        <button className={styles.Button} onClick={() => viewUploadBox()}></button>
        <UploadBox viewUpload={showUploadBox} onChangeImage={handlerImageChange} onChangeBox={setShowUploadBox} />
      </div>
    </div>
  );
};



export default UploadPhoto;
