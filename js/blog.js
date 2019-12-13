$(function() {
  //tagを抽出------------------
  var arg  = new Object;
  url = location.search.substring(1).split('&');
  for(i=0; url[i]; i++) {
      var k = url[i].split('=');
      arg[k[0]] = k[1];
  }
  var tag = arg.tag;
  if(tag === undefined){
    $(".bloglist").append("<p>記事一覧</p>");
  }
  else{
    $(".bloglist").append("<p>"+tag+"タグの記事</p>");
  }
  //tagを抽出------------------

    $.getJSON("./data/data.json", function(dataname){
        for(var i in dataname){
          var path ="./data/md/"+ dataname[i].id +".md";
          var forCount=i;
          (function(i){
          $.get(path, function(data, status, xhr) {
            console.log(path);
              if (status == "success") {

                var arr = data.split(/\r\n|\r|\n/);
                var h;  //ブログタイトル
                for( var p=0; p < arr.length; p++) {
                  if (!arr[p]) {
                    continue;
                  }else{
                    h = arr[p];
                    break;
                  }
                };
                h = h.replace( /#/g , "" );


                if(tag === undefined){
                  //全取得
                  $(".bloglist").append(
                    "<li>" +
                      "<a href='./data.html?src=" + dataname[i].id + "' >" +
                        "<img src='http://placehold.it/600x360' alt='"+ dataname[i].tag +"' />" +
                      "</a>"+
                      "<span><a href='./blog.html?tag=" + dataname[i].tag + "' >"+ dataname[i].tag +"</a></span>" +
                      "<a href='./data.html?src=" + dataname[i].id + "' >" + h +"</a>" +
                    "</li>");
                }else{
                  //タグ検索
                  if(tag == dataname[i].tag){
                    $(".bloglist").append(
                    "<li>" +
                      "<a href='./data.html?src=" + dataname[i].id + "' >" +
                        "<img src='http://placehold.it/600x360' alt='"+ dataname[i].tag +"' />" +
                      "</a>"+
                      "<a href='./data.html?src=" + dataname[i].id + "' >" + h +"</a>" +
                    "</li>");
                  }
                }




              }
          });
        })(forCount);




        }
    });

});
