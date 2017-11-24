// this is aliased in webpack config based on server/client build
import { createAPI } from 'create-api'
import queryString from 'query-string'

const logRequests = !!process.env.DEBUG_API

const api = createAPI({
  baseURL: 'http://www.hoge.cn/m2o'
})
// warm the front page cache every 15 min
// make sure to do this only once across all requests
if (api.onServer) {
  warmCache()
}

function warmCache () {
  // warmCache url
  setTimeout(warmCache, 1000 * 60 * 15)
}

function fetch (method, url, data) {
  data = data || {}
  const cachedKey = url + '?' + queryString.stringify(data)
  logRequests && console.log(`fetching "${cachedKey}" ...`)
  const cache = api.cachedItems
  if (cache && cache.has(cachedKey)) {
    logRequests && console.log(`cache hit for "${cachedKey}" .`)
    return Promise.resolve(cache.get(cachedKey).data)
  } else {
    return new Promise((resolve, reject) => {
      if (method === 'get') data = { params: data }
      api.fetch[method](url, data)
        .then(res => {
          let cacheData = {
            data: res.data,
            __lastUpdated: Date.now()
          }
          cache && cache.set(cachedKey, cacheData)
          logRequests && console.log(`fetched "${cachedKey}" .`)
          resolve(res.data)
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
    })
  }
}

export function fetchList (catid, count, page = 0) {
  return fetch('get', '/pub/pub.php', {
    column_id: catid,
    count: count || 6,
    offset: page * count,
  })
}

export function fetchCategories (ids) {
  return fetch('get', '/pub/col.php', {
    id: ids,
  })
}

export function fetchContent (id) {
  return fetch('get', '/pub/content.php', {
    id: id,
  })
}


// export function fetchItem (id) {
//   return fetch(`item/${id}`)
// }

// export function fetchItems (ids) {
//   return Promise.all(ids.map(id => fetchItem(id)))
// }

