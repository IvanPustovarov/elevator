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
  isInWork(floor) {
    return this.floorCalls.includes(floor);
  }
  addCall(floor) {
    this.floorCalls.push(floor);
  }
export default class ElevatorsManager {
}
