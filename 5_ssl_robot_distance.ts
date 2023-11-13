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

  getId(): number {
	return this.id;
  }

  setPosition(x: number, y: number): void {
	this.position = { x, y };
  }

  getPosition(): { x: number; y: number } {
	return this.position;
  }

  setOrientation(orientation: number): void {
	this.orientation = orientation;
  }

  getOrientation(): number {
	return this.orientation;
  }

  displayInfo(): void {
	console.log('Robot ID:', this.getId());
	console.log('Position:', this.getPosition());
	console.log('Orientation:', this.getOrientation());
  }

  calculateDistanceToRobot(otherRobotPosition: { x: number; y: number }): number {
	const { x: x1, y: y1 } = this.position;
	const { x: x2, y: y2 } = otherRobotPosition;
    
	// Euclidean distance formula
	const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
	return distance;
  }
}

// Example usage
const robot1 = new SSLRobot();
robot1.setPosition(0, 0);

const robot2 = new SSLRobot();
robot2.setPosition(10, 10);

const distance = robot1.calculateDistanceToRobot(robot2.getPosition());
console.log('Distance to Robot 2:', distance);

