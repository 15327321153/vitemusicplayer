import { defineStore } from 'pinia';
import { toplists } from '../api/top'
import { mp3 } from '../api/song';

export const useTop = defineStore('useTop', {
    state: () => {
        return ({
            data: {},
            index: 0,
            all: {},
            indexs: 0,
            mp3: new Audio(),
            songitem: {},
            sope: true,
            jinyin: {
                type: true,
                value: 0,
            },
            shengying: 100,
            time:0,
            maxtime:100
        })
    },
    actions: {
        changeStateeTop(data, index) {
            this.data = data
            this.index = index
            toplists(data.id).then(res => {
                this.all = res.playlist
            })
            console.log("???", this.all)
        },
        getlist() {
            return this.all.tracks?.slice(this.indexs * 20, (this.indexs + 1) * 20)
        },
        getnumber() {

            return Math.ceil(((this.all?.tracks?.length) ? (this.all?.tracks?.length) : 20) / 20)
        },
        getindexs(type: string, value?: number) {
            if (type === 'get') {
                return this.indexs
            } else if (type === 'set') {
                this.indexs = value
            } else if (type === 'add') {
                this.indexs++
            } else if (type === 'reduce') {
                this.indexs--
            }
        },
        getpaly(item) {
            mp3(item.id).then(res => {
                console.log(res)
                this.mp3 = new Audio(res.data[0].url)
                this.maxtime = res.data[0].time

                this.songitem = item

                this.bofang()
            })

        },
        getmp3() {
            return {
                mp3: this.mp3,
                songitem: this.songitem
            }
        },
        bofang() {
            if (this.sope) {
                this.mp3.play();
            } else {
                this.mp3.pause();
            }
            this.sope = !this.sope

            this.settime()
        },
        jinying() {
            if (this.jinyin.type) {
                this.jinyin.value = this.shengying;
                this.shengying = 0;

            } else {
                this.shengying = this.jinyin.value;
            }
            this.jinyin.type = !this.jinyin.type;
            this.changeshengying()
        },
        getjy(type: string) {
            if (type === 'value') {
                return this.jinyin.value
            } else if (type === 'type') {
                return this.jinyin.type
            } else if (type === 'shengying') {
                return this.shengying
            }
        },
        changeshengying(){
            this.mp3.volume = this.shengying/100
          },
        settime(){
            setTimeout(() => {
              this.time = this.time + 500;
              if (this.time < this.maxtime && !this.sope) {
                this.settime();
              }
            }, 500);
          },
          changslider(){

            this.mp3.currentTime = this.time/1000;
            this.bofang()
          }
    }
})