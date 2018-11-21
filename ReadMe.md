###shareWorker
可用来实现同源页面之间的数据共享

测试例子：
worker.js,监听connect方法, e.ports[0] 获取MessagePort对象，并存放队列中，监听port的message,遍历port调用postMessage方法

MDN提供的例子不需要调用start，但是测试发现不调用不行--todo


###兼容
 IE10开始支持Worker,MDN给出IE10支持ShareWorker(发现10获取不到对象)

