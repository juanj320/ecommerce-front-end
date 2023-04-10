<template>
  <v-container
    class="d-flex justify-center align-center"
    style="width: 100%; height: 90vh"
  >
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-6">
          <v-window v-model="step" touchless>
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" sm="6" md="6" lg="6">
                  <v-card-text class="mt-16">
                    <h1 class="text-center " >Iniciar Sesion</h1>

                    <v-row align="center" justify="center" class="mt-n8 mt-sm-n5 mt-md-n5 mt-lg-n5">
                      <v-col cols="12" sm="11" md="10" lg="10">
                        <v-text-field
                          label="Correo"
                          outlined
                          dense
                          color="blue"
                          autocomplete="false"
                          class="mt-16"
                        />
                        <v-text-field
                          label="Contraseña"
                          outlined
                          dense
                          color="blue"
                          autocomplete="false"
                          type="password"
                        />
                        <v-row class="mt-n6">
                          <v-col cols="12" class="text-end">
                            <span class="caption blue--text"
                              >Olvidaste tu contraseña?</span
                            >
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-btn color="blue" dark block class="mb-2"
                            >Iniciar Sesion</v-btn
                          >
                        </v-row>
                        <div
                        style="color:#ccc"
                          class="mt-3 align-center justify-center d-flex d-sm-none d-md-none d-lg-none"
                        >
                          <h4 class="">No tienes cuenta?</h4>

                          <h4 @click="step = 2" class="blue--text ml-1">
                            Registrate
                          </h4>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
                <v-col cols="6" class="d-none d-sm-flex d-md-flex d-lg-flex">
                  <v-col cols="12" class="blue rounded-bl-xl">
                    <div style="text-align: center; padding: 180px 0">
                      <v-card-text class="white--text">
                        <h2 class="text-center">
                          No tienes una cuenta todavía?
                        </h2>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn outlined dark @click="step++">Registrate</v-btn>
                      </div>
                    </div>
                  </v-col>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
              <v-row>
                <v-col cols="6" class="d-none d-sm-flex d-md-flex d-lg-flex">
                  <v-col cols="12" class="blue rounded-br-xl">
                    <div style="text-align: center; padding: 180px 0">
                      <v-card-text class="white--text">
                        <h2 class="text-center">Ya estas registrado?</h2>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn outlined dark @click="step--"
                          >Inicia Sesion</v-btn
                        >
                      </div>
                    </div>
                  </v-col>
                </v-col>

                <v-col cols="12" sm="6" md="6" lg="6">
                  <v-card-text class="mt-12">
                    <h1 class="text-center mt-n4">Registrarse</h1>
                    

                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="10">
                        <v-row>
                          <v-col cols="12" sm="12" md="6" lg="6" class="mb-n9">
                            <v-text-field
                              label="Primer nombre"
                              outlined
                              dense
                              color="blue"
                              autocomplete="false"
                              class="mt-4"
                            />
                          </v-col>
                          <v-col cols="12" sm="12" md="6" lg="6">
                            <v-text-field
                              label="Segundo nombre"
                              outlined
                              dense
                              color="blue"
                              autocomplete="false"
                              class="mt-4"
                            />
                          </v-col>
                        </v-row>
                        <v-text-field
                          label="Correo"
                          outlined
                          dense
                          color="blue"
                          autocomplete="false"
                        />
                        <v-text-field
                          label="Contraseña"
                          outlined
                          dense
                          color="blue"
                          autocomplete="false"
                          type="password"
                        />
                        <v-row>
                          <v-col cols="12" class="d-flex">
                            <v-checkbox class="mt-n1" color="blue">
                            </v-checkbox>
                            <div style="padding-top: 2px">
                              <div class="caption d-flex">
                                <div>Acepto</div>
                                <span class="blue--text ml-1"
                                  >terminos y condiciones</span
                                >
                              </div>
                            </div>
                          </v-col>
                        </v-row>
                        <v-btn color="blue" dark block>Registrarse</v-btn>
                        <div
                        style="color:#ccc"
                          class="mt-3 align-center justify-center d-flex d-sm-none d-md-none d-lg-none"
                        >
                          <h4 class="">Ya tienes cuenta?</h4>

                          <h4 @click="step = 1" class="blue--text ml-1">
                            Inicia Sesion
                          </h4>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    step: 1,
  }),
};
</script>

<style scoped>
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
</style>
