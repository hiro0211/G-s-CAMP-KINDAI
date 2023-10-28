/* ↓↓↓↓↓↓↓↓↓↓↓↓↓↓  JavaScript ↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 


■命令したいHTMLタグを指定する
$('●●●')


■クリックイベントの設定
$('●●●').on('click', function(){


});

■代表的なjQueryの命令
show(), hide(), fadeOut(), append()

■変数
const ●●●　= ●●●;
let ●●●　= ●●●;

■if文
if(){

}else if(){


}else{


}

*/



$('#btn').on("click", function () {
    let num = Math.ceil(Math.random() * 100);

    if (num === 1) {
        $("#result4").html('<img src="images/stamp1.png" id="photo" />');
    } else if ( num <= 20 ) {
        $('#result4').html('<img src="images/stamp1.png" id="photo" />');
    } else {
        $('#result4').html("R");
    }
});