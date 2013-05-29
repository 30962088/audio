(function() {

    function createAudio(url) {
        return $('<audio src="' + url + '" style="position: absolute;left:-9999px;"></audio>').appendTo("body").get(0);
    }


    window.Player = function(id) {
        var ua = navigator.userAgent;
        var player;
        if (/iPhone|iPad/i.test(ua)) {
            player = createAudio("http://42.121.113.199:1935/vod/mp3:" + id + ".mp3/playlist.m3u8");
        } else if (/android/i.test(ua)) {
            player = createAudio("rtsp://42.121.113.199:1935/vod/mp3:"+id+".mp3");
        } else {
            var jwid = +new Date;
            $("<div id=" + jwid + "></div>").appendTo("body");
            player = jwplayer(""+jwid).setup({
                file : "rtmp://42.121.113.199/vod/mp3:"+id+".mp3",
                width:"0",
                height:"0"
            });
        }
        this.play = function(){
            player.play();
        }
        
        this.pause = function(){
            player.pause();
        }
    }
    
    
    
    
})();
