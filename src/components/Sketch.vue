<template>
    <div>
        <vue-p5 v-on="{setup, draw}"></vue-p5>
        <p v-if="this.population">Population: {{ this.population.count }}</p>
        <p v-if="this.world">Food: {{ this.world.foods.length }}</p>
    </div>
</template>

<script>
    import VueP5 from 'vue-p5'
    import World from "../world/World";
    import Population from "../world/Population";

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
                population: null,
                width: 800,
                height: 800,
                world: null,
            }
        },

        mounted() {
            this.world = new World();
            this.population = new Population(this.world);
        },

        methods: {
            setup(sketch) {
                sketch.createCanvas(this.width, this.height);

                sketch.frameRate(10);
            },

            draw(sketch) {

                for (let i = 0; i < 5; i++) {
                    sketch.clear();
                    sketch.background(...this.bgColor);

                    this.population
                        .draw(sketch)
                        .update()
                        .reproduce();

                    this.world
                        .draw(sketch)
                        .grow(10);

                    if (this.population.count === 0) {
                        sketch.noLoop();
                    }
                }
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
