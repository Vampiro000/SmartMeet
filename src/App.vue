<template>
  <div id="app">
    <v-main>
      <v-app-bar
        color="deep-purple accent-4"
        style="position: fixed; top: 0px; width: 100%; z-index: 1000"
        dense
        dark
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Smart Meet</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-menu left bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
        </v-menu>
      </v-app-bar>

      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </v-main>
    <v-navigation-drawer v-model="drawer" absolute temporary dark prominent>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title> </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Mes Infos </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Analytics</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Urls Config</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Mes Messages</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <router-view />
    <v-container scrollable>
      <v-row style="overflow-y: scroll">
        <v-card
          color="#385F73"
          dark
          v-for="x in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
          :key="x"
          style="margin-bottom: 5px; margin-top: 5px"
        >
          <v-card-title class="text-h5"> Unlimited music now </v-card-title>

          <v-card-subtitle
            >Listen to your favorite artists and albums whenever and wherever,
            online and offline.</v-card-subtitle
          >

          <v-card-actions>
            <v-btn text> Listen Now </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>
    <div style="position: fixed; bottom: 0px; width: 100%">
      <v-bottom-navigation>
        <v-btn value="recent">
          <span>Recent</span>

          <v-icon>mdi-history</v-icon>
        </v-btn>

        <v-btn value="favorites">
          <span>Favorites</span>

          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn value="nearby">
          <span>Nearby</span>

          <v-icon>mdi-map-marker</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </div>
  </div>
</template>


<script>
export default {
  data: () => ({
    drawer: true,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
