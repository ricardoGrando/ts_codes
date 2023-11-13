var SSLRobot = /** @class */ (function () {
    function SSLRobot() {
        this.id = 0;
        this.position = { x: 0, y: 0 };
        this.orientation = 0;
    }
    SSLRobot.prototype.setId = function (id) {
        this.id = id;
    };
    SSLRobot.prototype.getId = function () {
        return this.id;
    };
    SSLRobot.prototype.setPosition = function (x, y) {
        this.position = { x: x, y: y };
    };
    SSLRobot.prototype.getPosition = function () {
        return this.position;
    };
    SSLRobot.prototype.setOrientation = function (orientation) {
        this.orientation = orientation;
    };
    SSLRobot.prototype.getOrientation = function () {
        return this.orientation;
    };
    SSLRobot.prototype.displayInfo = function () {
        console.log('Robot ID:', this.getId());
        console.log('Position:', this.getPosition());
        console.log('Orientation:', this.getOrientation());
    };
    SSLRobot.prototype.calculateDistanceToRobot = function (otherRobotPosition) {
        var _a = this.position, x1 = _a.x, y1 = _a.y;
        var x2 = otherRobotPosition.x, y2 = otherRobotPosition.y;
        // Euclidean distance formula
        var distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
        return distance;
    };
    return SSLRobot;
}());
// Example usage
var robot1 = new SSLRobot();
robot1.setPosition(0, 0);
var robot2 = new SSLRobot();
robot2.setPosition(10, 10);
var distance = robot1.calculateDistanceToRobot(robot2.getPosition());
console.log('Distance to Robot 2:', distance);
