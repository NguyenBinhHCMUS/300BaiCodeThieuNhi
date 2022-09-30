/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const match = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const ch of s) {
    if (ch === "(" || ch === "{" || ch === "[") stack.push(ch);
    else {
      const topStack = stack.pop();
      if (topStack !== match[ch]) return false;
    }
  }
  return stack.length === 0;
};

// Dùng stack: vào sau ra trước: push, pop
// match kí tự đóng vs mở
// Nếu là kí tự mở đưa vào stack
// Nếu là kí tự dống tiến hành so sánh topStack và match[key], nếu sai thỉ return
// Điều kiện đúng là khi stack rỗng
