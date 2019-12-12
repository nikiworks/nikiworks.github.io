# Unity3dメモ
## 3D

### 空の色変えたい
skyboxの値を変える  
Window > Lighting >Skybox  

### 設置したFBXをすり抜けないようにする
コンポーネントを追加

### 近くにいたら検知したい
+ 物にコライダーをつける
Radiusで範囲広げる（物自体に接触コライダーつけてていい）

~~~
private void OnTriggerEnter(Collider other)
    {
        //(設定されたタグが)プレイヤーオブジェクトだったら発動
        if (other.gameObject.tag == "Player")
        {
            //範囲内に入ったときの処理
        }
    }

    //トリガー　索敵範囲外に出たときに発動　Collider colliderでもok
    private void OnTriggerExit(Collider other)
    {
        //
        if (other.gameObject.tag == "Player")
        {
            //範囲外に入ったときの処理
        }
    }
~~~

### 接触した時に発火したい
+ OnCollisionEnter が便利
~~~
    void OnCollisionEnter(Collision collision)
    {
        //例えば消す処理
        Destroy(this.gameObject); //this(このスクリプト).gameObject(があたっちされているgameObject)
    }
~~~


### Playerコントローラー関連(Playerにつけるスクリプト)
####
#### プレイヤーが**に接触した時に何かしたい
+ OnControllerColliderHitが便利
~~~
private void OnControllerColliderHit(ControllerColliderHit hit)
    {
        //当たった相手のタグがBossだったら
        if (hit.gameObject.tag == "Boss")
        {
            //たとえば即ゲームオーバーになる
            SceneManager.LoadScene("GameOver");

        }
    }

~~~
