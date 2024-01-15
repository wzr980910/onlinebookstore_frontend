<template>
<<<<<<< HEAD
  <div id="app">
    <router-view/>
  </div>
=======
    <div>
        <!-- <BBSHeader/> -->
        <router-view></router-view>
    </div>
>>>>>>> 73c35a23730790a44ff3c778304a92b336bb569a
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
