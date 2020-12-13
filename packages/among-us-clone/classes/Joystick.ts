import p5Types from 'p5';
import { JOYSTICK_OUTER_COLOR, JOYSTICK_INNER_COLOR, STROKE_WEIGHT } from '../constants/joystick'

// TODO add joystick interface
export default class Joystick {
    controls;
    finger;
    stickpos;
    value;
    pos;
    radius;
    p5: p5Types;

    constructor(x, y, radius, p5Instance: p5Types) {
        this.p5 = (p5Instance as p5Types);
        this.pos = this.p5.createVector(x, y);
        this.radius = radius;
        this.stickpos = this.p5.createVector(x, y);
        this.controls = false;
        this.value = this.p5.createVector(0, 0);
    }

    render = function () {
        this.p5.stroke(...JOYSTICK_OUTER_COLOR);
        this.p5.strokeWeight(STROKE_WEIGHT);
        this.p5.fill(...JOYSTICK_OUTER_COLOR);
        this.p5.ellipse(this.pos.x, this.pos.y, this.radius);

        // if (this.controls) {
        this.p5.fill(...JOYSTICK_INNER_COLOR);
        this.p5.strokeWeight(5);
        this.p5.line(this.pos.x, this.pos.y, this.stickpos.x, this.stickpos.y);
        this.p5.strokeWeight(0);
        this.p5.ellipse(this.stickpos.x, this.stickpos.y, this.radius / 3);
        // }
    }

    update = function () {
        if (this.controls) {
            this.finger = this.p5.createVector(this.p5.mouseX, this.p5.mouseY);
            this.stickpos = this.p5.createVector(this.finger.x - this.pos.x, this.finger.y - this.pos.y);
            this.stickpos.limit(this.radius / 2);
            this.value.x = this.stickpos.x;
            this.value.y = this.stickpos.y;
            this.stickpos = this.p5.createVector(this.pos.x + this.stickpos.x, this.pos.y + this.stickpos.y);

            return {
                x: this.getX(0.2),
                y: this.getY(0.7)
            };
        }

        return {
            x: 0,
            y: 0
        };
    }

    activateJoystick(activate: boolean) {
        this.finger = this.p5.createVector(this.p5.mouseX, this.p5.mouseY);
        const distance = this.p5.dist(this.finger.x, this.finger.y, this.pos.x, this.pos.y);
        if (distance < this.radius / 2 && activate) {
            this.controls = true;
        } else {
            this.stickpos.x = this.pos.x;
            this.stickpos.y = this.pos.y;
            this.controls = false;
        }
    }

    clicked() {
        this.activateJoystick(this.p5.mouseX < this.p5.windowWidth / 2);
    }

    updateValue(v) {
        this.value = this.value.mult(v);
    }

    getX(multiplier: number) {
        this.updateValue(multiplier);
        return this.value.x;
    }

    getY(multiplier: number) {
        this.updateValue(multiplier);
        return this.value.y;
    }
}