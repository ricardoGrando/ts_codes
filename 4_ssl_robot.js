var SSLRobot = /** @class */ (function () {
    function SSLRobot() {
        this.id = 0;
        this.position = { x: 0, y: 0 };
        this.orientation = 0;
    }
    SSLRobot.prototype.setId = function (id) {
        this.id = id;
    };
    SSLRobot.prototype.setPosition = function (x, y) {
        this.position = { x: x, y: y };
    };
    SSLRobot.prototype.setOrientation = function (orientation) {
        this.orientation = orientation;
    };
    SSLRobot.prototype.displayInfo = function () {
        console.log('Robot ID:', this.id);
        console.log('Position:', this.position);
        console.log('Orientation:', this.orientation);
    };
    return SSLRobot;
}());
// Example usage
var robot = new SSLRobot();
robot.setId(1);
robot.setPosition(10, 15);
robot.setOrientation(45);
robot.displayInfo();
