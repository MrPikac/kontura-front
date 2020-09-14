<template>
  <div>
    <Navbar/>
    <div v-if="site">
    <BuildingItem :site = "site"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/navbar.vue";
import BuildingItem from "@/components/BuildingItem.vue";

export default {
  name: "Building",
  components: {
    Navbar,
    BuildingItem,
  },
  props: {
      site : null,
  },
  methods: {

  }
};
</script>
