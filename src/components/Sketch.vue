<template>
    <div>
        <vue-p5 v-on="{setup, draw}"></vue-p5>
        <p>{{ gene }}</p>
        <p>{{ genome }}</p>
    </div>
</template>

<script>
    import VueP5 from 'vue-p5'
    import Genome from '../logic/Genome'
    import Gene from '../logic/Gene'

    export default {
        name: 'Sketch',
        props: {
            msg: String
        },

        components: {
            VueP5
        },

        data() {
            return {
                bgColor: [100, 255, 100],
                gene: null,
                genome: null
            }
        },

        mounted() {
            this.genome = new Genome();

            this.gene = new Gene(20);
            
            this.gene.validate();
        },

        methods: {
            setup(sketch) {
                sketch.createCanvas(400, 400);
                sketch.background(...this.bgColor);
            },

            draw(sketch) {
                sketch.ellipse(50, 50, 80, 80);
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
