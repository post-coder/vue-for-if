// const creatApp = Vue.creatApp;
// stessa cosa di scrivere:
const { createApp } = Vue

createApp({
    data() {
        return {

            contatore: 0,
            
        }
    },
    methods: {
        // qui ci possiamo scrivere tutte le funzioni che vogliamo
        aumentaNumero() {
            // dentro i metodi di Vue, ritorna al 100% la sintassi originale di JS

            // per accedere ad una proprietà che abbiamo salvato nei data
            // dobbiamo scrivere il "this." davanti al nome della variabile
            
            
            this.contatore++;

            if(this.contatore >= 20) {
                this.contatore = 0;
            }

        },

    },
}).mount('#app');



