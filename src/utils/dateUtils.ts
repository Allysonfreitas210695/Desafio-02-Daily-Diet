export const getFormattedDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Janeiro é 0
    const year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
  };
  
  export const getFormattedTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
  
    return `${hours}:${minutes}`;
  };
  