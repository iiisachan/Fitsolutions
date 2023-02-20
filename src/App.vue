<script>
  export default {
    components: {}
  }
</script>

<template>
  <b-navbar fixed="top" toggleable="sm" variant="white">
    <!-- <b-navbar-toggle target="navbar-collapse" /> -->

    <b-navbar-toggle target="navbar-collapse">
      <template #default="{ expanded }">
        <font-awesome-icon v-if="expanded" icon="fa-regular fa-bars" />
        <font-awesome-icon v-else icon="fa-regular fa-xmark" />
      </template>
    </b-navbar-toggle>

    <b-collapse is-nav id="navbar-collapse">
      <b-navbar-nav>
        <b-nav-item to="/"> Hem </b-nav-item>
        <b-nav-item to="/about"> Om </b-nav-item>
        <b-nav-item to="/contact"> Kontakt </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  <main>
    <RouterView />
  </main>
</template>

<style>
  * {
    margin: 0;
  }
  body {
    margin-top: 100px;
  }
</style>
