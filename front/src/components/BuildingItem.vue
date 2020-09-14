<template>

    <div v-if="site">
      <br>
      <br>
      <div class="card mx-auto" style="width: 24rem;">
        <img class="card-img-top" src="@/assets/images/image3.jpg" alt="Card image cap">
        <div class="card-body">
          <h3 class="karticenaslovi">{{site.address}}</h3>
          <hr class="linijakartice">
          <p class="card-text">{{site.description}}.</p>
        </div>
      </div>
      <br>
      <br>
      <button v-if="logedInUser" type="button" class="btn btn-warning" v-on:click="editSite"><span style="color: #f6f4e6">
                        <b>Edit Construction Site</b>
                      </span></button>
      <br>
      <br>
    </div>

</template>

<script>
//import axios from "axios";
export default {
  name: "BuildingItem",
  data() {
    return {
      logedInUser: null,
    };
  },
  props: {
    site: null
  },
  mounted(){
    this.logedInUser = this.$store.getters.getLoggedIn
  },
  methods: {
    viewUser: function() {
      this.count++;
    },
    func: function() {
      console.log(this.site);
    },
    editSite(){
        this.$router.push({ name: 'EditConstructionSite', params: {site: this.site }})
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only @import './assets/css/bootstrap.css'; -->
<style scoped src="@/assets/css/bootstrap.css">
.card-add {
        margin: 0 auto; /* Added */
        float: none; /* Added */
        margin-bottom: 10px; /* Added */
}
</style>
