(function($){
	var defaults = {
		type: 'src', // 图片用背景显示(background)  默认 img 显示 src
		size: '', // 限制上传大小
		fileType: '', // 限制上传文件类型
		complete:function(src,data){},
	}
	$.fn.intFile = function(option){
		var option = $.extend({},defaults, option);
		this.on('change',function(el){
			var _this = this;
			var file = el.target.files || el.dataTransfer.files;
			if(option.class && !$(option.class)[0]){
				_this.value = '';
				console.log('class/id错误');
				return false;
			}
			if(file){
				var reader = new FileReader();
				reader.readAsDataURL(file[0]);
				reader.onload = function(e){
					var oImage = new Image();
					oImage.src = this.result;
					oImage.onload = function(){
						var oSrc = oImage.src;
						// 是否显示图片
						if(option.class){
							if(option.type == 'background'){
								$(option.class)[0].style.backgroundImage = 'url('+oSrc+')';
								return false;
							}
							$(option.class).attr('src',oSrc);
						}
						var res = {
							name: file[0].name,
							size: file[0].size,
							type: file[0].type,
							date: file[0].lastModifiedDate,
							path: file[0].webkitRelativePath,
							fied: file[0].lastModified,
							base64: oSrc
						}
						option.complete(res);
					}
				}
			}
		});
		return this;
	}
})(jQuery);
