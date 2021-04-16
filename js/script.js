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




            })
            .catch(() => console.log('error'));
        }
    });
}
function init() {
    initVue();
}
document.addEventListener('DOMContentLoaded', init);
