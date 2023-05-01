import {defineStore} from 'pinia';
import {toplists} from '../api/top'

export const useTop = defineStore('useTop',{
    state:()=>{
        return({
            data:{},
            index:0,
            all:{},
            indexs:0,
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
        },
        getnumber(){

            return Math.ceil(((this.all?.tracks?.length)?(this.all?.tracks?.length):20)/20)
        }
    }
})