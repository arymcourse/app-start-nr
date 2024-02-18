function LocalStorageManager() {
};

LocalStorageManager.prototype.setData = function (key, value) {
    localStorage.setItem(key, value);
}

LocalStorageManager.prototype.getData = function (key) {
    return localStorage.getItem(key)
}
LocalStorageManager.prototype.setData('test', 1)
const testValue = LocalStorageManager.prototype.getData('test')
console.log(testValue);
