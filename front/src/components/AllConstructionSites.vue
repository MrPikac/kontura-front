<template>
    <div>
    <table class="table" v-if="sites">
  <thead class="thead" style="background-color: #fddb3a;">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>

    </tr>
  </thead>
  <tbody>
    <tr v-for="site in sites" v-bind:key="site.id">
      <th scope="row"></th>
      <td>{{site.address}}</td>
      <td>{{site.description}}</td>
      <td><button type="button" class="btn btn-warning"  v-on:click="viewSite(site)"><span style="color: #f6f4e6">
                        <b>View Site</b>
                      </span></button></td>


    </tr>

  </tbody>
</table>

<button v-if="logedInUser" type="button" class="btn btn-warning" @click="$router.push('add-construction-site')"><span style="color: #f6f4e6">
                        <b>Add New Site</b>
                      </span></button>
  <br>
  <br>
  <br>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "AllConstructionSites",
  data() {
    return {
      // Initialized to zero to begin
      count: 0,
      sites: null,
      logedInUser: null,
    }
  },
  props: {

  },
  mounted(){
      this.logedInUser = this.$store.getters.getLoggedIn
      axios.get("http://localhost/api/endpoints/get_all_buildings.php").then(response => {this.sites = response.data;})


  },
  methods: {
      viewSite: function(site){
          this.$router.push({ name: 'Building', params: {site: site }})

      },


  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only @import './assets/css/bootstrap.css'; -->
<style src="@/assets/css/bootstrap.css">

</style>
