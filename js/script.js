// Attraverso una chiamata ajax all'API di boolean
// https://flynn.boolean.careers/exercises/api/array/music
// avremo a disposizione una decina di dischi musicali.
// Utilizzando vue, stampiamo a schermo una card per ogni album.
// BONUS: Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.
// BONUS 2: Ordinare i dischi per anno di uscita.


function initVue() {
    new Vue({
        el: '#app',
        data: {
          singers:[],
          //singe:[],


        },
        mounted() {

            axios.get('https://flynn.boolean.careers/exercises/api/array/music',
            {
              params: {

              }
            })
            .then(data => {
                this.singers = data.data.response;
                console.log(this.singers);

              // for (var i = 0; i < this.singers.length; i++) {
              //
              //   const singer = this.singers[i]
              //   //console.log(singer);
              //   this.singe.push(singer)
              //
              // }
              // PUSHO SENZA FOR
              // this.singe.push(data.data.response)
              // console.log(this.singe);

              //PUSHO CON FOR
              //console.log(this.singe);


            })
            .catch(() => console.log('error'));
        }
    });
}
function init() {
    initVue();
}
document.addEventListener('DOMContentLoaded', init);
