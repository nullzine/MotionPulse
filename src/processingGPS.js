window.onload = function(){
	navigator.geolocation.watchPosition(update);
};
// 位置が検出されたら緯度、経度、誤差と時間を表示
function update(position){
	var lat = position.coords.latitude;
	var lng = position.coords.longitude;
	var acc = position.coords.accuracy;
	document.getElementById("pos").innerHTML ="緯度:"+lat+"<br>経度:"+lng+"<br>誤差:"+acc+"<br>"+(new Date());
}