<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/signin">SignIn</router-link> |
        <router-link to="/signup">SignUp</router-link> |
      </nav>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <v-bottom-navigation :value="value" color="teal" grow>
      <v-btn>
        <span>Recents</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>
      <v-btn>
        <span>Favorites</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn>
        <span>Nearby</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<script>
export default {
  data: () => ({ value: 1 }),
};
</script>
