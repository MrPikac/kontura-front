<template>
    <div>
    <form>
        <div class="form-group">
        <label for="exampleFormControlFile1"><b>Upload photo:</b></label>
        <input type="file" class="form-control-file" id="exampleFormControlFile1">
      </div>
      <div class="form-group row">
      <label class="col-sm-2 col-form-label">Address:</label>
      <div class="col-sm-10">
        <input type="text"  class="form-control" v-model="site.address">
      </div>
      </div>
      <div class="form-group row">
      <label class="col-sm-2 col-form-label">Description:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" v-model="site.description">
      </div>
      </div>
       <div class="form-group row">
      <label class="col-sm-2 col-form-label">Year:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" v-model="site.year">
      </div>
      </div>
      <div class="form-group" v-if="users">
            <label for="exampleFormControlSelect1">Select Supervisor</label>
            <select v-model="selectedUserID" class="form-control" id="exampleFormControlSelect1">
              <option v-for="user in users" v-bind:key="user.name">{{user.firstName}}</option>
            </select>
          </div>
  </form>
  <button type="button" class="btn btn-dark" v-on:click="addSite(site)">Add</button>


</div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddConstructionForm",
  data() {
    return {
      site: {description: "", year: "", image: "", user_id: "", address: ""},
      users: null,
      selectedUserID: "",
    }
  },
  props: {

  },
  mounted(){
      this.count = 5;
      axios.get("http://localhost:9003/users").then(response => {this.users = response.data;})


  },
  methods: {
      addSite: function(){
          this.site.user_id = this.selectedUserID;
          console.log(this.site);

      },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only @import './assets/css/bootstrap.css'; -->
<style src="@/assets/css/bootstrap.css">

</style>
