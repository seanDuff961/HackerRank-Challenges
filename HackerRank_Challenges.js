//SOCK MERCHANT

function sockMerchant(n, ar) {

    let map = {};
    let pairs = 0;
    ar.forEach((value, index) => {
      if (!map[value]) {
        map[value] = 0;
      }
      map[value] += 1;
    })
    for (let key in map) {
      if (map[key] % 2 === 0) {
        pairs += (map[key] / 2);
      }
      else {
        if (map[key] > 1) {
          pairs += (Math.floor(map[key] / 2));
        }
      }
    }
    return pairs;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));

//DIVISIBLE SUM PAIRS

function divisibleSumPairs(n, k, ar) {

    let pairs = [];
    for (let i = 0; i < ar.length; i++) {
        for (let j = i + 1; j < ar.length; j++) {
            pairs.push([ar[i], ar[j]]);
        }
    }
    let successful = [];
    pairs.forEach((value) => {
        if (value.reduce((a, b) => a + b) % k === 0) {
            successful.push(value);
        }
    })
    return successful.length;
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));

//REPEATED STRING

function repeatedString(s, n) {
    var r = n % s.length,
      m = (n - r) / s.length,
      count = 0;
  
    for (var i = 0; i < s.length; ++i) {
      if (s[i] === "a") {
        count += m + (i < r);
      }
    }
    return count;
}

console.log(repeatedString("aba", 10));

//COUNTING VALLEYS

function countingValleys(n, s) {
    let heightTracker = [];
    let height = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "D") {
          height --;
          heightTracker.push(height);
        }
        if (s[i] === "U") {
          height ++;
          heightTracker.push(height);
        }
    }
    let planeTracker = [];
    for (let j = 0; j < heightTracker.length; j++) {
        if (heightTracker[j] < 0) {
          planeTracker.push("valley");
        }
        if (heightTracker[j] > 0) {
          planeTracker.push("mountain");
        }
        if (heightTracker[j] === 0) {
          planeTracker.push("flat");
        }
    }
    let newArray = [];
    for (let k = 0; k < planeTracker.length; k++) {
      if (planeTracker[k] === planeTracker[k - 1]) {
        continue;
      }
      if (planeTracker[k] !== planeTracker[k - 1]) {
        newArray.push(planeTracker[k]);
      }
    }
    let valleyCount = 0;
    for (let l = 0; l < newArray.length; l++) {
      if (newArray[l] === "valley") {
        valleyCount ++;
      }
    }
    return valleyCount;
  }
  console.log(countingValleys(12, "DDUUDDUDUUUD"));