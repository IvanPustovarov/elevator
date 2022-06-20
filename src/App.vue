<template>
  <div id="app">
    <ElevatorComponent />
  </div>
</template>

<script>
import ElevatorComponent from "./components/Elevator.vue";

export default {
  name: "App",
  components: {
    ElevatorComponent,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
