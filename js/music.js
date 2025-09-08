document.addEventListener('DOMContentLoaded', function() {
    // 初始化APlayer
    const ap = new APlayer({
        container: document.getElementById('aplayer'),
        fixed: true,
        autoplay: false,
        audio: [
            {
                name: '歌曲加载中...',
                artist: '请稍候',
                url: 'about:blank',
                cover: 'https://picsum.photos/300/300?random=1'
            }
        ]
    });
    
    // 使用MetingAPI获取歌单
    fetch(`https://api.i-meto.com/meting/api?server=tencent&type=playlist&id=9480497824`)
        .then(response => response.json())
        .then(data => {
            // 更新播放列表
            ap.list.clear();
            data.forEach(song => {
                ap.list.add({
                    name: song.name,
                    artist: song.artist,
                    url: song.url,
                    cover: song.cover
                });
            });
            
            // 如果有歌曲，播放第一首
            if (data.length > 0) {
                ap.list.switch(0);
            }
        })
        .catch(error => {
            console.error('获取歌单失败:', error);
            ap.notice('歌单加载失败，请刷新页面重试', 3000);
        });
});