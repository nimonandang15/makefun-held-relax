import * as fs from "node:fs";

const text =
  "Evening settles over the roof like a hand resting, not pressing. In the kitchen a pot ticks as it cools, and the light goes amber on the wall. Nothing here asks anything of you. The chair by the window kept your shape all day, and the room has held the rest all along.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", text, "utf8");
