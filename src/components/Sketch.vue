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
    import Specimen from "../world/Specimen";
    import World from "../world/World";

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
                bgColor: [200, 200, 200],
                genome: null,
                cross: null,
                specimens: [],
                width: 800,
                height: 800,
                world: null,
            }
        },

        mounted() {
            this.world = new World();

            this.genome = Genome.fromValues([0.99, 5, 50]);


            this.genome.validate();

            this.specimens.push(new Specimen(this.genome, this.world.randomX(), this.world.randomY()));
            this.specimens.push(new Specimen(this.genome, this.world.randomX(), this.world.randomY()));
            this.specimens.push(new Specimen(this.genome, this.world.randomX(), this.world.randomY()));
            this.specimens.push(new Specimen(this.genome, this.world.randomX(), this.world.randomY()));
            this.specimens.push(new Specimen(this.genome, this.world.randomX(), this.world.randomY()));
            this.specimens.push(new Specimen(this.genome, this.world.randomX(), this.world.randomY()));
            this.specimens.push(new Specimen(this.genome, this.world.randomX(), this.world.randomY()));
        },

        methods: {
            setup(sketch) {
                sketch.createCanvas(this.width, this.height);

                sketch.frameRate(10);
            },

            draw(sketch) {
                sketch.clear();
                sketch.background(...this.bgColor);

                for (let specimen of this.specimens) {
                    specimen
                        .draw(sketch)
                        .update()
                        .sense(this.world.foods);
                }

                this.world
                    .draw(sketch)
                    .grow(10);

                // sketch.noLoop();
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
