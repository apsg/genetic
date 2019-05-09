<template>
    <div>
        <vue-p5 v-on="{setup, draw}"></vue-p5>
    </div>
</template>

<script>
    import VueP5 from 'vue-p5'
    import Gene from '../logic/Gene'
    import SpeedGene from '../logic/SpeedGene'



    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },

        components: {
            VueP5
        },

        data() {
            return {
                bgColor: [100, 255, 100]
            }
        },

        mounted() {
            let gene = new Gene(3);
            gene.fromBin('011101').validate();

            let speed = new SpeedGene(3);
            speed.validate();

            speed.fromBin('11');

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
