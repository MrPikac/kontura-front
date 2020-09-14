<template>
    <div>
    <table class="table" v-if="users">
  <thead class="thead" style="background-color: #fddb3a;">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in users" v-bind:key="user.id">
      <th scope="row"></th>
      <td>{{user.firstName + " " + user.lastName}}</td>
      <td>{{user.email}}</td>
      <td><button type="button" class="btn btn-warning" v-on:click="viewUser(user)"><span style="color: #f6f4e6">
                        <b>View Profile</b>
                      </span></button></td>
      <td><button v-if="logedInUser" type="button" class="btn btn-warning" v-on:click="deleteUser(user)"><span style="color: #f6f4e6">
                        <b>Delete</b>
                      </span></button></td>
    </tr>
  </tbody>
</table>

<button v-if="logedInUser" type="button" class="btn btn-dark" @click="$router.push('add-user')">Add New User</button>
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
      selectedUser: null,
      logedInUser: null,
    }
  },
  props: {

  },
  mounted(){
      this.logedInUser = this.$store.getters.getLoggedIn
      axios.get("http://localhost/api/endpoints/get_all_users.php").then(response => {this.users = response.data;})


  },
  methods: {
      viewUser: function(user){
          this.$router.push({ name: 'Profile', params: {user: user }})


      },
      deleteUser: function(user){
        var path = "http://localhost/api/endpoints/delete_user.php?id=";
        axios.delete(path.concat(user.id)).then(resp=> {
          console.log(resp.data);
          axios.get("http://localhost/api/endpoints/get_all_users.php").then(response => {this.users = response.data;});
          });
      }

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only @import './assets/css/bootstrap.css'; -->
<style src="@/assets/css/bootstrap.css">

</style>
