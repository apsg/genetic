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
    import Specimen from "../logic/Specimen";

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
                specimen: null,
                width: 800,
                height: 800,
            }
        },

        mounted() {
            this.genome = Genome.fromValues([0.99, 5]);

            this.genome.validate();

            this.specimen = new Specimen(this.genome, 100, 100);
        },

        methods: {
            setup(sketch) {
                sketch.createCanvas(this.width, this.height);

                sketch.frameRate(10);
            },

            draw(sketch) {
                sketch.clear();
                sketch.background(...this.bgColor);

                this.specimen.draw(sketch);
                this.specimen.update();

                // sketch.noLoop();
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
