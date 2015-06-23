var dateObj = "["
for(var i=1;i<261;i++) {
	var $row = $('tr').eq(i);
	var $keys = $('tr').eq(0);
	dateObj += '{'
	for(var j=0;j<23;j++) {
		dateObj +=  '"' + $keys.children().eq(j).text()+ '": "' + $row.children().eq(j).text() + '",' 
	};	
	dateObj += '},'

	//$row.css('background-color','rgb(0,'+i+',0)')
	//$row.children().eq(1).css('color', 'purple')
}
$('tr>td:first-child').each(function() {
	//dateObj += '{"Date": "' + $(this).text() + '"},'
});
dateObj += ']'
console.log(dateObj)