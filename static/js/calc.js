// form, resultをid属性から取得
const form = document.getElementById("calc-form");
const result = document.getElementById("result");

/**
 * 台形の面積を計算
 * @param {object} data {top, bottom, height}
 * @returns 面積
 */
// 発展問題
function calculation(data = {}) {
  let area = 0;
  // 台形の面積を求める関数を作ってみよう！！
  return area;
}

// formの送信イベントに反応して計算処理
form.addEventListener("submit", (event) => {
  // formタグのactionの作用を無効化
  event.preventDefault();

  // 送信イベントに含まれるデータ(=target)からname属性.valueで値を取得
  const top = Number(event.target.top.value);
  const bottom = Number(event.target.bottom.value);
  const height = Number(event.target.height.value);

  // 計算用の関数から値を受け取る
  const res = calculation({ top, bottom, height });

  // 計算後の値 > 0であれば、計算結果を表示
  result.textContent = res > 0 ? `${res}` : "自然数を入力してください";
});
