<template>
  <div class="pozadina">
    <Navbar/>
    <LogInComp/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/navbar.vue";
import LogInComp from "@/components/LogInComp.vue";

export default {
  name: "LogIn",
  components: {
    Navbar,
    LogInComp,
  }
};
</script>
