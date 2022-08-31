var input = prompt("enter your date of birth in this format (day month , year)");
var a = new Date(input);
var b = a.getTime();
var c = new Date();
var d = c.getTime();
var e = d - b;
var answer = Math.floor((e / (1000 * 60 * 60 * 24 * 31 * 12)));

document.write(answer);


