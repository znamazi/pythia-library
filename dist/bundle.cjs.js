'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

// import axios from 'axios'
var axios = require('axios');

var Api = /*#__PURE__*/function () {
  function Api() {
    _classCallCheck(this, Api);

    this.client = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com/',
      timeout: 5000,
      headers: {
        'X-Custom-Header': 'foobar'
      }
    });
  }

  _createClass(Api, [{
    key: "get",
    value: function get(url) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return this.client.get(url, config);
    }
  }, {
    key: "post",
    value: function post(url, params) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      return this.client.post(url, params, config);
    }
  }, {
    key: "delete",
    value: function _delete(url) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return this.client["delete"](url, config);
    }
  }, {
    key: "patch",
    value: function patch(url, params) {
      return this.client.put(url, params);
    }
  }, {
    key: "put",
    value: function put(url, params) {
      return this.client.put(url, params);
    }
  }]);

  return Api;
}();

var GetData = function GetData() {
  var apiInstance = new Api();
  apiInstance.get('/posts').then(function (_ref) {
    var data = _ref.data;
    console.log('Result Axios Get: ', data);
  })["catch"](function (error) {
    return console.log(error);
  });
};

exports.GetData = GetData;
