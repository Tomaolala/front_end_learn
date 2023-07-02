根据 ESTREE 拆分的

主要结构

# Node

Node 结构可以理解为是所有节点的基类，Node 节点中的属性在其他 AST 节点中都存在。Node 节点的结构如下：

```js
interface Node {
  type: string;
  loc: SourceLocation | null;
}
interface SourceLocation {
  source: string | null;
  start: Position;
  end: Position;
}
interface Position {
  line: number; // >= 1
  column: number; // >= 0
}
```

# Identifier

标识，函数名、变量名、方法名都属于 Identifier，Identifier 基本结构如下（不包含 Node 的基本节点）：

```js
interface Identifier {
  type: "Identifier";
  name: string;
}
```

# Literal

文字类型，变量的值（字符串、数字、bool 值、null 等）、正则表达式，在 Babel 中对应的类型就是 stringLiteral、numericLiteral 等等，Literal 基本结构如下：

```js
interface Literal {
    type: "Literal";
    value: string | boolean | null | number | RegExp;
}
```


# Statements

Statement就是我们代码的语句，Statement有非常多的子类型，比如ExpressionStatement、BlockStatement、ReturnStatement、IfStatement、WhileStatement等等，以ExpressionStatement举例，其结构如下：
css复制代码

```js
  interface ExpressionStatement <: Statement {
    type: "ExpressionStatement";
    expression: Expression;
}  

```

# Declarations

Declaration代表声明、定义，和Statement一样在AST中出现的是他的子类型，主要有：FunctionDeclaration、VariableDeclaration：



```js
interface FunctionDeclaration {
    type: "FunctionDeclaration";
    id: Identifier;
}
interface VariableDeclaration {
    type: "VariableDeclaration";
    declarations: [ VariableDeclarator ];
    kind: "var";
}

```

# Expressions

Expressions就是表达式，主要有FunctionExpression、ObjectExpression、ArrayExpression、ThisExpression等等，以BinaryExpression为例：


```js
interface BinaryExpression {
    type: "BinaryExpression";
    operator: BinaryOperator;
    left: Expression;
    right: Expression;
}


```