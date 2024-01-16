<template>
  <div>
    <BBSHeader></BBSHeader>
    <router-view> </router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import BBSHeader from "@/components/BBSHeader";
import Footer from "@/components/Footer.vue";

export default {
  components: { BBSHeader, Footer },
}
</script>

<style></style>
