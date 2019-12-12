# emmetの記法について


## HTMLタグ

逆引き       | 記号 | 記法サンプル | 出力結果
-------------|------|--------------|------------------------------------------------
HTML生成     | !    | !            | html(head~bodyタグ)
下階層 | >    | header>ul>li | ＜header＞<br>＜ul＞<br>＜li＞<br>＜/li＞<br>＜/ul＞<br>＜/header＞
同階層 |   +   |          h2+p    |＜h2＞＜/h2＞<br>＜p＞＜/p＞
上階層(に戻る)             | ^     | ul>li^p |＜ul＞<br>＜li＞<br>＜/li＞<br>＜/ul＞<br>＜p＞＜/p＞
id             |   #   | h1#logo             |＜h1 id="logo"＞＜/h1＞
class             |   .   | div.box             |＜div class="box"＞＜/div＞
連番でid,classs名             |   $   |    li.-$*3          |
