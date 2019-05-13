<template>
    <div>
        <vue-p5 v-on="{setup, draw}"></vue-p5>
        <p>{{ genome }}</p>
        <p>{{ cross }}</p>
    </div>
</template>

<script>
    import VueP5 from 'vue-p5'
    import Genome from '../logic/Genome'

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
                genome: null,
                genome2: null,
                cross: null,
            }
        },

        mounted() {
            this.genome = Genome.fromValues([0.99, 0.9]);
            this.genome2 = Genome.fromBin('111111111111', false);

            this.genome.validate();


            // this.cross = Reproduction.cross(this.genome, this.genome2);
            //
            // let genome3 = Genome.fromBin(this.cross);

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
