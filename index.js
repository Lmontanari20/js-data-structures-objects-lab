// Write your solution in this file!
let driver = {}
function updateDriverWithKeyAndValue(driver, key, value) {
    // returns new driver with update value for the key passed in
    let newDr = Object.assign({},driver)
    newDr[key] = value
    return newDr
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key) {
    let newDr = Object.assign({}, driver)
    delete newDr[key]
    return newDr
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}