function createPage(pageSize, buttons, total, kind) {
    $(".pagination").jBootstrapPage({
        pageSize : pageSize,
        total : total,
        maxPageButton:buttons,
        onPageClicked: function(obj, pageIndex) {
        	if (kind == 1) {
        		userKind(pageIndex);
        	}else if (kind == 2){
        		postKind(pageIndex);
        	}else{
        		orderKind(pageIndex);
        	}
            
        }
    });
}

function userKind(pageIndex){
	$.ajax({
	            	type:"GET",
	            	//预留，数据库分页
	            	url:"http://localhost:8888/admin/userList?page="+(pageIndex+1)+"&size=10",
	            	success:function(data){
	            			var html;
          					for (var i = 0; i < data.doc.length; i++) {
          						var uid = data.doc[i].uid;
          						var name = data.doc[i].name;
	          					var role = data.doc[i].role;
	          					if(role==1){
	          						role="买家";
	          					}else{
	          						role="卖家";
	          					}
	          					var email = data.doc[i].email;
	          					var phone = data.doc[i].contact;
	          					var time = data.doc[i].time.minute;
	          					if(html){
	          						html = html + "<tr><td class=\"center\"><label><input type=\"checkbox\" class=\"ace\" /><span class=\"lbl\"></span></label></td><td><a href=\"#\">"+name+"</a></td><td>"+role+"</td><td class=\"hidden-480\">"+email+"</td><td>"+phone+"</td><td class=\"hidden-480\"><span class=\"label label-primary\" style=\"font-size:15px;\">"+time+"</span></td><td class=\"hidden-480\"><a href=\"javascript:void(0)\" onclick=\"updateUser('"+name+"')\" class=\"btn btn-small btn-success \">编辑</a>&nbsp;<a href=\"javascript:void(0)\" onclick=\"deleteUser('"+name+"')\" class=\"btn btn-small btn-success \">删除</a></td></tr>";
          						}else{
          							html ="<tr><td class=\"center\"><label><input type=\"checkbox\" class=\"ace\" /><span class=\"lbl\"></span></label></td><td><a href=\"#\">"+name+"</a></td><td>"+role+"</td><td class=\"hidden-480\">"+email+"</td><td>"+phone+"</td><td class=\"hidden-480\"><span class=\"label label-primary\" style=\"font-size:15px;\">"+time+"</span></td><td class=\"hidden-480\"><a href=\"javascript:void(0)\" onclick=\"updateUser('"+name+"')\" class=\"btn btn-small btn-success \">编辑</a>&nbsp;<a href=\"javascript:void(0)\" onclick=\"deleteUser('"+name+"')\" class=\"btn btn-small btn-success \">删除</a></td></tr>";
          						}
          					}
          					document.getElementById("contextBody").innerHTML=html;
          						//$("#contextBody").innerHTML="";
          				//createPage(10,5,data.totalSize);
	            	}
          		});
}

function postKind(pageIndex){
	$.ajax({
	            	type:"GET",
	            	//预留，数据库分页
	            	url:"http://localhost:8888/admin/postsList?page="+(pageIndex+1)+"&size=10",
	            	success:function(data){
	            			var html;
          					for (var i = 0; i < data.doc.length; i++) {
          						var pid = data.doc[i].pid;
          						var name = data.doc[i].name;
	          					var boss = data.doc[i].boss;
	          					var pic = data.doc[i].pic;
	          					var price = data.doc[i].price;
	          					var iprice = data.doc[i].iprice;
	          					var fbrand = data.doc[i].fbrand;
	          					var mbrand = data.doc[i].mbrand;
	          					var lbrand = data.doc[i].lbrand;
	          					var desp = data.doc[i].desp;
	          					var time = data.doc[i].time.minute;
	          					var sold = data.doc[i].sold;
	          					var state = data.doc[i].state;
	          					if(state==1){
	          						state="在售";
	          					}else{
	          						state="下架";
	          					}
	          					if(html){
	          						html = html + "<tr><td class=\"center\"><label><input type=\"checkbox\" class=\"ace\" /><span class=\"lbl\"></span></label></td><td><img style=\"width:50px;height:50px\" src=\""+pic+"\"/></td><td>"+name+"</td><td>"+boss+"</td><td>"+price+"</td><td>"+iprice+"</td><td>"+fbrand+"</td><td>"+mbrand+"</td><td>"+lbrand+"</td><td>"+desp+"</td><td>"+time+"</td><td>"+sold+"</td><td>"+state+"</td><td class=\"hidden-480\"><a href=\"javascript:void(0)\" onclick=\"deletePosts('"+pid+"')\" class=\"btn btn-small btn-success \">删除</a></td></tr>";
	          					}else{
          							html ="<tr><td class=\"center\"><label><input type=\"checkbox\" class=\"ace\" /><span class=\"lbl\"></span></label></td><td><img style=\"width:50px;height:50px\" src=\""+pic+"\"/></td><td>"+name+"</td><td>"+boss+"</td><td>"+price+"</td><td>"+iprice+"</td><td>"+fbrand+"</td><td>"+mbrand+"</td><td>"+lbrand+"</td><td>"+desp+"</td><td>"+time+"</td><td>"+sold+"</td><td>"+state+"</td><td class=\"hidden-480\"><a href=\"javascript:void(0)\" onclick=\"deletePosts('"+pid+"')\" class=\"btn btn-small btn-success \">删除</a></td></tr>";
          						}
          					}
          					document.getElementById("contextBody").innerHTML=html;
	            	}
          		});
}

function orderKind(pageIndex){
	$.ajax({
	            	type:"GET",
	            	//预留，数据库分页
	            	url:"http://localhost:8888/admin/ordersList?page="+(pageIndex+1)+"&size=10",
	            	success:function(data){
	            			var html;
          					for (var i = 0; i < data.doc.length; i++) {
          						var oid = data.doc[i].oid;
          						var pid = data.doc[i].pid;
          						var gName = data.doc[i].name;
	          					var pic = data.doc[i].pic;
	          					var price = data.doc[i].price;
	          					var buyer = data.doc[i].buyer;
	          					var seller = data.doc[i].seller;
	          					var ip = data.doc[i].ip;
	          					var phone = data.doc[i].phone;
	          					var who = data.doc[i].who;
	          					var time = data.doc[i].time.minute;
	          					var amount = data.doc[i].amount;
	          					var state = data.doc[i].state;
	          					switch(state){
	          						case 1 : state="待处理"; break;
	          						case 2 : state="待发货"; break;
	          						case 3 : state="已发货"; break;
	          						case 4 : state="已收货"; break;
	          						case 5 : state="已付款"; break;
	          						case 6 : state="已取消"; break;
	          						default: state="未知"
	          					}
	          					if(html){
	          						html = html + "<tr><td class=\"center\"><label><input type=\"checkbox\" class=\"ace\" /><span class=\"lbl\"></span></label></td><td>"+oid+"</td><td><img style=\"width:50px;height:50px\" src=\""+pic+"\"/></td><td>"+gName+"</td><td>"+price+"</td><td>"+seller+"</td><td>"+buyer+"</td><td>"+who+"</td><td>"+ip+"</td><td>"+phone+"</td><td>"+amount+"</td><td>"+time+"</td><td>"+state+"</td></tr>";
	          					}else{
          							html ="<tr><td class=\"center\"><label><input type=\"checkbox\" class=\"ace\" /><span class=\"lbl\"></span></label></td><td>"+oid+"</td><td><img style=\"width:50px;height:50px\" src=\""+pic+"\"/></td><td>"+gName+"</td><td>"+price+"</td><td>"+seller+"</td><td>"+buyer+"</td><td>"+who+"</td><td>"+ip+"</td><td>"+phone+"</td><td>"+amount+"</td><td>"+time+"</td><td>"+state+"</td></tr>";
          						}
          					}
          					document.getElementById("contextBody").innerHTML=html;
	            	}
          		});
}