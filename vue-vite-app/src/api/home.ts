import request  from "../utils/request";


//banner
export const banner = () =>{
    return request.get('/banner')
}
//热歌列表
export const playlist = () =>{
    return request.get('/playlist/hot')
}
//推荐列表
export const hotplaylist = (limit = 6,order = 'hot',cat = '',offset = 0) =>{
    return request.get(`/top/playlist?limit=${limit}&order=${order}&cat=${cat}&offset=${offset}`)
}
//新歌速递
export const newlist = (type = 0) =>{
    return request.get(`/top/song?type=${type}`)
}