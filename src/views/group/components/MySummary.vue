<template>
    <div class="summary">
        <slot/>
        <div class="prefix" :style="{borderLeft:`5px solid ${themeColor}`,borderTop:`5px solid ${themeColor}`,}"/>
        <div class="suffix" :style="{borderRight:`5px solid ${themeColor}`,borderBottom:`5px solid ${themeColor}`,}"/>
    </div>
</template>

<script>
    export default {
        name: "MySummary",
        props:{
            themeColor:{
                type:String,
                default:'white'
            }
        }
    }
</script>

<style scoped lang="scss">
    .summary {
        position: relative;
        box-sizing: border-box;
        padding: 1.5em 2.5em;
        text-align: center;
        
        .prefix,.suffix{
            position: absolute;
            height: 1.5em;
        }
        .prefix{
            width: 60%;
            left: 0;
            top:0;
        }
        .suffix{
            width: 45%;
            right: 0;
            bottom: 0;
        }
    }
</style>