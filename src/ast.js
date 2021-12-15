// 1+2+3
const astExample1 = {
    type: "Program",
    start: 0,
    end: 185,
    body: [
      {
        type: "ExpressionStatement",
        start: 178,
        end: 183,
        expression: {
          type: "BinaryExpression",
          start: 178,
          end: 183,
          left: {
            type: "BinaryExpression",
            start: 178,
            end: 181,
            left: {
              type: "Literal",
              start: 178,
              end: 179,
              value: 1,
              raw: "1",
            },
            operator: "+",
            right: {
              type: "Literal",
              start: 180,
              end: 181,
              value: 2,
              raw: "2",
            },
          },
          operator: "+",
          right: {
            type: "Literal",
            start: 182,
            end: 183,
            value: 3,
            raw: "3",
          },
        },
      },
    ],
    sourceType: "module",
  };


//const expr = 1+(2*3)+4
const astExample2 = {
  "type": "Program",
  "start": 0,
  "end": 22,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 22,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 22,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 10,
            "name": "expr"
          },
          "init": {
            "type": "BinaryExpression",
            "start": 13,
            "end": 22,
            "left": {
              "type": "BinaryExpression",
              "start": 13,
              "end": 20,
              "left": {
                "type": "Literal",
                "start": 13,
                "end": 14,
                "value": 1,
                "raw": "1"
              },
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "start": 16,
                "end": 19,
                "left": {
                  "type": "Literal",
                  "start": 16,
                  "end": 17,
                  "value": 2,
                  "raw": "2"
                },
                "operator": "*",
                "right": {
                  "type": "Literal",
                  "start": 18,
                  "end": 19,
                  "value": 3,
                  "raw": "3"
                }
              }
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 21,
              "end": 22,
              "value": 4,
              "raw": "4"
            }
          }
        }
      ],
      "kind": "const"
    }
  ],
  "sourceType": "module"
}

//const expr = (5*3)+3;
//console.log(expr);
const astExample3 = {
  "type": "Program",
  "start": 0,
  "end": 41,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 10,
            "name": "expr"
          },
          "init": {
            "type": "BinaryExpression",
            "start": 13,
            "end": 20,
            "left": {
              "type": "BinaryExpression",
              "start": 14,
              "end": 17,
              "left": {
                "type": "Literal",
                "start": 14,
                "end": 15,
                "value": 5,
                "raw": "5"
              },
              "operator": "*",
              "right": {
                "type": "Literal",
                "start": 16,
                "end": 17,
                "value": 3,
                "raw": "3"
              }
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 19,
              "end": 20,
              "value": 3,
              "raw": "3"
            }
          }
        }
      ],
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 22,
      "end": 40,
      "expression": {
        "type": "CallExpression",
        "start": 22,
        "end": 39,
        "callee": {
          "type": "MemberExpression",
          "start": 22,
          "end": 33,
          "object": {
            "type": "Identifier",
            "start": 22,
            "end": 29,
            "name": "console"
          },
          "property": {
            "type": "Identifier",
            "start": 30,
            "end": 33,
            "name": "log"
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 34,
            "end": 38,
            "name": "expr"
          }
        ],
        "optional": false
      }
    }
  ],
  "sourceType": "module"
};