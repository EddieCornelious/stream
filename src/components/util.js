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

export function mergesort(a, compare) {
  let aLen = a.length;
  if (aLen === 1) {
    return a;
  }
  let mid = Math.floor(aLen / 2);
  let l1 = mergesort(a.slice(0, mid), compare);
  let l2 = mergesort(a.slice(mid), compare);
  return merge(l1, l2, compare);
}

function merge(a, b, compare) {
  let c = [];
  while (a.length > 0 && b.length > 0) {
    if (compare(a[0], b[0]) === 1) {
      c.push(b.shift());
    } else {
      c.push(a.shift());
    }
  }

  while (a.length > 0) {
    c.push(a.shift());
  }

  while (b.length > 0) {
    c.push(b.shift());
  }

  return c;
}

export function genGameViews() {
  let state = 100000;
  let calls = 0;
  function cancel() {
    state = 100000;
  }

  function gen() {
    calls++;
    if (calls <= 4) {
      return Math.floor(56000 + Math.random() * 70000);
    }
    if (calls <= 25) {
      return Math.floor(25000 + Math.random() * 47000);
    }

    if (calls <= 50) {
      return Math.floor(15000 + Math.random() * 28000);
    }
    return Math.floor(1 + Math.random() * 12000);
  }
  return {
    gen,
    cancel
  };
}
