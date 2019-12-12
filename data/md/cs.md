# Cs記法

## 文法
### 型
+
+
+
+


### 四則演算
~~~
+　-　*　/　%
~~~
#### 変数に代入計算
~~~
hensu = hensu + 1;
hensu += 1;
hensu -= 1;
hensu *= 1;
hensu /= 1;
~~~

#### インクリメント演算子
~~~
hensu++;
hensu--;
~~~

#### 文字・数値の連結（足し算）
~~~
string str1 = "hello";
string str2 = "world";
int num = 123;
string message;

// 文字列＋文字列
message = str1 + str2;
//もしくは
str1 += str2;

//文字列＋数値 = 文字列
srring message = str1 + num;

~~~

### 条件分岐
#### 注意点
##### 変数のスコープ
~~~
        int x = 1;
        if (x == 1) {
            int y = 2;
            Debug.Log(x);
        }
        Debug.Log(y); //エラーー！
~~~
if分の中で宣言した変数は、if文の外では使えない

+ start()update()両方で使いたい変数はmain内に作るべき
だけどアプリ立ち上げた瞬間に変数分のメモリを確保されるので、１００個くらい作るのは悪手

##### 込み入った条件
~~~
        int hp = 120;
        if (hp > 100){
            Debug.Log("100以上");
        }else if (hp > 110) {
            Debug.Log("110以上
        }else{
            Debug.Log("そのほか");
        }
~~~
+ 状況の時、先に真になったhp > 100の方の処理が実行される。
+ visual studioだと注意してくれる
（本来は入れ子にすべき）
~~~
if (hp > 100){
 if(hp > 110){

 }
}
~~~


### 繰り返し
for
~~~
        for (int i=0; i<5; i++) {
            Debug.Log(i); //0,1,2,3,4
        }
~~~

#### 変則的にもできる
10までの3の倍数
~~~
        for (int i=0; i<10; i+=3) {
            Debug.Log(i);
        }
~~~


## unity C# memo
## debug
#### unity consoleに出力
~~~
Debug.Log(hensu);
~~~
