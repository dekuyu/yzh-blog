import combineRoutes from 'koa-combine-routers'
import fs from 'fs'
import path from 'path'

// 目录路径
const modulesDir = path.join(__dirname, 'modules');
// 遍历目录中的文件
const modules = fs.readdirSync(modulesDir).reduce((items, file) => {
  const filePath = path.join(modulesDir, file);
  // 判断文件是否为 JavaScript 文件
  if (fs.statSync(filePath).isFile() && path.extname(file) === '.js') {
    const module = require(filePath);
    items.push(module.default);
  }
  return items;
}, []);


module.exports = combineRoutes(
  modules
)