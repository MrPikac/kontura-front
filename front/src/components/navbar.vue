<template>
    <div class="container-fluid glavnikont">

  <ul class="nav d-flex justify-content-end navigacija">
    <li class="nav-item">
      <a class="nav-link active" href="#/">HOME</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#/about">ABOUT</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#/construction-sites">CONSTRUCTION SITES</a>
    </li>
    <li v-if="logedInUser" class="nav-item">
      <a class="nav-link" href="#/users">USERS</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">CONTACT</a>
    </li>
    <button v-if="!logedInUser" type="button" class="btn btn-warning" onclick="location.href = '#/login';" ><span style="color: #f6f4e6"><b>LOG IN</b></span></button>

    <button v-if="logedInUser" v-on:click="logOut" onclick="location.href = '#/logout';" type="button" class="btn btn-warning"><span style="color: #f6f4e6"><b>LOG OUT</b></span></button>
          <a class="navbar-brand" href="#"><span style="color: #f6f4e6"><b>KONTURA</b></span>
      <img src="@/assets/images/building.png" width="30" height="30" class="d-inline-block" alt="">
      </a>

</ul>
<div class="textprekoslike"><span style="color: #fddb3a">KONTURA</span> CONSTRUCTION</div>
<p class="podnaslov">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
<img class="img-fluid" src="@/assets/images/panimage.jpg" alt="Responsive image">


</div>

</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
       logedInUser: null,

    };
  },
  mounted() {
    console.log(this.logedInUser);
    this.logedInUser = this.$store.getters.getLoggedIn

  },
  methods: {
    logOut: function(){
      console.log("AAAA");
      this.$store.commit('setLogedInUser', null);
      this.logedInUser = this.$store.getters.getLoggedIn

    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only @import './assets/css/bootstrap.css'; -->
<style src="@/assets/css/bootstrap.css">

</style>
