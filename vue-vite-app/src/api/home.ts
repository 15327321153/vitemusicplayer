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
//MV
export const mvfirst = ( area:string,limit=12 ) => {
    return request.get(`/mv/first?limit=${limit}&area=${area}`)
}
//电台
export const djhot = () => {
    return request.get(`/dj/hot`)
}
//热门歌手
export const geshou = () => {
    return request.get(`/top/artists?offset=0&limit=48`)
}