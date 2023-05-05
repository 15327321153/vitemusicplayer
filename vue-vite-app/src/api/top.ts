import request from "../utils/request";
//榜单
export const toplist = () => {
    return request.get(`/toplist/detail`)
}
//榜单详情
export const toplists = (id:number) => {
    return request.get(`/playlist/detail?id=${id}`)
}
