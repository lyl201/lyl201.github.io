const host = "http://192.168.199.146:3000"
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
    fetch(`${host}/${path}`, {
        method: method,
        body: formData,
      }).then(res => {
        return res.json();
      })
      .then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
  })
 

}
