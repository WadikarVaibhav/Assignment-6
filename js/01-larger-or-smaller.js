var num1 = parseInt(window.prompt('Num 1'));
var num2 = parseInt(window.prompt('Num 2'));

if (num1 == num2) {
    document.write("Numbers are equal");
} else {
    var larger = num1 > num2 ? num1 : num2;
    document.write("The larger number between "+num1 +" and "+num2+" is "+larger);
}