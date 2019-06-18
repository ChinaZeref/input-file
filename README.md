# input-file
input-file上传图片+预览

调用方法：
 var oInt = $('#file').intFile({
    class: '#image', // 预览缩略图 - 为空不显示
    type: '',// 显示类型 background(背景图) 默认img标签图片
    complete:function(res){ // 图片上传提交完成后返回值
        res.base64;
        res.name;
        res.size;
        res.type;
        res.date;
        res.path;
        res.fied;
    }
 })
