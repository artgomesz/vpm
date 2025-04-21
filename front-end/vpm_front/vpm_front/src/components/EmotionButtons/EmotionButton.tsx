import React, { useState } from 'react';
import  getAlbumByEmotion  from '../../service/api';
import './emotionButton.css'

const emotions = ['Happy', 'sad', 'chill', 'angry', 'nostalgic','thoughtful'];

export function EmotionButtons() {
  const [album, setAlbum] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async (emotion: string) => {
    try {
      setLoading(true);
      setError(null);
      const result = await getAlbumByEmotion(emotion);
      setAlbum(result);
    } catch (err) {
      setError('try again,an internal error hapenned.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div >

        <div className='button-container'>
          <div className='button'>
        {emotions.map((emotion) => (
          <button key={emotion} onClick={() => handleClick(emotion)}>
            {emotion.charAt(0).toUpperCase() + emotion.slice(1)}
          </button>
        ))}
        </div>
      </div>

      <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      </div>

      {album && (
        <div className='album-container'>
          <h3>Recomended album:</h3>
          <p><strong>Name:</strong> {album.name}</p>
          <img src={album.images?.[0]?.url} alt="Capa do álbum" width="400" />
        </div>
      )}
    </div>
  );
}