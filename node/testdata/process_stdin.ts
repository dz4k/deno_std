import process from "../process.ts";

console.log(process.stdin.readableHighWaterMark);

process.stdin.setEncoding("utf8");
process.stdin.on("readable", () => {
  console.log(process.stdin.read());
});
process.stdin.on("end", () => {
  console.log("end");
});
