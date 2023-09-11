/* banner1 호버시 gnb 드롭다운 함수 */
$('.banner1, .depth1').hover(
	function () {
		$('.w100').css('height', '500px');
	},
	function () {
		$('.w100').css('height', '0');
	}
);
