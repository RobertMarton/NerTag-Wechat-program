# NerTag-Wechat-program
🆕  NerTag Wechat program
### NerTag标注小程序说明

1. 开发

   + 基于微信小程序开发
   + 使用云开发
     + 工具：微信开发者工具Stable v1.03

2. 使用

   + 点击“开始标注"进入标注页面

     ![image-20201024100140535](/Users/Leo/Library/Application Support/typora-user-images/image-20201024100140535.png)

     ![image-20201024100231648](/Users/Leo/Library/Application Support/typora-user-images/image-20201024100231648.png)

   + 在手机上选中要标记的字段并复制

     ![IMG_3508](/Users/Leo/Downloads/IMG_3508.PNG)

   + 选择认为正确的标注类别

     ![IMG_3509](/Users/Leo/Downloads/IMG_3509.PNG)

   + 将第一步复制的字段粘贴至指定区域之后会自动生成标注后的文本

     ![IMG_3510](/Users/Leo/Downloads/IMG_3510.PNG)

     ![IMG_3511](/Users/Leo/Downloads/IMG_3511.PNG)

   + 点击提交标注，数据已经上传至后台服务器

     ![image-20201024101633131](/Users/Leo/Library/Application Support/typora-user-images/image-20201024101633131.png)

   + 标注完成界面

     ![image-20201024104728070](/Users/Leo/Library/Application Support/typora-user-images/image-20201024104728070.png)

   + 数据删改(option如果需要删改标错的数据 )

     + 在指定位置填写数据id，然后点击相应button在后台数据库中删除指定标注数据

     ![image-20201024101906696](/Users/Leo/Library/Application Support/typora-user-images/image-20201024101906696.png)

     + 在指定位置填写数据id和要输入的修改，然后点击相应button在后台数据库中修改指定标注数据

     ![image-20201024102021265](/Users/Leo/Library/Application Support/typora-user-images/image-20201024102021265.png)

     ![image-20201024102350508](/Users/Leo/Library/Application Support/typora-user-images/image-20201024102350508.png)

     + 数据库标注结果导出

     点击导出从数据库中导出标注完成的文件

     ![image-20201024102733889](/Users/Leo/Library/Application Support/typora-user-images/image-20201024102733889.png)

3. 附录

   + 添加数据至数据库例子

     本地：

     ![image-20201024103645051](/Users/Leo/Library/Application Support/typora-user-images/image-20201024103645051.png)

     服务器：

     ![image-20201024103726895](/Users/Leo/Library/Application Support/typora-user-images/image-20201024103726895.png)

   + 删除数据库数据例子

     本地：

     ![image-20201024103928555](/Users/Leo/Library/Application Support/typora-user-images/image-20201024103928555.png)

     服务器刷新后找不到该id对应的数据：

     ![image-20201024104007288](/Users/Leo/Library/Application Support/typora-user-images/image-20201024104007288.png)

   + 修改数据库中数据例子

     本地：

     ![image-20201024104250952](/Users/Leo/Library/Application Support/typora-user-images/image-20201024104250952.png)

     服务器：

     ![image-20201024104326294](/Users/Leo/Library/Application Support/typora-user-images/image-20201024104326294.png)

   + 本地查询服务器数据

     本地：

     ![image-20201024104416440](/Users/Leo/Library/Application Support/typora-user-images/image-20201024104416440.png)
