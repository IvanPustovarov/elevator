<template>
  <div>
    <tr
      v-for="floor in Array.from(
        { length: this.floors },
        (_, i) => i + 1
      ).reverse()"
      :key="floor"
    >
      <td>
        <button :value="floor" @click="callElevator(floor)">{{ floor }}</button>
      </td>
      <td
        class="cell"
        v-for="(elevator, index) in elevatorManager.elevators"
        :key="index"
      >
        <div v-if="elevator.position === floor" class="elevator"></div>
      </td>
    </tr>
  </div>
</template>

<script>
import ElevatorsManager from "./elevators";
export default {
  name: "ElevatorComponent",
  data() {
    return {
      elevatorManager: {},
      floors: 5,
      elevators: 3,
    };
  },
  mounted() {
    this.elevatorManager = new ElevatorsManager(this.elevators, this.floors);
  },
  methods: {
    callElevator(floor) {
      this.elevatorManager.callElevator(floor);
    },
  },
};
</script>

<style scoped>
.cell {
  outline: 1px solid blue;
  width: 120px;
  text-align: center;
  vertical-align: middle;
}
tr {
  height: 150px;
}

.elevator {
  width: 120px;
  height: 150px;
  background-color: rgb(86, 145, 110);
}
</style>
