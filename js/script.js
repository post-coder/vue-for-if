// const creatApp = Vue.creatApp;
// stessa cosa di scrivere:
const { createApp } = Vue

createApp({
    data() {
        return {

            persona: {
                nome: 'Mario',
                cognome: 'Rossi',
                eta: 19,
                ruolo: 'Data Analyst',
            },


            coloriPreferiti: [
                'rosso',
                'verde',
                'blu',
                'arancione',
                'viola',
                'aquamarine'
            ],
            
        }
    }
}).mount('#app');



