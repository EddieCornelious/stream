export function toKViewers(num) {
  if (num < 1000) {
    return num;
  }
  let toStr = num.toString();
  if (num >= 1000 && num < 10000) {
    return toStr.substring(0, 1) + "." + toStr[1] + "K";
  }
  if (num >= 10000 && num < 100000) {
    return toStr.substring(0, 2) + "." + toStr[2] + "K";
  }
  if (num >= 100000) {
    return toStr.substring(0, 3) + "." + toStr[3] + "K";
  }
  return "100K+";
}
