class Ground {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options)
        World.add(world, this.body)
    }
    display() {
        fill("yellow")

        var groundpos = this.body.position
        push()
        translate(groundpos.x, groundpos.y)
        rectMode(CENTER)
        rect(0, 0, this.w, this.h)
        pop()
    }

}