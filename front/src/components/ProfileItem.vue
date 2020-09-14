<template>
  <div v-if="user">
      <br>
      <br>
      <div class="card mx-auto" style="width: 24rem;">
        <img class="card-img-top" src="@/assets/images/profilepic.jpg" alt="Card image cap">
        <div class="card-body">
          <h3 class="karticenaslovi">{{user.firstName + " " + user.lastName}}</h3>
          <hr class="linijakartice">
          <p class="card-text">{{"Email: " + user.email}}.</p>
          <p class="card-text">{{"Contact Info: " + user.contact}}.</p>
        </div>
      </div>
      <br>
      <br>
      <button v-if="logedInUser" type="button" class="btn btn-warning" v-on:click="editProfile"><span style="color: #f6f4e6">
                        <b>Edit User Profile</b>
                      </span></button>
      <br>
      <br>
    </div>
</template>

<script>
//import axios from "axios";
export default {
  name: "ProfileItem",
  data() {
    return {
      logedInUser: null,
    };
  },
  props: {
    user: null
  },
  mounted(){
    this.logedInUser = this.$store.getters.getLoggedIn
  },
  methods: {
    editProfile(){
        this.$router.push({ name: 'EditProfile', params: {user: this.user }})
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only @import './assets/css/bootstrap.css'; -->
<style src="@/assets/css/bootstrap.css">
</style>
