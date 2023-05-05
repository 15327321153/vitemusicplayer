import {defineStore} from 'pinia';
import {toplists} from '../api/top'
import { mp3 } from '../api/song';

export const useTop = defineStore('useTop',{
    state:()=>{
        return({
            data:{},
            index:0,
            all:{},
            indexs:0,
            mp3:new Audio(),
            songitem:{},
            sope: true,
        })
    },
    actions:{
        changeStateeTop(data,index){
            this.data = data 
            this.index = index
            toplists(data.id).then(res =>{
                this.all = res.playlist
            })
            console.log("???",this.all)
        },
        getlist(){
            return this.all.tracks?.slice(this.indexs*20,(this.indexs+1)*20)
        },
        getnumber(){

            return Math.ceil(((this.all?.tracks?.length)?(this.all?.tracks?.length):20)/20)
        },
        getindexs(type:string,value?:number){
            if(type==='get'){
                return this.indexs
            }else if(type==='set'){
                this.indexs = value
            }else if(type==='add'){
                this.indexs++
            }else if(type==='reduce'){
                this.indexs--
            }
        },
         getpaly(item){
             mp3(item.id).then(res=>{
                console.log(res)
                this.mp3 =  new Audio(res.data[0].url)
                this.songitem = item
                this.bofang()
            })
          
   

        },
        getmp3(){
            return{
                mp3:this.mp3,
                songitem:this.songitem
            }
        },
        bofang(){
            if(this.sope){
                this.mp3.play();
              }else{
                this.mp3.pause();
              }
              this.sope = !this.sope
        }
    }
})