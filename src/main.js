var factorial = function(n) {
  if (typeof n !== "number") {
    throw new Error("n should be a Number");
  }

  if (n < 0) {
    throw new Error("n should >= 0");
  }

  if (n > 10) {
    throw new Error("n should <= 10");
  }

  if (n === 0) {
    return 1;
  }

  return factorial(n - 1) * n;
};

if (require.main === module) {
  // 如果是在命令行中执行 main.js，则此处会执行。
  // 如果 main.js 被其他文件 require，则此处不会执行。
  var n = Number(process.argv[2]);
  console.log("factorial(" + n + ") is", factorial(n));
}

exports.factorial = factorial;
