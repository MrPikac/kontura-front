<template>

  <div>
    <Navbar/>


<h2 class="servicestext" >OUR SERVICES</h2>

<hr class="serviceslinija">

<div class="container">
  <div class="row">
    <div class="col">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="@/assets/images/image3.jpg" alt="Card image cap">
        <div class="card-body">
          <h3 class="karticenaslovi">CONSTRUCTION</h3>
          <hr class="linijakartice">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="@/assets/images/image2.jpg" alt="Card image cap">
        <div class="card-body">
          <h3 class="karticenaslovi">BUILDING</h3>
          <hr class="linijakartice">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="@/assets/images/image3.jpg" alt="Card image cap">
        <div class="card-body">
          <h3 class="karticenaslovi">DESIGN</h3>
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
import Navbar from "./navbar.vue"
export default {
  name: "HomeComponent",
  components: {
    Navbar,

  },
  data() {
    return {
      logedInUser: null,

    };
  },
  props: {

  },
  mounted(){
    this.logedInUser = this.$store.getters.getLoggedIn
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only @import './assets/css/bootstrap.css'; -->
<style>

.pozadina {
  margin: 0;
  background-color: #f6f4e6;
}


.img-fluid {
  width: 100%;
}


.logo1 {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 100px;
}

.logotext{
  color: #f6f4e6;
  position: absolute;
  padding: 20px 0 0 20px;
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 20px;
}

.textprekoslike {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #f6f4e6;
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 2.55567rem;
}

.podnaslov {
  color: #f6f4e6;
  text-align: center;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Kumbh Sans', sans-serif;
}

.navigacija {
  background-color: #fddb3a;
}

.nav-link {
  color: #f6f4e6;
}

.servicestext{
  padding-top: 20px;
  font-family: 'Kumbh Sans', sans-serif;
  color: #41444b;
text-align: center;
}

.serviceslinija {
  width: 10%;
  border-color: #fddb3a;
  padding-bottom: 15px;
}

.card-text {
  text-align: center;
}

.karticenaslovi {
  text-align: center;
  font-family: 'Kumbh Sans', sans-serif;
  color: #fddb3a;
  font-size: 24px;
}

.linijakartice {
  width: 20%;
  border-color: #41444b;
  padding: 2px;
}

.abouttext {
  text-align: center;
}

.personname {
  font-family: 'Kumbh Sans', sans-serif;
  color: #52575d;
  text-align: center;
}

.contactimage {
  max-height: 100px;
  max-width: 100px;
  margin-left: 120px;
}

.contacttext {
  color: #52575d;
  text-align: center;
}

.contactcont {
  padding-top: 40px;
  padding-bottom: 20px;
}

.cardlogin {
  font-family: 'Kumbh Sans', sans-serif;
  text-align: center;
  color: #f6f4e6;
  background-color: #fddb3a;
}

.glavnikont {
  margin: 0;
  padding: 0;
}


@import '/assets/css/bootstrap.css';
</style>
