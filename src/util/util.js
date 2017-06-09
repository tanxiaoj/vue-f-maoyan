import axios from 'axios';

let util = {

};
util.title = function(title) {
    title = title ? title + ' - Home' : 'iView project';
    window.document.title = title;
};


// const ajaxUrl = 'http://m.maoyan.com';

util.ajax = axios.create({
    baseURL: "/api/",
    timeout: 30000 ,
    headers: {
    	"Content-Type" :'application/x-www-form-urlencoded'
    }
});

// util.ajax.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export default util;
