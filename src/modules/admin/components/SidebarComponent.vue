<template>
  <nav style="height: 0px">
    <v-app>
      <v-navigation-drawer
        :mini-variant.sync="drawer"
        color="blue-grey darken-1"
        dark
        app
        permanent
        v-model="drawer"
      >
        <!-- Cabecera -->
        <v-list-item class="px-2">
          <v-list-item-avatar class="p-3">
            <v-img :src="logo"></v-img>
          </v-list-item-avatar>

          <v-list-item-title
            ><h2>{{ nombre_marca }}</h2></v-list-item-title
          >
        </v-list-item>
        <!-- Fin Cabecera -->

        <v-divider></v-divider>

        <v-list>
          <div v-for="(menu, index) in menus" :key="index">
            <v-list-item router :to="{ path: menu.ruta }">
              <v-list-item-icon>
                <v-icon>{{ menu.icono }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ menu.nombre }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar app height="56">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>

        <v-toolbar-title>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                height="100%"
                text
                plain
                dark
                v-bind="attrs"
                v-on="on"
              >
                <v-avatar class="mr-1" size="36"
                  ><img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                /></v-avatar>
                {{ nombre_usuario }}
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar-title>
      </v-app-bar>
    </v-app>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      nombre_marca: "Delta Brand",
      items: [{ title: "Cuenta" }, { title: "Cerrar Sesion" }],
      nombre_usuario: "Mark Gomez",
      mini: true,
      //variables boton menu usuario
      logo: "https://i0.wp.com/deltavibesmusic.com/wp-content/uploads/2021/01/Logo-delta-temporal-1.png?fit=1300%2C1300&ssl=1",
      drawer: true,

      menus: [
        {
          nombre: "Dashboard",
          ruta: "/app/dashboard",
          icono: "mdi-dots-square",
        },
        {
          nombre: "Productos",
          ruta: "/app/productos",
          icono: "mdi-tshirt-v",
        },
        {
          nombre: "Usuarios",
          ruta: "/app/usuarios",
          icono: "mdi-account-group",
        },
        {
          nombre: "Reportes",
          ruta: "/app/reportes",
          icono: "mdi-chart-bar",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped></style>
