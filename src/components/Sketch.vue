<template>
    <div>
        <vue-p5 v-on="{setup, draw}"></vue-p5>
        <p>{{ genome }}</p>
        <p v-if="genome">{{ genome.toBin() }}</p>
        <p v-if="genome2">{{ genome2.toBin() }}</p>
        <p>{{ cross }}</p>
    </div>
</template>

<script>
    import VueP5 from 'vue-p5'
    import Genome from '../logic/Genome'
    import Reproduction from "../logic/Reproduction";

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
            this.genome = Genome.fromBin('000000000');
            this.genome2 = Genome.fromBin('111111111');

            this.cross = Reproduction.cross(this.genome, this.genome2);

            console.log(this.genome2.getFeature('speed'));
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
