function f() {
  var name = " 极客时间 ";
  let test1 = 1;
  //   const test2 = 2;
  var innerBar = {
    setName: function (value) {
      name = value;
    },
    getName: function () {
      console.log(test1);
      return name;
    },
  };
  return innerBar;
}
var bar = f();
bar.setName("极客邦");
bar.getName();
console.log(bar.getName());
