export const getUrlParams = function(str,name){
  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  var r = str.substr(1).match(reg);
  if (r!=null) return unescape(r[2]); return null;
}
