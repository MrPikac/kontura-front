<template>
    <div>
    <h3 class="align-left">Construction Sites</h3>
    <table class="table" v-if="orgs">
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
    <tr v-for="org in orgs" v-bind:key="org.name">
      <th scope="row"></th>
      <td>{{org.name}}</td>
      <td>A</td>
      <td><button type="button" class="btn btn-dark" v-on:click="clickFunc">Add Counter</button></td>

    </tr>

  </tbody>
</table>

<button type="button" class="btn btn-dark" @click="$router.push('add-construction-site')">Add New Construction Site</button>
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
      orgs: null,
    }
  },
  props: {

  },
  mounted(){
      this.count = 5;
      axios.get("http://localhost:9003/orgs").then(response => {this.orgs = response.data;})


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
