const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true, //自动播放
    audio: [{
            name: '未来可期',
            artist: '人生值得',
            url: 'https://aod.cos.tx.xmcdn.com/storages/5ad5-audiofreehighqps/B1/49/GKwRINsH-5EFABwOWQII5-0b.m4a',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000003BZfLE0ba4fQ_1.jpg',
        },
        {
            name: '愿世间美好',
            artist: '与你环环相扣',
            url: 'http://ws.stream.qqmusic.qq.com/C4000010EnTc3omLSF.m4a?guid=436322718&vkey=3A76DACA66FFA73B274F1E766A7950248E2E66C5706A56E0C80FA9384F18C256F9E747C0C18CF4C917744FB9D6C868B05B37F51F70DB850D&uin=&fromtag=120032',
            cover: 'https://p1.music.126.net/JvCzECg-bM3ZvePvKwBAEw==/109951165390158816.jpg',
        },
        {
            name: '去有风的地方',
            artist: '遇见你',
            url: 'http://music.163.com/song/media/outer/url?id=139774.mp3',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001jmGnd4KUxDv.jpg',
        },
        {
            name: "浴室",
            artist: 'deca joins',
            url: 'https://m804.music.126.net/20241213160909/b5bdebd6d7e300445e984bf28c03e081/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/28481782164/8715/92ff/9164/95dfc2324caf5cfe7b6d1eabfaf6f3e2.m4a?authSecret=00000193bef99c3506eb0a3b1dfe9faa',
            cover: 'https://p1.music.126.net/byjfkEIOWI_RmxSKEWTPyw==/18910500486297525.jpg?param=200y200',	
        },
        {
            name: "他只是经过",
            artist: 'h3R3 / 高旭',
            url: 'https://m704.music.126.net/20241213161352/be391788fce2050b04219a4ebd6befae/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/14096453228/82c0/3c9c/68c7/f97711000773cb47111a75ca0d1b2306.m4a?authSecret=00000193befdeb6802990a32d7250006',
            cover: 'http://p2.music.126.net/wUog39IHoJb76pL0AVCFNQ==/109951165348116023.jpg?param=130y130',
        },

    ]
});
