define("uploader", ["webuploader"], function(webuploader){
    function uploader(selector) {
        return webuploader.create({

            // swf文件路径
            swf: "/js/Uploader.swf",

            // 文件接收服务端。
            server: "http://webuploader.duapp.com/server/fileupload.php",

            // 选择文件的按钮。可选。
            // 内部根据当前运行是创建，可能是input元素，也可能是flash.
            pick: selector,

            // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
            resize: false
        });
    }
    return uploader;
});