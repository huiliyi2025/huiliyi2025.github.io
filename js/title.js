//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    //离开当前页面时标签显示内容
    document.title = "w(ﾟДﾟ)w 不要走！再陪陪我嘛！";
    clearTimeout(titleTime);
  } else {
    //返回当前页面时标签显示内容
    document.title = "♪(^∇^*)你回来啦！" + OriginTitile;
    //两秒后变回正常标题
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 2000);
  }
});