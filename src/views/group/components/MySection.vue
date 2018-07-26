<template>
    <section class="my-section">
        <h1 class="label" :style="{backgroundColor:themeColor}">{{label}}</h1>
        <div class="content"><slot/></div>
    </section>
</template>

<script>
    export default {
        name: "MySection",
        props:{
            label:{
                type:String,
                default:'          '
            },
            themeColor:{
                type:String,
                default:'#555'
            }
        }
    }
</script>

<style scoped lang="scss">
    section.my-section{
        margin: 2em 0;
        .label{
            border-radius: 5px 20px 0 10px;
            display: inline-block;
            font-size: 1.1em;
            padding: .5em 2em .5em .75em;
            font-weight: normal;
        }
        .content{
            margin-left: 1.5em;
            line-height: 2;
        }
    }
</style>