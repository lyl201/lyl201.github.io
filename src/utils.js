const host = "http://localhost:3000"
// export const queryString = (data) => {
//   return Object.keys(data).map(key => {
//     return `${key}=${encodeURIComponent(data[key])}`
//   }).join('&')
// }
export const request = (params) => {
  const { path, data, method } = params
  const formData = new FormData(); 
  
  if (path.startsWith('upload')) {
    // 处理文件上传
    const type = Object.keys(data)[0]
    formData.append(type, data[type])   
  } else {
    Object.keys(data).forEach(key => {
        formData.append(key, data[key])
    })
  }
  return new Promise((resolve, reject) => {

    const opt = method === 'POST' ? {
      method: method,
      body: formData,
    } : {
      method: method,
    };
    
    fetch(`${host}/${path}`, opt).then(res => {
        return res.json();
      })
      .then(res => {
        if (res.info && res.info.status) {
          resolve({...res.data, msg: res.info.msg});
        } else {
          reject(res.info && res.info.msg)
        }     
      }).catch(err => {
        reject('请求错误');
      })
  })
 

}
