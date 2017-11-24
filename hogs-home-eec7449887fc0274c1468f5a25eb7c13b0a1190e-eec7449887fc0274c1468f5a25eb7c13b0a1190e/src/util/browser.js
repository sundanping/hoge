(function () {
  var ua = window.navigator.userAgent.toLowerCase()
  var isOlderIE = /MSIE\s([0-9]\.+)/.test(ua)
  var container = document.createElement('div')
  console.log(ua)
  if (isOlderIE) {
    container.style.textAlign = 'center'
    container.style.lineHeight = '30px'
    container.style.fontSize = '14px'
    container.style.backgroundColor = '#ffffa9'
    container.innerHTML = '很抱歉提醒您，请<a href="https://support.microsoft.com/zh-cn/help/17621/internet-explorer-downloads" target="_blank">升级</a>您的 IE 浏览器，或使用 <a href="http://rj.baidu.com/soft/detail/14744.html" target="_blank">Chrome 谷歌浏览器</a>等现代浏览器访问本站'
    document.body.insertBefore(container, document.body.firstChild)
  }
})()