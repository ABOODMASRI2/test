// مثال كود فيه أخطاء وتحذيرات لفحصها على JSHint

function calculateSum(arr) {
    var sum = 0;
    for(i = 0; i < arr.length; i++) {  // خطأ: متغير i مش معرف بـ var/let
        sum += arr[i];
    }
    return sum;
}

var numbers = [1, 2, 3, 4, 5];

console.log("Total is: " + calculateSum(numbers));

function greetUser(name) {
    if(name) {
        console.log("Hello " + name);
    } else {
        console.log("Hello guest");
    }
}

greetUser("Alice");
greetUser();

function unusedFunction() {  // دالة معرفه بس مش مستخدمة - تحذير
    console.log("This function is never called");
}

// متغير معرف ومش مستخدم
var unusedVar = 10;

// نستخدم متغير بدون تعريف
total = calculateSum(numbers);  // خطأ: total معرف بدون var أو let أو const
console.log(total);
