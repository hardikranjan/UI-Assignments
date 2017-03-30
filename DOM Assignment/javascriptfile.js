window.onload = function() {
	document.getElementById("register").disabled = true;


	function lastfunction() {
		document.getElementById("register").disabled = false;
	}

	function colorchanger(id) {
		document.getElementById(id).style.backgroundColor = "#ffe6e6";
	}

	function colorback(id) {
		document.getElementById(id).style.backgroundColor = "white";
	}

	/* For fname*/
	document.getElementById('fname').onclick = function() {
		colorchanger('fname');
	}

	document.getElementById('fname').onblur = function() {
		colorback('fname');
	}

	/* For lname*/
	document.getElementById('lname').onclick = function() {
		colorchanger('lname');
	}

	document.getElementById('lname').onblur = function() {
		colorback('lname');
	}

	/* For paddress*/
	document.getElementById('paddress').onclick = function() {
		colorchanger('paddress');
	}

	document.getElementById('paddress').onblur = function() {
		colorback('paddress');
	}

	/* For caddress*/
	document.getElementById('caddress').onclick = function() {
		colorchanger('caddress');
	}

	document.getElementById('caddress').onblur = function() {
		colorback('caddress');
	}

	/* For email*/
	document.getElementById('email').onclick = function() {
		colorchanger('email');
	}

	document.getElementById('email').onblur = function() {
		colorback('email');
	}

	/* For phonenumber*/
	document.getElementById('phone').onclick = function() {
		colorchanger('phone');
	}

	document.getElementById('phone').onblur = function() {
		colorback('phone');
	}

	/* For password*/
	document.getElementById('password').onclick = function() {
		colorchanger('password');
	}

	document.getElementById('password').onblur = function() {
		colorback('password');
	}

	/* For Confirm Password*/
	document.getElementById('cpassword').onclick = function() {
		colorchanger('cpassword');
	}

	document.getElementById('cpassword').onblur = function() {
		colorback('cpassword');
	}

	/* Checkbox */
	document.getElementById('check').onclick = function() {
		checkboxcheck();
	}

	function checkboxcheck() {
		if (document.getElementById("check").checked == true) {
			document.getElementById("caddress").disabled = true;
			document.getElementById("caddress").defaultValue = document.getElementById("paddress").value;
		} else {
			document.getElementById("caddress").disabled = false;
			document.getElementById("caddress").defaultValue = "";
		}
	}

	/* REGISTER */
	document.getElementById('register').onclick = function() {
		valid();
	}

	function firstnamevalidation() {
		var val = document.getElementById("fname").value;
		var regex = new RegExp("[a-zA-Z]+$");
		var result = regex.test(val);
		return result;
	}

	function lastnamevalidation() {
		var val = document.getElementById("fname").value;
		var regex = new RegExp("^$|[a-zA-Z]+$");
		var result = regex.test(val);
		return result;
	}

	function paddressvalidation() {
		if (document.getElementById('paddress').value == "") {
			return false;
		} else
			return true;
	}

	function caddressvalidation() {
		if (document.getElementById('caddress').value == "") {
			return false;
		} else
			return true;
	}

	function emailvalidation() {
		var val = document.getElementById("email");
		var regex = new RegExp("^[a-z0-9.+-]+@[a-z]+\.[a-z]{3}$");
		var result = regex.test(val.value);
		return result;
	}

	function phonevalidation() {
		var val = document.getElementById("phone").value;
		var regex = new RegExp("^[0-9]{4,10}$");
		var result = regex.test(val);
		return result;
	}

	function passwordvalidation() {
		var val = document.getElementById("password").value;
		var regex = new RegExp("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,14}$");
		var result = regex.test(val);
		return result;
	}

	function confirmpasswordvalidation() {
		var original = document.getElementById("password").value;
		var confirm = document.getElementById("cpassword").value;
		if (original === confirm)
			return true;
		else
			return false;

	}

	function valid() {
		if (!firstnamevalidation()) {
			alert("Please enter correct firstname!!!");
			document.getElementById("fname").focus() = true;
		} else if (!lastnamevalidation()) {
			alert("Please enter correct firstname!!!");
			document.getElementById("lname").focus() = true;
		} else if (!paddressvalidation()) {
			alert("Permanent Address field shouldn't be left blank");
			document.getElementById("paddress").focus() = true;
		} else if (!document.getElementById('check').checked) {
			if (!caddressvalidation()) {
				alert("Company Address field shouldn't be left blank");
				document.getElementById("caddress").focus() = true;
			}
		} else if (!emailvalidation()) {
			alert("Please enter valid email address");
			document.getElementById("email").focus() = true;
		} else if (!phonevalidation()) {
			alert("Please enter Phone Number in NUMBERS and LENGTH should be 4-10");
			document.getElementById("phone").focus() = true;
		} else if (!passwordvalidation()) {
			alert("Password must be:-  Length: 6-14 and must contain Special_Char's like {!@#$%^&*} and Number {0-9}");
			document.getElementById("password").focus() = true;
		} else if (!confirmpasswordvalidation()) {
			alert("Password doen't match");
			document.getElementById("cpassword").focus() = true;
			lastfunction();
		} else {
			lastfunction();
		}

	}
	document.getElementById("cpassword").onblur = function() {
		lastfunction();
	}
	document.getElementById("reset").onclick = function() {
		resetfunction();
	}
	document.getElementById("register").onclick = function() {
		append();
	}

	function resetfunction() {
		document.getElementById("fname").value = "";
		document.getElementById("lname").value = "";
		document.getElementById("paddress").value = "";
		document.getElementById("check").checked = false;
		document.getElementById("caddress").value = "";
		document.getElementById("phone").value = "";
		document.getElementById("email").value = "";
		document.getElementById("cpassword").value = "";
		document.getElementById("password").value = "";
	}

	function append() {
		var ul = document.getElementById("dashboard");
		var firstName = document.getElementById('fname').value;
		var lastName = document.getElementById('lname').value;
		var email = document.getElementById('email').value;

		var li = document.createElement("li");
		var fullName = firstName + " " + lastName;
		var Name = document.createTextNode(fullName);
		var emailT = document.createTextNode(email);

		var a = document.createElement("a");
		a.setAttribute('class', 'abc');

		var div = document.createElement("div");
		div.setAttribute('class', 'def');

		a.appendChild(Name);
		div.appendChild(emailT);
		li.appendChild(a);
		li.appendChild(div);
		ul.appendChild(li);

	}

}