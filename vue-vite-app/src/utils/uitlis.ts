//时间戳转 00：00 (分：秒)
export const formatTime = (timestamp:number) => {
    const date = new Date(timestamp * 1000);
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }



//转为万为单位
export const jisuan = (number)=>{
    if(number>=10000){
        return (number/10000).toFixed(1)+'万'
    }else{
        return number
    }
    }
