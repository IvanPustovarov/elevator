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

  async start() {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      await wait(200);
      if (this.floorCalls.length === 0) {
        this.status = "IDLE";
        continue;
      }

      const destination = this.floorCalls[0];
      await this._move(destination);
      await this._wait();
      this.floorCalls.shift();
    }
  }

export default class ElevatorsManager {
}
