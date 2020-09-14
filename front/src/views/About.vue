<template>
  <div class="about">
    <Navbar/>
    <h2 class="servicestext" >WHAT WE DO</h2>
<hr class="serviceslinija">

<div class="container">
  <p class="abouttext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>

<h2 class="servicestext" >MEET THE TEAM</h2>
<hr class="serviceslinija">

<div class="container">
  <div class="row">
    <div class="col">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="@/assets/images/personpic3.jpg" alt="Card image cap">
        <div class="card-body">
          <p class="personname">John Doe</p>
          <h3 class="karticenaslovi">CEO</h3>
          <hr class="linijakartice">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="@/assets/images/personpic2.jpg" alt="Card image cap">
        <div class="card-body">
          <p class="personname">John Doe</p>
          <h3 class="karticenaslovi">MARKETING</h3>
          <hr class="linijakartice">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="@/assets/images/profilepic.jpg" alt="Card image cap">
        <div class="card-body">
          <p class="personname">John Doe</p>
          <h3 class="karticenaslovi">HR MANAGER</h3>
          <hr class="linijakartice">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
</template>
<script>
import Navbar from "@/components/navbar.vue";

export default {
  name: "About",
  components: {
    Navbar
  }
};
</script>