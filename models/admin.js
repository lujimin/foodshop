var mongodb=require('./db');
var User=require('./user');
var Post=require('./post');

function Admin(user){
	this.name=user.name;
	this.password=user.password;
};

module.exports=Admin;
//get admin 

Admin.get = function(name, callback){//读取用户信息
  //打开数据库
  mongodb.open(function(err, db){
    if(err){
      return callback(err);
    }
    //读取 admin 集合
    db.collection('admin', function(err, collection){
      if(err){
        mongodb.close();
        return callback(err);
      }
      //查找用户名 name 值为 name文档
      collection.findOne({
        "username": name
      },function(err, doc){
        mongodb.close();
        if(doc){

          callback(null,doc);//成功！返回查询的管理员信息
	  //       console.log(doc);
  } else {
          callback(err, null);//失败！返回null
        }
      });
    });
  });
};

//获取用户列表
Admin.getUserList = function(params, callback){
  //打开数据库
  mongodb.open(function(err, db){
    if(err){
      return callback(err);
    }
    //读取 users 集合
    db.collection('users', function(err, collection){
      //数据库分页
      var page = parseInt(params.page);
      var size = parseInt(params.size);
      page = (page-1)*size;
      console.log(page + "  " + size);
      if(err){
        mongodb.close();
        return callback(err);
      }
      //查找用户名 name 值为 name文档
      collection.find().toArray(function(err, doc){
        //console.log(doc);
        mongodb.close();
        if(doc){
          callback(null,doc);//成功！返回查询的管理员信息
        } else {
          callback(err, null);//失败！返回null
        }
      });
    });
  });
}
//更新用户信息
Admin.updateUser = function(params, callback){
    User.update(params,function(err, result){
        if(!result){
          callback(err, null);
        }else{
          callback(null, result)
        }
    });
}
//删除用户
Admin.removeUser = function(params, callback){
    User.remove(params,function(err, result){
        if(err){
          callback(err, null);
        }else{
          callback(null, result)
        }
    });
}
//获取用户列表
Admin.getPostsList = function(params, callback){
  //打开数据库
  mongodb.open(function(err, db){
    if(err){
      return callback(err);
    }
    //读取 users 集合
    db.collection('posts', function(err, collection){
      //数据库分页
      var page = parseInt(params.page);
      var size = parseInt(params.size);
      page = (page-1)*size;
      console.log(page + "  " + size);
      if(err){
        mongodb.close();
        return callback(err);
      }
      //查找用户名 name 值为 name文档
      collection.find().toArray(function(err, doc){
        //console.log(doc);
        mongodb.close();
        if(doc){
          callback(null,doc);//成功！返回查询的管理员信息
        } else {
          callback(err, null);//失败！返回null
        }
      });
    });
  });
}

//删除商品
Admin.removePosts = function(params, callback){
    console.log(params);
    Post.remove(params,function(err, result){
        if(err){
          callback(err, null);
        }else{
          callback(null, result)
        }
    });
}

