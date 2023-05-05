
import request from "../utils/request";
//获取MP3
export const mp3 = (id)=>{
    return request.get(`/song/url/v1?id=${id}&level=standard`)
}