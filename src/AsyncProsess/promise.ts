/**
 * promiseチェーンによるthenの実行
 * returnでpromiseを返却することでチェーンになるが、promiseを返却しないと
 * 非同期が同期で実行されない
 *
 * 1.returnでpromiseを返す場合
 * 表示順がtimeout,then2,resolve2,then3
 * dataの中身が「resolve2」になる
 *
 * 2.returnでdataを返す場合
 * 表示順がthen2,resolve1,then3,timeout
 * dataの中身が「resolve1」になる
 *
 */

new Promise((resolve, reject) => {
  console.log('task1');
  resolve('resolve1');
})
  .then((data) => {
    console.log('then1');
    console.log(data);
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('timeout');
        resolve('resolve2');
      }, 1000);
    });
    // return data;
  })
  .then((data) => {
    console.log('then2');
    console.log(data);
  })
  .then(() => {
    console.log('then3');
  });
