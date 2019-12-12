# 困った時のunityノート

## つまったところ->解決策など
### transform.forwardが思った方向に動かない
・Rigidbody>Constrains>Freeze position xyzが固定になっている
・front方向で使えるオブジェクトにしてしまうのが手っ取り早い

### EXE実行時のプロジェクト名変える
projectsettingのinspecterにでてくるnameを変更する


## unity remote
### for iphone&mac
1. usb接続
2. unity>edit>からリモート設定
3. unity remoteを起動した状態でunity再生
4. アスペクト調節

## 2D
### 画面を作成する
UI>canvas

### 次のシーンに移る
+ UnityEngine.SceneManagementの読み込み
+ 関数内でSceneManager.LoadScene ("シーン名");
例)ゲーム画面 gameManagement.cs
~~~
using UnityEngine.SceneManagement; //画面遷移に必要
//ボタンをタップ
public void PushButtonSample(){
 SceneManager.LoadScene ("SampleScene");
}
~~~
### タップで動作するイラストを配置する
例) 鍵を作る
1. ボタンを配置
+ H>Create>UI>Buttonで配置。（子要素テキストは任意で削除)
+ 名前をButtonKeyに変更
2. ボタンのデザインを設定
+ I > React Transform や Image を設定
+ 画像サイズはset sizeで揃えられる
3. スクリプトで宣言・処理を書く
+ (using UnityEngine.UIを読み込んでなければ読み込む)
+ 変数で宣言（例：public GameObject buttonKey; ）
+ 関数を作る(例：public void PushButtonKey(){}）
例)GameManager.cs
~~~
using UnityEngine.UI; //ボタンを動かすのに必要
public GameObject buttonKey; //鍵
void Start(){

}
public void PushButtonKey(){
//処理の例：buttonKey.SetActive(false);
//ここにボタンを押した後の処理を書きます
}
~~~
4. ゲームオブジェクトを割り当てる
+ H>GameManagerを選択
+ I>項目：ButtonKeyにH>ButtonKeyをドラッグ＆ドロップ
（宣言したので項目が出ている）
5. 関数をボタンに紐付ける
+ H>ButtonKeyを選択
+ I>On Clickにプログラム*1をドラッグ&ドロップ（例：GameManager.cs）
+ I>On Clickにfunctionを設定（例：PushButtonKey()）

*1 プログラムをゲームオブジェクト化する方法は を参照


## scriptを複数シーンで使う方法
共通して使っていい

## シーンを複製する方法
+ save asで名前を帰る


## 3D
