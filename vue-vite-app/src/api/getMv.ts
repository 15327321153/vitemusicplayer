import request from "../utils/request";



//mv详情信息
export const getmvvideo = (mvid:number) => {
    return request.get(`/mv/detail?mvid=${mvid}`)
}
//mv播放地址
export const getmvurl = (id:string) => {
    return request.get(`/mv/url?id=${id}`)
}