// const creatApp = Vue.creatApp;
// stessa cosa di scrivere:
const { createApp } = Vue

createApp({
    data() {
        return {

            persona: {
                nome: 'Andrea',
                cognome: 'Rossi',
                eta: 27,
                ruolo: 'Web Developer',
                abilitato: true,
            },


            coloriPreferiti: [
                'rosso',
                'verde',
                'blu',
                'arancione',
            ],
            
        }
    }
}).mount('#app');