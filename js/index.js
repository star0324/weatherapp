/*
* @Author: Administrator
* @Date:   2017-11-28 16:33:16
* @Last Modified by:   star0324
* @Last Modified time: 2017-11-28 16:50:58
*/
$.getScript(
		"http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js",
		function(){

			//console.log(document.getElementById('curcity'));
			//通过id属性获取元素
			//document.getElementById('curcity').innerHTML = remote_ip_info.city;
			$("#curcity").html(remote_ip_info.city);
			//获取对象属性city
			
			//console.log(remote_ip_info.city);
		}
	);