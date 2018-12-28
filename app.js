const http = require('http');
const path = require('path')
const cp = require('child_process')
http.createServer((req, res) => {
  // console.log(req.headers);
  saveImg(req, res, path.join(`D:/project/silentport.github.io`, './upload'))

}).listen(8002, () => {
  console.log('server is started')
})



const saveImg = async (req, res, targetDir) => {

  const fs = require('fs')
  const formidable = require('formidable')
  const form = new formidable.IncomingForm();

  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir)

  form.uploadDir = targetDir;

  function uniquePath(path) {
    return path.replace(/\.(png|jpe?g|gif|svg)(\?.*)?$/, m => `_${(new Date()).getTime()}${m}`);
  }

  form.parse(req, function (err, fields, files) {
    if (err) throw err;
    let keys = Object.keys(files);
    keys.forEach(key => {
      const originPath = files[key].path;
      let targetPath = path.join(path.dirname(originPath), files[key].name);
      targetPath = uniquePath(targetPath)
      fs.rename(originPath, targetPath, async err => {

        if (err) throw err;
        res.writeHead(200, {
          "Content-Type": "text/html;charset=UTF8"
        });
        res.end('图片上传并改名成功！');


        // const cp = require('child_process')

        // const ls = cp.exec('git add .', (err, stdout, stderr) => {
        //   if (!err) {
        //     console.log(stdout)

        //   } else {
        //     console.log(err);
        //   }
        // })

        // ls.stdout.pipe(process.stdout)

        // ls.stderr.on('data', (data) => {
        //   console.log('stderr: ', data)
        // })

        // ls.on('close', (code) => {
        //   console.log(`子进程退出码：${code}`);
        // })

        await exec('git add .');
        await exec(`git commit -m "add ${targetPath.split('/').pop()}"`);
        await exec('git push')


      })
    })
  });
}

const exec = (command) => {

  return new Promise((resolve, reject) => {
    cp.exec(command, (err, out, stderr) => {
      if (err) {
        console.log('stderr:', stderr);
        reject(stderr);
        return;
      }
      console.log('stdout', out);
      resolve(cp)
    })
  })

}