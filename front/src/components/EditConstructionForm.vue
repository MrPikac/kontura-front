<template>
  <div>
    <div v-if="logedInUser" class="container py-5">
      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-6 mx-auto">
              <!-- form card login -->
              <div class="card rounded-0">
                <div class="card-header cardlogin">
                  <h3 class="mb-0">Edit Construction Site</h3>
                </div>
                <div class="card-body">
                  <form
                    class="form"
                    role="form"
                    autocomplete="off"
                    id="formLogin"
                    novalidate
                    method="POST"
                  >
                    <div class="form-group">
                      <label for="uname1">
                        <b>Address:</b>
                      </label>
                      <input
                        type="text"
                        class="form-control form-control-lg rounded-0"
                        name="uname1"
                        id="uname1"
                        required
                        v-model="site.address"


                      />
                      <div class="invalid-feedback">Oops, you missed this one.</div>
                      <div class="form-group">
                        <label>
                          <b>Description:</b>
                        </label>
                        <input
                          type="text"
                          class="form-control form-control-lg rounded-0"
                          required
                          v-model="site.description"


                        />
                        <div class="invalid-feedback">Oops, you missed this one.</div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label>
                        <b>Year:</b>
                      </label>
                      <input
                        type="text"
                        class="form-control form-control-lg rounded-0"
                        required
                        v-model="site.year"

                      />
                      <div class="invalid-feedback">Oops, you missed this one.</div>
                    </div>
                   <div class="form-group" v-if="users">
          <label for="exampleFormControlSelect1">Select Supervisor</label>
          <select v-model="site.user_id" class="form-control" id="exampleFormControlSelect1">
            <option
              v-for="user in users"
              v-bind:key="user.id"
              v-bind:value="user.id"
            >{{user.firstName}}</option>
          </select>
        </div>



                    <button type="button" v-on:click="editSite" class="btn btn-warning">
                      <span style="color: #f6f4e6">
                        <b>Edit Construction Site</b>
                      </span>
                    </button>
                  </form>
                </div>
                <!--/card-block-->
              </div>
              <!-- /form card login -->
            </div>
          </div>
          <!--/row-->
        </div>
      </div>
    </div>
    <div v-else>
      <h3>You have to login</h3>
    </div>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "EditProfileForm",
  data() {
    return {
      users: null,
      isAddFail: false,
      isPasswordOK: true,
      isEmailOK: true,
      isAddOK: true,
      logedInUser: null,
    };
  },
  props: {
    site: null
  },
  mounted(){
      this.logedInUser = this.$store.getters.getLoggedIn
      axios.get("http://localhost/api/endpoints/get_all_users.php").then(response => {this.users = response.data;})


  },
  methods: {
    editSite: function() {
      this.axiosCall().then(resp => console.log(resp.data));
    },

    axiosCall: function() {
      if(parseInt(this.site.year)){
        this.site.year = parseInt(this.site.year);
      return axios.put(
        "http://localhost/api/endpoints/update_building.php/",
        this.site
      );
      }

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only @import './assets/css/bootstrap.css'; -->
<style src="@/assets/css/bootstrap.css">
</style>
