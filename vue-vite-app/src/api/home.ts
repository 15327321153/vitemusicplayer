import request from "../utils/request";


//banner
export const banner = () => {
    return request.get('/banner')
}
//热歌列表
export const playlist = () => {
    return request.get('/playlist/hot')
}
//推荐列表
export const hotplaylist = (limit = 6, order = 'hot', cat = '', offset = 0) => {
    return request.get(`/top/playlist?limit=${limit}&order=${order}&cat=${cat}&offset=${offset}`)
}
//新碟上架
export const newlist = ( area = 'all' ) => {
    return request.get(`/top/album?limit=20&offset=0&area=${area}`)
}
//榜单
export const topall = ( ) => {
    return request.get(`/toplist`)
}
//歌单
export const detail = ( id:number ) => {
    return request.get(`/playlist/track/all?id=${id}&limit=10&offset=1`)
}