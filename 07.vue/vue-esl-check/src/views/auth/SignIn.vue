<template>
  <v-app>
    <v-main class="sign-in">
      <v-container>
        <h1>This is an SignIn page</h1>
        <div>{{ this.$store.state.Users }}</div>
      </v-container>
      <v-container>
        <form class="mr-4 ml-4">
          <v-text-field
            v-model="name"
            label="Name"
            outlined
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="email"
            label="E-mail"
            outlined
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="password"
            type="password"
            label="password"
            outlined
            required
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="passwordCheck"
            type="password"
            label="password-check"
            outlined
            required
            @input="$v.passwordCheck.$touch()"
            @blur="$v.passwordCheck.$touch()"
          ></v-text-field>

          <v-checkbox
            v-model="checkbox"
            label="Do you agree?"
            required
            @change="$v.checkbox.$touch()"
            @blur="$v.checkbox.$touch()"
          ></v-checkbox>
          <v-btn class="mr-4" @click="submit"> submit </v-btn>
          <v-btn class="mr-4" @click="create"> store </v-btn>
          <v-btn @click="clear"> clear </v-btn>
        </form>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      passwordCheck: "",
      checkbox: "",
    };
  },
  methods: {
    submit() {
      console.log(this.name);
      console.log(this.email);
      console.log(this.password);
      console.log(this.passwordCheck);
      console.log(this.checkbox);
    },
    create() {
      console.log("유저 목록 : ", this.$store.state.Users);
    },
  },
};
</script>
