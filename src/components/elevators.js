const SPEED = 1000;
const WAITING = 3000;
const wait = async (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

class Elevator {
  constructor() {
    this.position = 1;
    this.status = "IDLE";
    this.floorCalls = [];
  }
}
export default class ElevatorsManager {
}
