
		var link = document.querySelector(".search-btn");
		var popup = document.querySelector(".form-booking");
		var checkin = popup.querySelector("[name=checkin]");
		var checkout = popup.querySelector("[name=checkout]");
		var storage = localStorage.getItem("checkin");

		link.addEventListener('click', function (event) {
			event.preventDefault();
			popup.classList.toggle("form-booking-show");
			popup.classList.remove("form-booking-error");
			checkin.focus();
			if(storage){
				checkin.value = storage;
				checkout.focus();
			}else {
				checkin.focus();
			}
		});

		popup.addEventListener('submit', function (event){
			if(!checkin.value || !checkout.value){
			event.preventDefault();
			popup.classList.add("form-booking-error");
			console.log("введи что то");
			 }else {
				localStorage.setItem('checkin', "27 Августа");
			}
		});