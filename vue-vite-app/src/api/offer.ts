import request from "../utils/request";


//歌单分类
export const catlist = ()=>{
    return request.get(`/playlist/catlist`)
}