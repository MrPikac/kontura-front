<template>
    <div>
    <h3 class="align-left">Construction Sites</h3>
    <table class="table" v-if="users">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>

    </tr>
  </thead>
  <tbody>
    <tr v-for="user in users" v-bind:key="user.id">
      <th scope="row"></th>
      <td>{{user.firstName}}</td>
      <td>A</td>
      <td><button type="button" class="btn btn-dark" v-on:click="clickFunc">Add Counter</button></td>

    </tr>

  </tbody>
</table>

<button type="button" class="btn btn-dark" @click="$router.push('add-user')">Add New User</button>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "AllUsers",
  data() {
    return {
      // Initialized to zero to begin
      count: 0,
      users: null,
    }
  },
  props: {

  },
  mounted(){
      this.count = 5;
      axios.get("http://localhost/api/endpoints/get_all_users.php").then(response => {this.users = response.data;})


  },
  methods: {
      clickFunc: function(){
          this.count++;

      },

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only @import './assets/css/bootstrap.css'; -->
<style src="@/assets/css/bootstrap.css">

</style>
