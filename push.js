const { exec } = require('child_process')
let interval = 5000
repeat((stop, times) => {
  exec('git push', (err, stdout, stderr) => {
    // console.log({
    //   err,
    //   stdout,
    //   stderr,
    // })
    if (!err) {
      console.log('提交已推送', times)
      stop()
    } else {
      console.log('推送失败', times)
      console.log(err.message)
      if (times === 30) {
        interval = 30 * 1000
        console.log('\n 30 秒后继续尝试推送')
      } else if (times === 20) {
        interval = 20 * 1000
        console.log('\n 20 秒后继续尝试推送')
      } else if (times === 10) {
        interval = 10 * 1000
        console.log('\n 10 秒后继续尝试推送')
      } else {
        interval = 5 * 1000
        console.log('\n 5 秒后继续尝试推送')
      }
    }
  })
})

function repeat(fn) {
  let hasStopped = false
  let timer2
  let repeatTimes = 1
  fn(stop, repeatTimes)
  let timer = setTimeout(function repeatMe() {
    if (hasStopped) {
      return
    }
    ++repeatTimes
    fn(stop, repeatTimes)
    timer2 = setTimeout(repeatMe, interval)
  }, interval)
  return stop
  function stop() {
    hasStopped = true
    clearTimeout(timer)
    clearTimeout(timer2)
  }
}
