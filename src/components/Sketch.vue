<template>
    <div>
        <vue-p5 v-on="{setup, draw}"></vue-p5>
    </div>
</template>

<script>
    import VueP5 from 'vue-p5'

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
