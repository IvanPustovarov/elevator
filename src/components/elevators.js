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

  async _wait() {
    this.status = "WAITING";
    return wait(WAITING);
  }

  async _move(destination) {
    this.status = "MOVING";
    while (this.position !== destination) {
      await wait(SPEED);
      if (destination > this.position) {
        this.position++;
      } else {
        this.position--;
      }
    }
    return;
  }
}

export default class ElevatorsManager {
  constructor(elevatorsAmount = 1, floorsAmount = 5) {
    this.elevators = [];
    for (let i = 1; i <= elevatorsAmount; i++) {
      this.elevators.push(new Elevator());
    }
    this.elevators.forEach((e) => e.start());
    this.floorsAmount = floorsAmount;
  }
}
