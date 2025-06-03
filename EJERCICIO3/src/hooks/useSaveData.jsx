// hooks/useSaveData.js
export const useSaveData = () => {
    const saveData = async (movie) => {
      try {
        const response = await fetch('https://retoolapi.dev/vmJ8AL/peliculas', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(movie),
        });
  
        const result = await response.json();
        return { success: true, data: result };
      } catch (error) {
        console.error('Error saving data', error);
        return { success: false };
      }
    };
  
    return saveData;
  };
  