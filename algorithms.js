function insertSort (arr) {
  if (!arr instanceof Array) { return false }
  for (var i = 1; i < arr.length; i++) {
    for (var j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i]
        for (var k = i; k > j; k--) {
          arr[k] = arr[k - 1]
        }
        arr[j] = temp
      }
    }
  }
  console.log(arr)
};
