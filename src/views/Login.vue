<template>
  <v-app id="app">
    <div>
      <div style="position: absolute; top: 20%; left: 10%; right: 10%">
        <v-card elevation="2" style="padding: 5px">
          <v-form>
            <v-container>
              <v-text-field
                v-model="username"
                label="Mail"
                outlined
                :rules="rules.username"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                outlined
                required
              ></v-text-field>
              <v-btn rounded style="margin: 2px" @click="login()"
                >Connexion</v-btn
              >
              <br />
              <v-btn
                rounded
                color="primary"
                style="margin: 2px"
                dark
                required
                to="register"
                >Créer un compte</v-btn
              >
            </v-container>
          </v-form>
        </v-card>
      </div>
    </div>
  </v-app>
</template>

<script>
import axios from "axios";
const config = require("../config");
console.log("Config", config);
console.log("Axios", axios);
axios.get(config.baseUrl + "/hello").then((x) => {
  console.log("Response", x);
});
export default {
  data: () => ({
    username: null,
    password: null,
    rules: {
      password: [(val) => (val || "").length > 0 || "This field is required"],
      username: [(val) => (val || "").length > 0 || "This field is required"],
    },
  }),
  methods: {
    login() {
      axios
        .post(config.baseUrl + config.urls.login, {
          email: this.username,
          password: this.password,
        })
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem("TokenAuth", response.data);
            window.location = config.frontHomeUrl;
          } else {
            alert("Erreur de Connexion", response);
            localStorage.clear();
          }
        })
        .catch((error) => alert(error.response.data));
    },
  },
};
</script>

<style>
</style>