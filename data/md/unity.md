# unityについてのメモ

## 操作画面
[![https://gyazo.com/898fa48762c3d7ebcaa5402989668b04](https://i.gyazo.com/898fa48762c3d7ebcaa5402989668b04.png)](https://gyazo.com/898fa48762c3d7ebcaa5402989668b04)

### scene画面内の操作

|操作|効果|補足|
| -- | -- | -- |
| 右クリック | ３６０度に視点を回転 |      |
| 右クリックしながらwasd | 前後左右に移動|      |
| マウスホイール押し込み | 垂直に移動 | 左上のハンドボタンでも可能  |

#### 注意点
再生ボタンを押したままで編集していると、再生ボタン押したときにリセットされる。


### 上部操作アイコン

+ 手のマーク:垂直に移動
+ 左上十字マーク:画面移動
+ 回転マーク:オブジェクト回転
+ 拡大縮小マーク:オブジェクト拡大縮小  
  
### 画面左　ヒエラルキービュー
シーン内のゲームオブジェクトなどを一覧で表示する場所
#### ゲームオブジェクトについて
注意：カメラもライトもゲームオブジェクト

### 画面右　インスペクタータブ
今選択しているものの詳細が表示する場所
#### ゲームオブジェクトのインスペクター
コンポーネントが表示されている
基本的には４つ
+ 一大きさ角度
+ メッシュ
+ コライダー　形の当たり判定
+ メッシュレンダー　形を表示する機能

##### #メンバ変数をインスペクタータブでゲームオブジェクトと結びつけるといい理由
+ メンバ変数を通してゲームオブジェクトを操作することができる
+ ゲームオブジェクトを変更するときもプログラミングではなくGUIで変更できる
インスペクター上の項目の外観は型によって変わる

##### 上記以外によく使いそうなコンポーネント

+ 重力コンポーネント *物理的な動きを許可する*  ( add > physics > rigit compornent )
  



### 画面下部
アセットを格納していく場所でドラッグ＆ドロップでインポート可能。  

オブジェクトの色を変更する際はアセット内にマテリアルを作成して色を設定しておくらしい。


## note

### gameObjectのscript連携のチェックを外すと
使われないプログラムになる

