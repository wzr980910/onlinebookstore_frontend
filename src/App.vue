<template>
    <div>
        <BBSHeader/>
        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
    import BBSHeader from "@/components/BBSHeader";
import router from "./router";
    export default {
        name: 'App',
        components: { BBSHeader, router },
    }
</script>

<style>

</style>
