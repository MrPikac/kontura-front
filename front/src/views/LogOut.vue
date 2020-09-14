<template>
  <div class="pozadina">
      <Navbar/>
    <h1>You have been loged out</h1>
    <button type="button" class="btn btn-warning" onclick="location.href = '#/';" ><span style="color: #f6f4e6"><b>HOME</b></span></button>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/navbar.vue";

export default {
  name: "LogOut",
  components: {
    Navbar,
  }
};
</script>
