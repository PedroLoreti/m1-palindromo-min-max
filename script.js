function isPalindrome(str){
    let inverso = "";
    str = str.toLowerCase();
    for (let i = str.length - 1; i >= 0; i--) {
        inverso += str[i];
    }

    if (inverso.split(" ").join("") === str.split(" ").join("")) {
        return true;
    } else {
        return false;
    }
}

function arrayMaxMin(arr){
    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } else if (arr[i] < min) {
            min = arr[i];
        }
    }
    return [min, max];
}
