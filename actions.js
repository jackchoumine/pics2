/*
 * @Author      : ZhouQiJun
 * @Date        : 2024-10-24 11:21:36
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2024-10-28 11:23:34
 * @Description : 遍历文件夹下的所有文件
 */
const fs = require('fs')
const path = require('path')

const { exec } = require('child_process')

// 递归遍历目录下的所有文件
function traverseDirectory(
  dir,
  fileExtensions = ['png', 'jpg', 'jpeg', 'gif', 'svg', 'gif'],
  // 排除
  excludes = ['函数没传递参数'],
  fileList = []
) {
  const ignorePath = ['.git', 'node_modules', 'dist', '.vscode', '.idea', '.history']
  if (!ignorePath.includes(dir)) {
    // return fileList
    const files = fs.readdirSync(dir) // 读取目录中的文件和子目录

    files.forEach(file => {
      const filePath = path.join(dir, file) // 获取文件的完整路径
      const stats = fs.statSync(filePath) // 获取文件或目录的状态

      if (stats.isDirectory()) {
        // 如果是目录，递归遍历
        traverseDirectory(filePath, fileExtensions, excludes, fileList)
      } else {
        const ex = parseFileExtension(filePath)
        const parts = filePath.split('\\')
        const fileName = parts[parts.length - 1].replace(`.${ex}`, '')
        // 如果是图片文件，添加到列表
        if (fileExtensions.includes(ex) && !excludes.includes(fileName)) {
          fileList.push(filePath)
        }
      }
    })

    return fileList
  }
}

// 示例调用
const directoryPath = './'
const files = traverseDirectory(directoryPath).map(file => {
  return file.replace('\\', '/')
})
const cdn = 'https://cdn.jsdelivr.net/npm/zqj-pics/'

let startWith = ''
const allLinks = files
  .map(file => {
    const parts = file.split('/')
    const start = parts[0]
    const link = `${cdn}${file}`
    const fileName = parts[parts.length - 1]

    const mdLink = `![${fileName}](${link})`
    const code = `\`\`\`bash\n${link}\n\`\`\``
    if (!startWith || startWith !== start) {
      startWith = start
      return `## ${startWith}\n\n${code}\n${mdLink}\n`
    }

    return `\n${code}\n${mdLink}\n`
  })
  .join('')

// 写入 README.md
fs.writeFileSync('README.md', allLinks)

// console.log(allLinks)
function parseFileExtension(fileName) {
  return fileName.slice(((fileName.lastIndexOf('.') - 1) >>> 0) + 2)
}

exec('git add ./README.md', (err, stdout, stderr) => {
  // console.log({
  //   err,
  //   stdout,
  //   stderr,
  // })
  if (!err) {
    console.log('README 已经更新')
    // exec('git commit -m "更新 README"', (err, stdout, stderr) => {
    //   if (!err) {
    //     console.log('README 已经提交')
    //   }
    // })
  }
  // handle err, stdout & stderr
})
