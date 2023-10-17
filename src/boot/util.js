const saveStorage = function(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
};

const getStorage = function(key, item) {
  if( localStorage.getItem(key) && item) {
      const data = JSON.parse(localStorage.getItem(key))
      return data[item]
  }
  else if(localStorage.getItem(key)) {
     return localStorage.getItem(key)
  }
};

const clearStorage = function(key='false') {
  if(key) {
      localStorage.removeItem(key);
  } else {
      localStorage.clear();
  }
}

const getCookie =  function (name) {
  // var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  // if (arr = document.cookie.match(reg))
  //   return (arr[2]);
  // else
  //   return null;
  // return '3a10d7b0-2511-4af3-a647-75c130305cb9'
}

export {getStorage, saveStorage, clearStorage, getCookie}