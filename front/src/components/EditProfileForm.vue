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
                  <h3 class="mb-0">Edit User</h3>
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
                        <b>First Name:</b>
                      </label>
                      <input
                        type="text"
                        class="form-control form-control-lg rounded-0"
                        name="uname1"
                        id="uname1"
                        required
                        v-model="user.firstName"


                      />
                      <div class="invalid-feedback">Oops, you missed this one.</div>
                      <div class="form-group">
                        <label>
                          <b>Last Name:</b>
                        </label>
                        <input
                          type="text"
                          class="form-control form-control-lg rounded-0"
                          required
                          v-model="user.lastName"


                        />
                        <div class="invalid-feedback">Oops, you missed this one.</div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label>
                        <b>Email:</b>
                      </label>
                      <input
                        type="text"
                        class="form-control form-control-lg rounded-0"
                        required
                        v-model="user.email"


                      />
                      <div class="invalid-feedback">Oops, you missed this one.</div>
                    </div>
                    <div class="form-group">
                      <label>
                        <b>User Name:</b>
                      </label>
                      <input
                        type="text"
                        class="form-control form-control-lg rounded-0"
                        v-model="user.userName"

                      />

                    </div>
                    <div class="form-group">
                      <label>
                        <b>Contact Info:</b>
                      </label>
                      <input
                        type="text"
                        class="form-control form-control-lg rounded-0"
                        required
                        v-model="user.contact"

                      />
                      <div class="invalid-feedback">Oops, you missed this one.</div>
                    </div>


                    <button type="button" v-on:click="editUser" class="btn btn-warning">
                      <span style="color: #f6f4e6">
                        <b>Edit User</b>
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
      isAddFail: false,
      isPasswordOK: true,
      isEmailOK: true,
      isAddOK: true,
      logedInUser: null,
    };
  },
  props: {
      user: null,
  },
  mounted(){
    this.logedInUser = this.$store.getters.getLoggedIn
  },
  methods: {
    editUser: function() {
      this.axiosCall().then(resp=>console.log(resp.data));

    },


    axiosCall: function() {
      return axios.put(
        "http://localhost/api/endpoints/update_user.php/",
        this.user
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only @import './assets/css/bootstrap.css'; -->
<style src="@/assets/css/bootstrap.css">
</style>
