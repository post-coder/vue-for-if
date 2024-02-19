// const creatApp = Vue.creatApp;
// stessa cosa di scrivere:
const { createApp } = Vue

createApp({
    data() {
        return {

            // mi salvo una variabile dove memorizzo quale sia la slide attiva
            activeSlideIndex: 0,


            movie: {
                title: "The Mandalorian",
                category: "Action",
                length: 120,
                images: [
                    'https://www.themoviedb.org/t/p/w500/b3zVRZ9R2QyV0klRESMLKaBwQqm.jpg',
                    'https://www.themoviedb.org/t/p/w500/9VdgIj9R9Z9dfDoO76v57V6FF6y.jpg',
                    'https://www.themoviedb.org/t/p/w500/d4Ja9AMFoWEtTPKFrzQac0ReYb.jpg',
                    'https://www.themoviedb.org/t/p/w500/p6erCET4fvzQiGz0wgwGFvEIdcb.jpg',
                    'https://www.themoviedb.org/t/p/w500/pWBgjkG8ASvYnrql3tbjMo0d8tk.jpg'
                ],
            }

        }
    },
    methods: {
        nextSlide() {
            this.activeSlideIndex++;

            // controllo che l'indice non vada oltre l'ultima immagine
            if (this.activeSlideIndex >= this.movie.images.length) {
                this.activeSlideIndex = 0
            }
        },

        prevSlide() {
            this.activeSlideIndex--;

            // qui controllo che l'indice non vada oltre lo zero 
            if (this.activeSlideIndex < 0) {
                this.activeSlideIndex = this.movie.images.length - 1;
            }
        },

        changeSlide(index) {
            console.log(index)
            this.activeSlideIndex = index
        },
    }
}).mount('#app');



