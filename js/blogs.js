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
        alert(src);


        $('#markdown_content').attr('src',src);
        var target = $("#markdown_content");
        $.ajax({
            url: target[0].attributes["src"].value,
        }).success(function(data){
            target.append(marked(data));
        }).error(function(data){
            target.append("Error 404");
        });
    });