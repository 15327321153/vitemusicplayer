//时间戳转 00：00 (分：秒)
export const formatTime = (timestamp:number) => {
    const date = new Date(timestamp * 1000);
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }
  
