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
                  <h3 class="mb-0">Register User</h3>
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
                        v-bind:class="{'is-invalid': !isFirstNameFilled }"
                        placeholder="First Name"
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
                          v-bind:class="{'is-invalid': !isLastNameFilled }"
                          placeholder="Last Name"
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
                        v-bind:class="{'is-invalid': !isEmailOK }"
                        placeholder="Email"
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
                        required
                        v-bind:class="{'is-invalid': !isUserNameOK }"
                        v-model="user.userName"
                        placeholder="User Name"
                      />
                      <div v-if="isUserNameAvaliable" class="invalid-feedback">Username is taken.</div>
                      <div v-else class="invalid-feedback">Oops, you missed this one.</div>
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
                        placeholder="Contact Info"
                      />
                      <div class="invalid-feedback">Oops, you missed this one.</div>
                    </div>
                    <div class="form-group">
                      <label for="password1">
                        <b>Enter password:</b>
                      </label>
                      <input
                        type="password"
                        class="form-control form-control-lg rounded-0"
                        v-bind:class="{'is-invalid': !isPasswordOK }"
                        id="password1"
                        v-model="password1"
                      />
                    </div>
                    <div class="form-group">
                      <label for="password2">
                        <b>Re-Enter password:</b>
                      </label>
                      <input
                        type="password"
                        class="form-control form-control-lg rounded-0"
                        v-bind:class="{'is-invalid': !isPasswordOK }"
                        id="password2"
                        v-model="password2"
                      />
                      <div class="invalid-feedback">Passwords don't match!</div>
                    </div>

                    <button type="button" v-on:click="addUser" class="btn btn-warning">
                      <span style="color: #f6f4e6">
                        <b>Register User</b>
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
  name: "AddUserForm",
  data() {
    return {
      user: {
        userName: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        role: "SUPERVISOR"
      },
      isAddFail: false,
      isPasswordOK: true,
      isEmailOK: true,
      isAddOK: true,
      isUserNameOK: true,
      isUserNameAvaliable: true,
      isFirstNameFilled: true,
      isLastNameFilled: true,
      password1: "",
      password2: "",
      allUsers: null,
      logedInUser: null,
    };
  },
  props: {},
  mounted(){
    this.logedInUser = this.$store.getters.getLoggedIn
    axios.get("http://localhost/api/endpoints/get_all_users.php").then(response => {this.users = response.data;});
  },
  methods: {
    addUser: function() {
      this.isAddOK = true;
      this.isPasswordOK = true;
      this.isEmailOK = true;
      this.isUserNameOK= true;
      this.isFirstNameFilled = true;
      this.isLastNameFilled= true;
      this.isUserNameAvaliable = true;

      this.isAddFail = false;

      this.checkInputs();

      if (this.password1 === this.password2) {
        this.user.password = this.password1;
      } else {
        this.isAddOK = false;
        this.isPasswordOK = false;
      }

      console.log(this.user);
      if (this.isAddOK) {
        this.axiosCall().then(response => {
          console.log(response.data);
        });
      }
    },

    axiosCall: function() {
      return axios.post(
        "http://localhost/api/endpoints/create_user.php/",
        this.user
      );
    },
    checkInputs: function(){
      this.checkUserName();
      if(this.user.firstName === ""){
        this.isFirstNameFilled = false;
        this.isAddOK = false;
      }
      if(this.user.lastName === ""){
        this.isLastNameFilled = false;
        this.isAddOK = false;
      }
      if(this.user.email === ""){
        this.isEmailOK = false;
        this.isAddOK = false;
      }
      if(this.user.userName === ""){
        this.isUserNameOK = false;
        this.isAddOK = false;
      }
    },
    checkUserName: function(){
      this.users.forEach(element => {
        if(this.user.userName === element.userName){
          this.isUserNameAvaliable = false;
          this.isUserNameOK = false;
          this.isAddOK = false;
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only @import './assets/css/bootstrap.css'; -->
<style src="@/assets/css/bootstrap.css">
</style>
