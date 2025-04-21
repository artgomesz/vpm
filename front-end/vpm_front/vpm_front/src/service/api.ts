export default async function getAlbumByEmotion(emotion: string) {
    const response = await fetch(`http://localhost:8080/spotify/artist?emotion=${emotion}`);
    if (!response.ok) throw new Error('Erro ao buscar álbum');
    return await response.json();
  }