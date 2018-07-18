<template>
    <div class="main-layout">
        <ul>
            <li>
                <router-link to="/join">报名</router-link>
            </li>
            <li v-for="group in groups" :key="group.id">
                <router-link :to="`/group?id=${group.id}`">{{group.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import {groups} from "../../../manifest";

    export default {
        name: "MainLayout",
        data() {
            return {
                groups
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../style/variables.scss";

    .main-layout {

        padding: {
            top: $top-bar-height;
        }
    ;

    }
</style>