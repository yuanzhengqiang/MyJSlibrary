let MyJsLibrary = {
	/**
	 * 获取时间
	 * type:时间格式
	 * 为空默认获取:  	年月日时分秒  20161010101010
	 * "NYRSF": 		年月日时分 	  201610101010
	 * "NYR": 			年月日 		  20161010
	 * "NY": 			年月 		  201610
	 * "N": 			年 			  2016
	 * "SFM": 			时分秒 		  101010
	 * "SF": 			时分 		  1010
	 * "S": 			时 			  10
	 * "M": 			秒 			  10
	 * time:日期{
	 * ""			   	为空获取当前时间
	 * "lastDay"       	获取一天前时间
	 * "lastWeek"      	获取一周前时间
	 * "lastMonth"     	获取一月前时间
	 */
	getDate: function ( type, time ) {
		let now = new Date(),
			date = now;  //获取当前时间
			
		if ( time != null && time == "lastDay" ) {   //获取一天前时间
			date = new Date( now.getTime() - 1 * 24 * 3600 * 1000 );
		}else if ( time != null && time == "lastWeek" ) {   //获取一周前时间
			date = new Date( now.getTime() - 7 * 24 * 3600 * 1000 );
		}else if ( time != null && time == "lastMonth" ) {   //获取一月前时间
			date = new Date( now.getTime() - 30 * 24 * 3600 * 1000 );
		}

	    let month = date.getMonth() + 1,
	    	strDate = date.getDate(),
	    	strHour = date.getHours(),
	    	strMinutes = date.getMinutes(),
	    	strSeconds = date.getSeconds();
	   
	    
	    if ( month >= 1 && month <= 9 ) {
	        month = "0" + month;
	    }
	    if ( strDate >= 0 && strDate <= 9 ) {
	        strDate = "0" + strDate;
	    }
	    if ( strHour >= 0 && strHour <= 9 ) {
	        strHour = "0" + strHour;
	    }
	    if ( strMinutes >= 0 && strMinutes <= 9 ) {
	        strMinutes = "0" + strMinutes;
	    }
	    if ( strSeconds >= 0 && strSeconds <= 9 ) {
	        strSeconds = "0" + strSeconds;
	    }
		
		let currentdate = date.getFullYear() + "" + month + "" + strDate + "" + strHour + "" + strMinutes + "" + strSeconds ;//默认获取年月日时分秒
		switch ( type )
			{
				case "NYRSF": //年月日时分
				  	currentdate = date.getFullYear() + "" + month + "" + strDate + "" + strHour + "" + strMinutes ;
				break;

				case "NYR": //年月日
				  	currentdate = date.getFullYear() + "" + month + "" + strDate ;
				break;

				case "NY": //年月
				  	currentdate = date.getFullYear() + "" + month ;
				break;

				case "N": //年
				  	currentdate = date.getFullYear() ;
				break;

				case "SFM": //时分秒
				  	currentdate = strHour + "" + strMinutes + "" + strSeconds ;
				break;

				case "SF": //时分
				  	currentdate = strHour + "" + strMinutes ;
				break;

				case "S": //时
				  	currentdate = strHour ;
				break;

				case "M": //年月
				  	currentdate = strSeconds ;
				break;

				case "lastDay": //获取一天前时间
					if ( time === null )
					return MyJsLibrary.getDate( "", "lastDay" );
				break;

				case "lastWeek": //获取一周前时间 
				  	if ( time === null )
					 return MyJsLibrary.getDate( "", "lastWeek" );
				break;

				case "lastMonth": //获取一月前时间 
				  	if ( time === null )
					return MyJsLibrary.getDate( "", "lastMonth" );
				break;
			}
		return currentdate;
	},

    /**
     * 限制输入
     * type:
     * 1:限制输入数字0-9;
     * 2:限制输入数字,小数点;
     * 3:限制输入数字，小数点，负号
     */
    keyPress: function ( type ) {
        let theEvent = window.event || arguments.callee.caller.arguments[0],
			keyCode = theEvent.keyCode || theEvent.which;
		switch ( parseInt( type ) ) 
		{
		case 1: //限制输入数字0-9
		  	if ( (keyCode < 48 || keyCode > 57) && keyCode !== 8 && keyCode !== 37 && keyCode !== 39 ) {
           		theEvent.preventDefault();
        	}
		break;

		case 2: //限制输入数字,小数点
		  	if ( (keyCode < 48 || keyCode > 57) && keyCode !== 8 && keyCode !== 46 && keyCode !== 37 && keyCode !== 39 ) {
           		theEvent.preventDefault();
        	}
		break;

		case 3: //限制输入数字，小数点，负号
		  	if ( (keyCode < 48 || keyCode > 57) && keyCode !== 8 && keyCode !== 45 && keyCode !== 46 && keyCode !== 37 && keyCode !== 39 ) {
           		theEvent.preventDefault();
        	}
		break;
		}
    }, 

    /**
     * 文字缩略显示
     * data:需要缩略的字符串
     * num: 需要显示的长度
     */
    breviary: function ( data, num ) { 
	    if ( data !== null && data.length > num ) {
	        return data.substring( 0, num ) + "..." ;
	    } else {
	        return data;
	    }
	}, 

	/**
	 * 日期转化
	 * time.length = 19   2016-10-10 10:10:10 20161010101010
	 * time.length = 16   2016-10-10 10:10    201610101010
	 * time.length = 10   2016-10-10     	  20161010
	 * time.length = 8    10:10:10			  101010
	 * time.length = 5    10:10   			  1010
	 */
	formatNum: function ( time ) {
		if ( time !== null && time.length === 19 ) {
			time = time.substring( 0, 4 ) + time.substring( 5, 7 ) + time.substring( 8, 10 ) + time.substring( 11, 13 ) + time.substring( 14, 16 ) + time.substring( 17, 19 );
		} else if ( time !== null && time.length === 16 ) {
			time = time.substring( 0, 4 ) + time.substring( 5, 7 ) + time.substring( 8, 10 ) + time.substring( 11, 13 ) + time.substring( 14, 16 );
		} else if ( time !== null && time.length === 10 ) {
			time = time.substring( 0, 4 ) + time.substring( 5, 7 ) + time.substring( 8, 10 );
		} else if ( time !== null && time.length === 8 ) {
			time = time.substring( 0, 2 ) + time.substring( 3, 5 ) + time.substring( 6, 8 );
		} else if (time !== null && time.length === 5 ) {
			time = time.substring( 0, 2 ) + time.substring( 3, 5 );
		}
		return time; 
	},

	/**
	 * 日期格式化
	 * time.length = 14  20161010101010  2016-10-10 10:10:10
	 * time.length = 12  201610101010    2016-10-10 10:10
	 * time.length = 8   20161010        2016-10-10
	 * time.length = 6   101010          10:10:10
	 * time.length = 4   1010      		 10:10
	 */
	formatTime: function ( time ) {
		if ( time !== null && time.length === 4 ) {
			time =  time.substring( 0, 2) + ":" + time.substring(2, 4) ;
		} else if ( time !== null && time.length === 6 ) {
			time =  time.substring( 0, 2) + ":" + time.substring(2, 4) + ":" + time.substring(4, 6) ;
		} else if ( time !== null && time.length === 8 ) {
			time =  time.substring( 0, 4) + "-" + time.substring(4, 6) + "-" + time.substring(6, 8) ;
		} else if ( time !== null && time.length === 12 ) {
			time =  time.substring(0, 4) + "-" + time.substring(4, 6) + "-" + time.substring(6, 8) + " " +time.substring( 8, 10 ) + ":" + time.substring( 10, 12 ) ;
		} else if(time !== null && time.length === 14 ) {
			time =  time.substring(0, 4) + "-" + time.substring(4, 6) + "-" + time.substring(6, 8) + " " +time.substring( 8, 10 ) + ":" + time.substring( 10, 12 ) + ":" + time.substring( 12, 14 ) ;
		}
		return time;
	},

	/**
	 * 根据身份证或生日获取年龄 
	 * num.length = 4  生日年份 	2016
	 * num.length = 8  生日年月日 	20161010
	 * num.length = 18 生日年月日 	320123201610101234
	 */
	getAge: function ( num ) {
		let age = "",
			d = new Date(),
			nowYear = d.getFullYear();
		if ( num.length === 4 ) { //生日年份
			let birthYear = num;
			age = nowYear-birthYear;
		} else if ( num.length === 8 ) { //生日年月日
			let birthYear = num.substr( 0, 4 );
			age = nowYear-birthYear;
		} else if ( num.length === 18 ) { //身份证
			let olderYear = num.slice( 6, 10 );
			age = newYear - olderYear;
		} else {
			alert( "格式不正确请手动输入" );
			return;
		}
		return age;
	},

	/**
	 * 根据身份证获取生日  
	 * 320123201610101234   20161010
	 */
	getBirthday: function ( cardNumber ) {
		if ( cardNumber.length === 18 ) {
			let olderYear = cardNumber.slice( 6, 10 ),
				olderMonth = cardNumber.slice( 10, 12 ),
				olderDay = cardNumber.slice( 12, 14 ),
				birthday = olderYear + "-" + olderMonth + "-" +olderDay; 
			return birthday;
		} else {
			alert( "格式不正确请手动输入" );
		}
	},

	 /**
	  * 根据页面URL获取参数
	  * name  要获取的参数名   
	  * param 返回的参数值  
	  */
	getUrlParam:function ( name ) {
		let urlParams = location.search,
			urlParamArray = urlParams.split( "&" ),
			paramLength = urlParamArray.length,
			urlParam = new Object(), 
			param = "";

		if ( urlParams.indexOf( "&" ) !== -1 && urlParams.indexOf("=") !== -1 ) {
			for ( let i = 1; i < paramLength; i++ ) {
				if ( name = urlParamArray[i].split( "=" )[0] ) {
					param = decodeURIComponent( urlParamArray[i].split( "=" )[1] );  
				}
			}
		} else {
			alert( "当前地址没有正确的参数" );
		}
		return  param;
	}
}


