<template>
  <div>
      <BBSHeader></BBSHeader>
          <router-view></router-view>
    </div>
</template>

<script>
import BBSHeader from "@/components/BBSHeader";

export default {
  components: { BBSHeader  },
}
</script>

<style></style>
