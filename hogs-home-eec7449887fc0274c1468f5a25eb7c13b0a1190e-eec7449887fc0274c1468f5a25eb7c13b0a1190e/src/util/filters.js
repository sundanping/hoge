export function host (url) {
  const host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
  const parts = host.split('.').slice(-3)
  if (parts[0] === 'www') parts.shift()
  return parts.join('.')
}

export function timeAgo (time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return ~~(between / 60) + ' 分'
  } else if (between < 86400) {
    return ~~(between / 3600) + ' 小时'
  } else {
    return ~~(between / 86400) + ' 天'
  }
}
