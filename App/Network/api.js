// var API_ADDRESS = 'http://api.10.0.10.221.xip.io';
var API_ADDRESS = 'http://api.segmentfault.com';

module.exports = {
  getNewestQuestion : function() {
    return API_ADDRESS + '/question/newest';
  },
  getQuestionDetail : function(id) {
    return API_ADDRESS + '/question/' + id;
  },
  getAnswers : function(id) {
    return API_ADDRESS + '/answer/show/' + id;
  },
  getNewestArticle : function() {
    return API_ADDRESS + '/article/newest';
  },
  getArticleDetail : function(id) {
    return API_ADDRESS + '/article/' + id;
  },
}