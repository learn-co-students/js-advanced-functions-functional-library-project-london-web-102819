const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(arr, alert) {
      
      const copy = (arr instanceof Array) ? copy.slice() : Object.values(arr);

      for(let i = 0; i < copy.length; i++) {
        alert(copy[i]);
      }
      return arr;
    },

    map: function(arr, fn) {

      const result = [];
      const length = Object.keys(arr).length;

      for(let i = 0; i < length; i++) {
        result[i] = fn(Object.values(arr)[i]);
      }
      return result;
    },

    reduce: function(arr, fn, start = 0) {

      let i, acc;

      if (start) {
        acc = start;
        i = 0;
      } else {
        acc = arr[0];
        i = 1;
      }

      for(; i < arr.length; i++) {
        acc = fn(acc, arr[i]);
      }
      return acc;
    },

    filter: function(arr, check) {
      const found = [];
      for(let i = 0; i < arr.length; i++) {
        if (check(arr[i])) found.push(arr[i]);
      }
      return found;
    },

    find: function(arr, check) {
      
      for(let i = 0; i < arr.length; i++) {
        if (check(arr[i])) return arr[i];
      }
      return undefined;
    },

    size: function(obj) {
      return Object.values(obj).length;
    },

    first: function(arr, n = 1) {
      const result = [];
      for(let i = 0; i < n; i++) {
        result.push(arr[i])
      }
      return (result.length === 1 ? result[0] : result);
    },

    last: function(arr, n = 1) {
      const result = [];
      for(let i = arr.length - 1; i >= arr.length - n; i--) {
        result.unshift(arr[i])
      }
      return (result.length === 1 ? result[0] : result);
    },

    compact: function(arr) {
      const result = [];
      for(let i = 0; i < arr.length; i++) {
        if (arr[i]) result.push(arr[i]);
      }
      return result;
    },

    sortBy: function(arr, fn) {
      const copy = [...arr];
  
      function quickSort(a) {

        if (a.length <= 1) return a;
        const lessThan = [];
        const GreaterThan = [];
        
        for(let i = 1; i < a.length; i++) {

          if (fn(a[i]) > fn(a[0])) {
            GreaterThan.push(a[i]);
          }
          else {
            lessThan.push(a[i]);
          }

        }
        
        return [...quickSort(lessThan), a[0], ...quickSort(GreaterThan)];
      }
      return quickSort(copy);
    },

    flatten: function(arr, oneLevel = false) {
      let result = [];
      
      for(let i = 0; i < arr.length; i++) {
      
        if (arr[i] instanceof Array) {
          if (oneLevel) {
            for(let j = 0; j < arr[i].length; j++) {
              result.push(arr[i][j]);
            }
          } 
          else {
            result = result.concat(this.flatten(arr[i]));
          }
          
        } else {
          result.push(arr[i]);
        }
        
      }
      return result;
    },

    uniq: function(arr, bool, fn = e => e) {
      const countObj = {}
      const result = [];

      for(let i = 0; i < arr.length; i++) {
        if (!countObj[JSON.stringify(fn(arr[i]))]) {
          result.push(arr[i]);
          countObj[JSON.stringify(fn(arr[i]))] = 1;
        } 
      }
      
      return result;
    },

    keys: function(obj) {
      return Object.keys(obj);
    },

    values: function(obj) {
      return Object.values(obj);
    },

    functions: function(obj) {
      return Object.getOwnPropertyNames(obj).filter(item => typeof obj[item] === 'function').sort();
    },


  }
})()

fi.libraryMethod()
