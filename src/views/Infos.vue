<template>
  <div>
    Infos Vue
    <v-flex>
      <v-container style="display: flex; overflow: auto">
        <v-card
          :color="itemInfo.color"
          dark
          v-for="itemInfo of ItemInfos"
          :key="itemInfo.name"
          style="margin: 5px; width: 250px"
        >
          <v-card-title class="text-h5"> {{ itemInfo.name }} </v-card-title>

          <v-card-subtitle
            >Listen to your favorite artists and albums whenever and wherever,
            online and offline.</v-card-subtitle
          >

          <v-card-actions>
            <v-btn text> Listen Now </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-flex>
  </div>
</template>

<script>
import config from "../config";
console.log(" Infos Vue Loaded by router");
export default {
  data: () => ({
    ItemInfos: null,
  }),

  mounted: function () {
    console.log("Congif", config);
    this.ItemInfos = config.ItemsInfos;
    console.log("ItemsInfos", this.ItemInfos);
  },
  watch: {},
};
</script>

<style>
</style>