<template>
  <div>
    <SidebarComponent />
    <v-main>
      <v-container fluid>
        <router-view style="background-color: red" />
      </v-container>
    </v-main>
  </div>
</template>
<script>
import SidebarComponent from "./components/SidebarComponent.vue";
export default {
  components: { SidebarComponent },
};
</script>
<style></style>
