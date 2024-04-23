'use strict';
const db = uniCloud.database()
const userDb = db.collection('user')
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	let getUserById = await userDb.where({
		_id: event.userId
	}).get();
	//返回数据给客户端
	return getUserById
};
