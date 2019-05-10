// var xwp_id
// function getQueryString(name) {
// 	var r, reg;
// 	reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
// 	r = window.location.search.substr(1).match(reg);
// 	if (r !== null) {
// 		return r[2]; //不解码
// 	}
// 	return null;
// };
// xwp_id = getQueryString("id")
// x_element(js_arr)
// function x_element(js_arr){
// 		let new_arr
// 		for (let _index = 0; _index < js_arr.length; _index++) {
// 			if (js_arr[_index][1] == xwp_id) {
// 				new_arr = js_arr[_index]
// 				break;
// 			}
// 		}
// 		if (new_arr) {
// 			document.querySelector(".ljxz-btn").href = new_arr[2]
// 			document.querySelector(".xz_btn").href = new_arr[2]
// 			document.querySelectorAll(".company")[0].innerHTML = new_arr[3]
// 			if (new_arr[4]) {
// 				document.querySelector(".j_code").innerHTML = new_arr[4]
// 			}
// 			if (new_arr[5]) {
// 				document.querySelectorAll(".company")[1].innerHTML = new_arr[5]
// 			}
// 			if (new_arr[6]) {
// 				document.querySelectorAll(".company")[2].innerHTML = new_arr[6]
// 			}
// 		}
// }