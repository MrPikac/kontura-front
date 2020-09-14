<template>
  <div>
    <div class="container py-5">
      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-6 mx-auto">
              <!-- form card login -->
              <div class="card rounded-0">
                <div class="card-header cardlogin">
                  <h3 class="mb-0">LOGIN</h3>
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
                        <b>Username</b>
                      </label>
                      <input
                        type="text"
                        class="form-control form-control-lg rounded-0"
                        name="uname1"
                        id="uname1"
                        required
                        v-model="loginDTO.userName"
                      />
                      <div class="invalid-feedback">Oops, you missed this one.</div>
                    </div>
                    <div class="form-group">
                      <label>
                        <b>Password</b>
                      </label>
                      <input
                        type="password"
                        class="form-control form-control-lg rounded-0"
                        id="pwd1"
                        required
                        autocomplete="new-password"
                        v-model="loginDTO.password"
                      />
                      <div class="invalid-feedback">Enter your password too!</div>
                    </div>

                    <button type="button" v-on:click="logIn" class="btn btn-warning">
                      <span style="color: #f6f4e6">
                        <b>LOG-IN</b>
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
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LogInComp",
  data() {
    return {
      loginDTO: { userName: "", password: "" }
    };
  },
  props: {},
  methods: {
    logIn: function() {
      console.log(this.loginDTO);
      axios
        .post("http://localhost/api/endpoints/login.php", this.loginDTO)
        .then(resp => {
          console.log(resp.data);
          this.$store.commit('setLogedInUser', resp.data);
          this.$router.push("/");
          //this.$router.push({name: 'Home', params: {logedInUser: resp.data }});
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only @import './assets/css/bootstrap.css'; -->
<style src="@/assets/css/bootstrap.css">
</style>
