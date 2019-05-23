<template>
    <div>
        <vue-p5 v-on="{setup, draw}"></vue-p5>
        <p>{{ genome }}</p>
        <p>{{ cross }}</p>
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
                sketch.clear();
                sketch.background(...this.bgColor);

                this.population
                    .draw(sketch)
                    .update();

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
