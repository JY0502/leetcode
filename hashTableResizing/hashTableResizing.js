/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  //I = key and value to insert
  //O = none
  //C = none
  //E = if key if already in the storage, replace value of it

  //every index of the storage should made of an array
  //increase size by 1
  //check new size to storageLimit ratio and if it's bigger than 3/4
  //find all the stored key-value pair and replace them into new storage with doubled storage limit
  //find index to store the key-value pair by using getIndexBelowMaxForKey function
  //store key and value pair as an array into the index found of the storage

  result.insert = function(k, v) {
    // TODO: implement `insert`
    const temp = [];
    size++;
    if ((size / storageLimit) >= 3/4) {
      for (let index of storage) {
        for (let item of index) {
          temp.push(item);
        }
      }
      storageLimit = storageLimit * 2;
      storage = [];
    }
    temp.push([k, v]);
    for (let item of temp) {
      const index = getIndexBelowMaxForKey(item[0], storageLimit);
      storage[index] = storage[index] || [];
      storage[index].push(item);
    }
  };

  //I = key to find its value
  //O = value of the input key
  //C = none
  //E = if key is not found, return undefined

  //find the index of the storage by using getIndexBelowMaxForKey function
  //find and return the value of the input key at the given index of the storage
  //if key is not found, return undefined

  result.retrieve = function(k) {
    // TODO: implement `retrieve`
    const index = getIndexBelowMaxForKey(item[0], storageLimit);
    for (let item of storage[index]) {
      if (item[0] === k) {
        return item[1];
      }
    }
  };


  //I = key to remove key-value pair
  //O = none
  //C = none
  //E = if key-value pair is not found, do not remove anything

  //find index of key by using getIndexBelowMaxForKey and remove the key-value pair
  //if removed,
    //decrease size by 1
    //if new size to storageLimit ratio is less than 1/4
    //find all the stored key-value pair and replace them into new storage with new halved storage limit

  result.remove = function(k) {
    // TODO: implement `remove`
    let found = false;
    const index = getIndexBelowMaxForKey(item[0], storageLimit);
    for (let i = 0; i < storage[index].length; i++) {
      if (storage[index][i] === k) {
        storage[index].splice(i, 1);
        found = true;
      }
    }
    if (found) {
      size--;
      if ((size / storageLimit) <= 1/4) {
        const temp = [];
        for (let index of storage) {
          for (let item of index) {
            temp.push(item);
          }
        }
        storage = [];
        storageLimit = Math.floor(storageLimit / 2);
        const ind = getIndexBelowMaxForKey(item[0], storageLimit);
        for (let item of temp) {
          storage[ind] = storage[ind] || [];
          storage[ind].push(item);
        }
      }
    }
  };

  return result;
};
