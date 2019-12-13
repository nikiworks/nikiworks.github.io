/**********************************
自前markdown変換ツール

タグとかもカスタマイズできるようにしたい
ついでに多重配列に変換してサイドバー用のリストも出したい
h2等id連番でつけたりしたい ページ内リンクできるように


**********************************/
function get_args(){
    var src;
    var args = new Object();
    var query = window.location.search.substring(1); 
    var pairs = query.split("&");
    for(var i = 0; i < pairs.length; i++) { 
        var pos = pairs[i].indexOf('=');
        if (pos == -1) continue;
        var argname = pairs[i].substring(0,pos);
        var value = pairs[i].substring(pos+1);
        value = decodeURIComponent(value);
        args[argname] = value;
    } 
    var src=args.src;
    return(src);
}

    $(document).ready(function(){
        
        var path;
        var src;
        var defsrc;

        path="./data/md/";
        src = get_args();
        defsrc="default.md";

        if(src){
            src = path + src +".md"; //src= args[src]+".markdown"
        }else{
            src = path + defsrc;
        }


        $('#data').attr('src',src);
        var target = $("#data");
        $.ajax({
            url: target[0].attributes["src"].value,
        }).success(function(data){
          //記事表示
            target.append(marked(data));
          //リスト表示
              var arr = data.split(/\r\n|\r|\n/);
              var li;  
              var cnt;
              var counter = function(str,seq){return str.split(seq).length - 1;}
              for( var p=0; p < arr.length; p++) {
                if (arr[p].match(/#/)) {
                  li = arr[p];
                  li = li.replace( /#/g , "" ); //#を削除
                  cnt =counter(arr[p],"#");
                  switch( cnt ) {
                    case 1:
                      $(".data-sub").append("<h1>"+li+"</h1>");
                    break;
                    case 2:
                      $(".data-sub").append("<h2>"+li+"</h2>");                    
                    break;                    
                  }
                                 

                }
              };
              

        }).error(function(data){
            target.append("Error 404");
        });
    });