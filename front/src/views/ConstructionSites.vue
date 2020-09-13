<template>
  <div class="construction_sites">
    <Navbar/>
    <h1>ConstructionSites</h1>
    <AllConstructionSites/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/navbar.vue";
import AllConstructionSites from "@/components/AllConstructionSites.vue";

export default {
  name: "ConstructionSites",
  components: {
    Navbar,
    AllConstructionSites,
  }
};
</script>
