// callback用関数1
const callSetTimeOut1 = () => {
  console.log('setTimeOut call1');
};
// callback用関数2
const callSetTimeOut2 = () => {
  console.log('setTimeOut call2');
};

/**
 * 非同期のサンプルコード
 * 1.コールスタックでcall1を実行
 * 2.callSetTimeOut2を5秒間待機
 * 3.for文を実行
 * 4.callSetTimeOut1を1秒間待機
 * 5.callSetTimeOut1をタスクキューに格納
 * 6.callSetTimeOut2をタスクキューに格納
 *
 */
const call1 = () => {
  setTimeout(callSetTimeOut2, 5000);
  for (let i = 0; i < 100; i++) {
    console.log(i);
  }
  setTimeout(callSetTimeOut1, 1000);
};

call1();
