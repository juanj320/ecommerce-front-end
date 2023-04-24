<template>
  <v-container
    class="d-flex justify-center align-center"
    style="width: 100%; height: 90vh"
  >
    <v-col cols="12" sm="10" md="6" lg="6">
      <h1 class="text-center">Nueva Contraseña</h1>

      <v-row>
        <v-col cols="12" class="mb-n10">
          <v-text-field
            label="Contraseña nueva"
            outlined
            dense
            color="blue"
            autocomplete="false"
            class="mt-4"
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            label="Repite contraseña"
            outlined
            dense
            color="blue"
            autocomplete="false"
            class="mt-4 mb-n7"
          />
        </v-col>
      </v-row>
      <v-row >
        <v-col cols="12">
          <router-link style="text-decoration: none;" to="/login"> Regresar al login </router-link>
        </v-col>
      </v-row>
      <div class="text-center mt-4" >
        <v-btn color="blue" block dark>Cambiar</v-btn>
      </div>
    </v-col>
  </v-container>
</template>
<script>
export default {};
</script>
<style ></style>
