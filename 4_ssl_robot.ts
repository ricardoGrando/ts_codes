class SSLRobot {
  private id: number;
  private position: { x: number; y: number };
  private orientation: number;

  constructor() {
	this.id = 0;
	this.position = { x: 0, y: 0 };
	this.orientation = 0;
  }

  setId(id: number): void {
	this.id = id;
  }

  setPosition(x: number, y: number): void {
	this.position = { x, y };
  }

  setOrientation(orientation: number): void {
	this.orientation = orientation;
  }

  displayInfo(): void {
	console.log('Robot ID:', this.id);
	console.log('Position:', this.position);
	console.log('Orientation:', this.orientation);
  }
}

// Example usage
const robot = new SSLRobot();
robot.setId(1);
robot.setPosition(10, 15);
robot.setOrientation(45);
robot.displayInfo();

