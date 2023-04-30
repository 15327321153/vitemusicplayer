import {defineStore} from 'pinia';
import {toplists} from '../api/top'

export const useTop = defineStore('useTop',{
    state:()=>{
        return({
            data:{},
            index:0,
            all:{}
        })
    },
    actions:{
        changeStateeTop(data,index){
            this.data = data 
            this.index = index
            toplists(data.id).then(res =>{
                this.all = res.playlist
            })
        },
        getlist(number){
            return this.all.tracks?.slice(number*20,(number+1)*20)
        }
    }
})