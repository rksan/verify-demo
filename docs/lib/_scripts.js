// modulas10

function checkdigit(barcode) {
  const codes = barcode.toString().split("");

  let result = 0;

  // 計
  let total = 0;
  //小計
  let subtotal = [0, 0];

  codes.forEach((code, idx) => {
    //Number <= String
    let num = parseInt(code, 10);

    // 偶数桁と奇数桁で処理を変える
    if (idx % 2 === 0) {
      //偶数
      subtotal[1] = subtotal[1] + num;
    } else {
      //奇数
      subtotal[0] = subtotal[0] + num;
    }
  });

  // 奇数桁✕3
  subtotal[0] = subtotal[0] * 3;

  // 結果
  total = subtotal[0] + subtotal[1];

  // 10 の余剰
  result = total % 10;

  // checkdigit
  return 10 - result;
}

function calc(barcode) {
  // 最終桁を取る
  let chars = barcode.split("");

  // 最終桁を取る
  const lastCode = chars.pop();

  // チェクするコード
  const checkCode = chars.join("");

  //チェックディジット
  const result = {
    lastCode: lastCode,
    result: String(checkdigit(checkCode)),
  };

  return result;
}

function doClick() {
  const form = document.querySelector("form");
  const input = form.querySelector("#barcode-1");

  // フォームの値を取得
  const barcode = input.value;

  const result = calc(barcode);

  //結果の出力
  const p = document.querySelector("#result");

  p.textContent = `チェックディジット：${result.result}、
  最終桁：${result.lastCode}、一致する？：${
    result.lastCode === result.result ? "する" : "しない"
  }`;
}
