var crypto = require('crypto');
var {Base64} = require("./base64");

/**
 * 加密方法
 * @param key 加密key
 * @param iv       向量
 * @param data     需要加密的数据
 * @returns string
 */
var encrypt = function (key, iv, data) {
    var cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
    var crypted = cipher.update(data, 'utf8', 'binary');
    crypted += cipher.final('binary');
    crypted = Buffer.from(crypted, 'binary').toString('base64');
    return crypted;
};

/**
 * 解密方法
 * @param key      解密的key
 * @param iv       向量
 * @param crypted  密文
 * @returns string
 */
var decrypt = function (key, iv, crypted) {
    crypted = Buffer.from(crypted, 'base64').toString('binary');
    var decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
    var decoded = decipher.update(crypted, 'binary', 'utf8');
    decoded += decipher.final('utf8');
    return decoded;
};

//var key = '751f621ea5c8f930';
var key = '751f621ea5c8f930';
console.log('加密的key:', key.toString('hex'));
var iv = '2624750004598718';
console.log('加密的iv:', iv);
var data = "Hello, nodejs. 演示aes-128-cbc加密和解密";
console.log("需要加密的数据:", "zheng");
//var crypted = encrypt(key, iv, "zheng");
var crypted = encrypt(key, iv, "zheng\r\nfjdkaldfasafsdjadjsaldsafjaskfldafdsjadfla")
console.log("数据加密后:", crypted);
var dec = decrypt(key, iv, crypted);
console.log("数据解密后:", dec);
console.log("数据解密后:", dec);
