const question = 'ゲーム史上、最も売れたゲーム機は次のうちどれ？';
const answers = [
  'スーパーファミコン',
  'プレイステーション2',
  'ニンテンドースイッチ',
  'ニンテンドーDS'
];
const correct = 'ニンテンドーDS';

const $button = document.getElementsByTagName('button');

let buttonIndex = 0;
let buttonLength = $button.length;
while(buttonLength > buttonIndex){
  $button[buttonIndex].textContent = answers[buttonIndex];
  buttonIndex++;
}

let listenIndex = 0;
while(listenIndex < buttonLength){
  $button[listenIndex].addEventListener('click', (e) => judge(e, listenIndex));
  listenIndex++;
}

function judge(e, answerIndex){
  if(e.target.textContent === correct){
    window.alert('正解！');
  }else{
    window.alert('不正解！');
  }
}
