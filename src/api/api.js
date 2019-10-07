import axios from 'axios';
import Qs from 'qs';
import {setCookie} from './../js/cookieUtil'

axios.defaults.baseURL = 'http://localhost:80/demo';
axios.defaults.headers.common['Authorization'] = "";//sessionStorage.getItem('token');
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
let base = 'http://localhost:80/demo';

//export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

export const requestLogin = params => { 
	return axios.post(`${base}/login`, Qs.stringify(params)).then(function (response) { 
		debugger;
	axios.defaults.headers.common['Authorization'] =response.data.token; 
	setCookie("token",response.data.token);
	
	return response.data;}).catch(function (error) {alert("未知错误，请联系管理员！")});};
//export const requestLogin = params => { return axios.post(`${base}/login`, params).then(function (response) { axios.defaults.headers.common['Authorization'] =response.data.token; return response.data}).catch(function (error) {alert("error")});};

export const getUserList = params => { return axios.get(`${base}/user/listpage`, {params :params} ).then(function (response){ return response.data;}).catch(function (error) {alert("error")}); };

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };