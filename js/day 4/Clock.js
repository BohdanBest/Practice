class Clock {
  constructor({ template }) {
    this.template = template;
    this.timer = null;
  }
  render() {
    const date = new Date();
    const hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    const minutes = date.getMinutes();
    if (minutes < 10) minutes = "0" + minutes;

    const seconds = date.getSeconds();
    if (seconds < 10) seconds = "0" + seconds;

    const output = this.template
      .replace("h", hours)
      .replace("m", minutes)
      .replace("s", seconds);

    console.log(output);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.render;
    this.timer = setInterval(() => this.render(), 1000);
  }
}
const clock = new Clock({ template: "h:m:s" });
clock.start();
