import {
  fetchList,
  fetchCategories,
  fetchContent,
} from '../api'
import moment from 'moment'

export default {
  FETCH_LIST: ({ dispatch, commit, state }, { type, catid, count, page, imgSize, reset }) => {
    if (catid instanceof Array && type instanceof Array && catid.length === type.length) {
      return Promise.all(catid.map((id, index) => {
        return dispatch('FETCH_LIST', {
            reset,
            type: type[index],
            catid: id,
            count,
            page,
            imgSize
          })
      }))
    } else {
      imgSize = imgSize ? imgSize + '/' : ''
      return fetchList(catid, count, page)
        .then(res => {
          const list = res.map(item => {
            let dict = {
              id: item.id,
              catid: item.column_id,
              title: item.title,
              subtitle: item.subtitle,
              brief: item.brief,
              time: moment(item.publish_time_stamp * 1000).format('YYYY-MM-DD'),
              image: item.indexpic.filename ? (item.indexpic.host + item.indexpic.dir + imgSize + item.indexpic.filepath + item.indexpic.filename) : null,
              images: [],
              link: item.outlink || item.content_url
            }
            if (item.childs_data) {
              dict.images = item.childs_data.filter(img => {
                return img.filename != item.indexpic.filename
              }).map(img => {
                return img.host + img.dir + imgSize + img.filepath + img.filename
              })
            }
            return dict
          })
          if (type) {
            const mutation = reset ? 'SET_LIST' : 'PUSH_LIST'
            commit(mutation, { type, list })
          }
          return list
        })
    }
  },
  FETCH_CATEGORIES: ({ dispatch, commit, state }, { type, ids, imgSize, count }) => {
    imgSize = imgSize ? imgSize + '/' : ''
    count = count || 0
    return Promise.all([
        fetchCategories(ids),
        dispatch('FETCH_LIST', {
          reset: true,
          catid: ids,
          count,
          imgSize
        })
      ]).then(res => {
        const data_categories = res[0]
        const data_content = res[1]
        if (data_categories instanceof Array) {
          const data = data_categories.map(cat => {
            return {
              id: cat.id,
              name: cat.title,
              name_en: cat.keywords,
              image: cat.indexpic.filename ? (cat.indexpic.host + cat.indexpic.dir + imgSize + cat.indexpic.filepath + cat.indexpic.filename) : null,
              contentList: data_content.filter(item => {
                return item.catid == cat.id
              })
            }
          })
          commit('SET_CATEGORIES', { type, data })
          return data
        } else {
          return []
        }
      })
  },
  FETCH_CONTENT: ({}, id) => {
    return fetchContent(id)
      .then(res => {
        res = res[0]
        return res ? {
          id: res.id,
          title: res.title,
          brief: res.brief,
          content: res.content
        } : null
      })
  }
}
