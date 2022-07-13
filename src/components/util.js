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

export function Compare(prop, asc = true) {
  if (asc) {
    return function (a, b) {
      if (a[prop] > b[prop]) {
        return 1;
      }
      if (a[prop] < b[prop]) {
        return -1;
      }
      return 0;
    };
  }

  return function (a, b) {
    if (a[prop] < b[prop]) {
      return 1;
    }
    if (a[prop] > b[prop]) {
      return -1;
    }
    return 0;
  };
}
