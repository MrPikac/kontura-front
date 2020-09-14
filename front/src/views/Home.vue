<template>
  <div  class="pozadina">
    <HomeComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponent from "@/components/HomeComponent.vue";

export default {
  name: "Home",
  components: {
    HomeComponent,

  },
  data() {
    return {
       logedInUser: null,

    };
  },

};
</script>
