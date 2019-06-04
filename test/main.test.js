// 引用要测试的文件
var main = require('../src/main');
var should = require('should');

describe('test/main.js', function () {
  it('should equal 1 when n === 0', function () {
    main.factorial(0).should.equal(1);
  });

  it('should equal 1 when n === 1', function () {
    main.factorial(1).should.equal(1);
  });

  it('should equal 3628800 when n === 10', function () {
    main.factorial(10).should.equal(3628800);
  });

  it('should throw when n > 10', function () {
    (function () {
      main.factorial(11);
    }).should.throw('n should <= 10');
  });

  it('should throw when n < 0', function () {
    (function () {
      main.factorial(-1);
    }).should.throw('n should >= 0');
  });

  it('should throw when n is not Number', function () {
    (function () {
      main.factorial('参数类型错误');
    }).should.throw('n should be a Number');
  });
});
