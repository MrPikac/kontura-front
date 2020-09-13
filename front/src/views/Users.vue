<template>
  <div class="users">
    <Navbar/>
    <h1>Users</h1>
    <AllUsers/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/navbar.vue";
import AllUsers from "@/components/AllUsers.vue";

export default {
  name: "Users",
  components: {
    Navbar,
    AllUsers,
  }
};
</script>
