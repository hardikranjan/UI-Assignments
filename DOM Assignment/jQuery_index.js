window.onload = function() {

	$("#register").attr('disabled', true);

	$.fn.lastfunction = function(id) {
		$("#register").attr('disabled', false);
	}

	$.fn.colorchanger = function(id) {
		document.getElementById(id).style.backgroundColor = "#ffe6e6";
	}

	$.fn.colorback = function(id) {

		document.getElementById(id).style.backgroundColor = "white";
	}

	/* For fname*/
	$('#fname').focus(function() {
		$.fn.colorchanger('fname');
	});

	$('#fname').blur(function() {
		$.fn.colorback('fname');
	});

	/* For lname*/
	$('#lname').focus(function() {
		$.fn.colorchanger('lname');
	});

	$('#lname').blur(function() {
		$.fn.colorback('lname');
	});

	/* For paddress*/
	$('#paddress').focus(function() {
		$.fn.colorchanger('paddress');
	});

	$('#paddress').blur(function() {
		$.fn.colorback('paddress');
	});

	/* For caddress*/
	$('#caddress').focus(function() {
		$.fn.colorchanger('caddress');
	});

	$('#caddress').blur(function() {
		$.fn.colorback('caddress');
	});

	/* For email*/
	$('#email').focus(function() {
		$.fn.colorchanger('email');
	});

	$('#email').blur(function() {
		$.fn.colorback('email');
	});

	/* For phonenumber*/
	$('#phone').focus(function() {
		$.fn.colorchanger('phone');
	});

	$('#phone').blur(function() {
		$.fn.colorback('phone');
	});

	/* For password*/
	$('#password').focus(function() {
		$.fn.colorchanger('password');
	});

	$('#password').blur(function() {
		$.fn.colorback('password');
	});

	/* For Confirm Password*/
	$('#cpassword').focus(function() {
		$.fn.colorchanger('cpassword');
	});

	$('#cpassword').blur(function() {
		$.fn.colorback('cpassword');
	});

	/* Checkbox */
	$('#check').click(function() {
		$.fn.checkboxcheck();
	});

	$.fn.checkboxcheck = function() {
		if ($('#check').is(':checked')) {
			$("#caddress").attr("disabled", true);
			$("#caddress").attr("value", $("#paddress").val());
		} else {
			$("#caddress").attr("disabled", false);
			$("#caddress").attr("value", "");
		}
	}

	/* REGISTER */
	$('#register').click(function() {
		$.fn.valid();
	});

	$.fn.firstnamevalidation = function() {
		var val = $("#fname").val();
		var regex = new RegExp("[a-zA-Z]+$");
		var result = regex.test(val);
		return result;
	}

	$.fn.lastnamevalidation = function() {
		var val = $("#fname").val();
		var regex = new RegExp("^$|[a-zA-Z]+$");
		var result = regex.test(val);
		return result;
	}

	$.fn.paddressvalidation = function() {
		if ($('#paddress').val() == "") {
			return false;
		} else
			return true;
	}

	$.fn.caddressvalidation = function() {
		if ($('#caddress').val() == "") {
			return false;
		} else
			return true;
	}

	$.fn.emailvalidation = function() {
		var val = $("#email").val();
		var regex = new RegExp("^[a-z0-9.+-]+@[a-z]+\.[a-z]{3}$");
		var result = regex.test(val);
		return result;
	}

	$.fn.phonevalidation = function() {
		var val = $("#phone").val();
		var regex = new RegExp("^[0-9]{4,10}$");
		var result = regex.test(val);
		return result;
	}

	$.fn.passwordvalidation = function() {
		var val = $("#password").val();
		var regex = new RegExp("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,14}$");
		var result = regex.test(val);
		return result;
	}

	$.fn.confirmpasswordvalidation = function() {
		var original = $("password").val();
		var confirm = $("cpassword").val();
		if (original === confirm)
			return true;
		else
			return false;

	}

	$.fn.valid = function() {
		if (!$.fn.firstnamevalidation()) {
			alert("Please enter correct firstname!!!");
			$("#fname").focus();
		} else if (!$.fn.lastnamevalidation()) {
			alert("Please enter correct firstname!!!");
			$("#lname").focus();
		} else if (!$.fn.paddressvalidation()) {
			alert("Permanent Address field shouldn't be left blank");
			$("#paddress").focus();
		} else if (!$('#check').prop('checked')) {
			if (!$.fn.caddressvalidation()) {
				alert("Company Address field shouldn't be left blank");
				$("#caddress").focus();
			}
		} else if (!$.fn.emailvalidation()) {
			alert("Please enter valid email address");
			$("#email").focus();
		} else if (!$.fn.phonevalidation()) {
			alert("Please enter Phone Number in NUMBERS and LENGTH should be 4-10");
			$("#phone").focus();
		} else if (!$.fn.passwordvalidation()) {
			alert("Password must be:-  Length: 6-14 and must contain Special_Char's like {!@#$%^&*} and Number {0-9}");
			$("#password").focus();
		} else if (!$.fn.confirmpasswordvalidation()) {
			alert("Password doen't match");
			$("#cpassword").focus();
			$.fn.lastfunction();
		} else {
			$.fn.lastfunction();
		}

	}
	$("#cpassword").blur(function() {
		$.fn.lastfunction();
	});
	$("#reset").click(function() {
		$.fn.resetfunction();
	});

	$("#register").click(function() {
		$.fn.appendchild();
	});

	$.fn.resetfunction = function() {
		$("#fname").val("");
		$("#lname").val("");
		$("#paddress").val("");
		$("#check").prop("checked", false);
		$("#caddress").val("");
		$("#phone").val("");
		$("#email").val("");
		$("#cpassword").val("");
		$("#password").val("");
	}

	/*Uncaught RangeError: Maximum call stack size exceeded*/
	/* Code Is Correct*/
	$.fn.appendchild = function() {
		var ul = $("#dashboard");
		var firstName = $('#fname').val();
		var lastName = $('#lname').val();
		var email = $('#email').val();

		var li = $("<li></li>", {
			class: "text"
		});

		var a = $("<a> </a>", {
			class: "abc",
			href: "#"
		}).text(firstName + " " + lastName);

		var div = $("<div> </div>", {
			class: "def"
		}).text(email);

		li.append(a);
		li.append(div);
		ul.append(li);
	}
}