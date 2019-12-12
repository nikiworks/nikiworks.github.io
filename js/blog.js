$(function() {

  //tagを抽出
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


    $.getJSON("./data/data.json", function(data){
        for(var i in data){
          if(tag === undefined){
            //全取得
            $(".bloglist").append(
              "<li>" +
                "<a href='./data.html?src=" + data[i].id + "' >" + 
                  "<img src='http://placehold.it/600x360' alt='"+ data[i].tag +"' />" + 
                "</a>"+
                "<span><a href='./blog.html?tag=" + data[i].tag + "' >"+ data[i].tag +"</a></span>" +            
                "<a href='./data.html?src=" + data[i].id + "' >" + data[i].title + "</a>" +
              "</li>");
          }else{
            //タグ検索
            if(tag == data[i].tag){
              $(".bloglist").append(
              "<li>" +
                "<a href='./data.html?src=" + data[i].id + "' >" + 
                  "<img src='http://placehold.it/600x360' alt='"+ data[i].tag +"' />" + 
                "</a>"+
                "<a href='./data.html?src=" + data[i].id + "' >" + data[i].title + "</a>" +
              "</li>");            
            }              
          }

        }
    });

});