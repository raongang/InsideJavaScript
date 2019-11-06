<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<!DOCTYPE html>
<html lang="ko">
<head>
<script src="/resources/js/functionObject.js?ver=1"></script>
<script src="http://code.jquery.com/jquery-latest.js"></script>

<title>Home</title>
</head>
<body>
 8.2 jQuery의 id 셀렉터동작분석.
 HTML문서에서 원하는 DOM객체를 선택한후, 해당 객체의 속성 변경하거나 효과, 이벤트 등을 처리 하는 것
<div id="myDiv">Hello</div>
<script>
alert($("#myDiv").text());

</script>
</body>
</html>

<%--
	// Handle HTML strings
	var m = /^[^<]*(<.+>)[^>]*$/.exec(a);
	if ( m ) a = jQuery.clean( [ m[1] ] );
	
	정규식 표현.
	 - 슬래시(/)는 정규표현식 리터럴을 만드는 기호.
	 - / 로 둘러 쌓인 부분은 정규표현식 객체가 됨.
	 

 --%>
