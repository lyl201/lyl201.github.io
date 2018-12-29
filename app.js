const http = require ('http');
const path = require ('path');
const util = require ('util');
const exec = util.promisify (require ('child_process').exec);

http
  .createServer ((req, res) => {
    saveImg (req, res, {
      targetDir: path.join (`D:/project/silentport.github.io`, './upload'),
      repo: 'https://github.com/silentport/silentport.github.io.git',
      url: 'https://silentport.github.io',
      project: 'blog',
    });
  })
  .listen (8002, () => {
    console.log ('server is started');
  });

const saveImg = async (req, res, {targetDir, repo, url, project}) => {
  const fs = require ('fs');
  const formidable = require ('formidable');
  const form = new formidable.IncomingForm ();
  const itemDir = targetDir + '/' + project;

  if (!fs.existsSync (targetDir)) fs.mkdirSync (targetDir);
  if (!fs.existsSync (itemDir)) fs.mkdirSync (itemDir);

  form.uploadDir = itemDir;

  function uniquePath (path) {
    return path.replace (
      /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      m => `_${new Date ().getTime ()}${m}`
    );
  }

  form.parse (req, function (err, fields, files) {
    if (err) throw err;
    let keys = Object.keys (files);
    keys.forEach (key => {
      const originPath = files[key].path;
      let targetPath = path.join (path.dirname (originPath), files[key].name);
      targetPath = uniquePath (targetPath);
      fs.rename (originPath, targetPath, async err => {
        if (err) throw err;
        const imgName = targetPath.split (/\/|\\/).pop ();
        const resUrl = url + '/upload/' + project + '/' + imgName;

        await execAndConsole ('git pull');
        await execAndConsole ('git add .');
        await execAndConsole (`git commit -m "add ${imgName}"`);
        await execAndConsole ('git push');

        res.end (
          JSON.stringify ({
            url: resUrl,
          })
        );
      });
    });
  });

  const options = {
    cwd: null,
  };
  const execAndConsole = async command => {
    const {stdout, stderr} = await exec (command, options);
    console.log (command, stdout.length);
    console.log (stderr);
  };
};
