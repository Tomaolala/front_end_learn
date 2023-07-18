function SuperType(name){
    this.name = name;
    this.colors = ["red", "blue", "green"];
  }
  SuperType.prototype.sayName = function(){
    alert(this.name);
  };
  
  function SubType(name, age){
    // 继承属性
    // 第二次调用SuperType()
    SuperType.call(this, name);
    this.age = age;
  }
  
  // 继承方法
  // 构建原型链
  // 第一次调用SuperType()
  SubType.prototype = new SuperType(); 
  // 重写SubType.prototype的constructor属性，指向自己的构造函数SubType
  SubType.prototype.constructor = SubType; 
  SubType.prototype.sayAge = function(){
      alert(this.age);
  };
  
  var instance1 = new SubType("Nicholas", 29);
  instance1.colors.push("black");
  alert(instance1.colors); //"red,blue,green,black"
  instance1.sayName(); //"Nicholas";
  instance1.sayAge(); //29
  
  var instance2 = new SubType("Greg", 27);
  alert(instance2.colors); //"red,blue,green"
  instance2.sayName(); //"Greg";
  instance2.sayAge(); //27





