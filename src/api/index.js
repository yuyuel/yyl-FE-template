import request from '@/utils/request'

export function getRequest(query) {
  return request({
    url: 'api/postXXX',
    method: 'get',
    params: query
  })
}

export function postRequest(data) {
  return request({
    url: 'api/getXXX',
    method: 'post',
    data
  })
}
