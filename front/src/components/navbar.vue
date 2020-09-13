<template>
    <div>
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
          <router-link to="/" class = "nav-link">Home</router-link>
        </li>
          <li class="nav-item active">
          <router-link to="/about" class = "nav-link">About</router-link>
        </li>
        <li class="nav-item active">
          <router-link to="/users" class = "nav-link">Users</router-link>
        </li>
        <li class="nav-item active">
          <router-link to="/construction-sites" class = "nav-link">Construction Sites</router-link>
        </li>
      </ul>
      <ul class="navbar-nav navbar-right">
      <li class="nav-item active">
        <a class="nav-link" href="#/profile">Profil</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#/">Logout</a>
      </li>
      </ul>
    </div>
  </nav>

</div>
</template>

<script>
export default {
  name: "Navbar",
  props: {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only @import './assets/css/bootstrap.css'; -->
<style src="@/assets/css/bootstrap.css">

</style>
