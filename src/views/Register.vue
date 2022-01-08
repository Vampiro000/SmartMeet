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
                :rules="rules.password"
                outlined
                required
              ></v-text-field>
              <v-text-field
                v-model="confirmedPassword"
                label="Confirm password"
                :rules="[passwordValidation()]"
                outlined
                required
              ></v-text-field>
              <v-text-field
                v-model="phone"
                label="Phone number"
                outlined
                :rules="rules.phone"
                required
              ></v-text-field>
              <v-btn
                rounded
                color="primary"
                style="margin: 2px"
                dark
                to="Register"
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
export default {
  data: () => ({
    username: null,
    password: null,
    confirmedPassword: null,
    phone: null,
    rules: {
      password: [(val) => (val || "").length > 0 || "This field is required"],
      username: [(val) => (val || "").length > 0 || "This field is required"],
      phone: [(val) => (val || "").length > 0 || "This field is required"],
    },
  }),
  methods: {
    passwordValidation() {
      if ((this.password || "").length === 0) return "This field is required";
      if (this.password !== this.confirmedPassword) return "Different Password";
      return true;
    },
  },
};
</script>

<style>
</style>