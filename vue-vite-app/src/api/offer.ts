import request from "../utils/request";


//歌单分类
export const catlist = ()=>{
    return request.get(`/playlist/catlist`)
}


export const playlist = ( cat:string,offset:number ) => {
    return request.get(`/top/playlist?limit=30&cat=${cat}&offset=${offset}`)
}

