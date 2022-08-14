let updateTime = document.getElementById("update-time");
			let ThanhPho = document.querySelectorAll(".content div");
            let SoCaMac = document.querySelectorAll(".cases");
			let SoCaTuVong = document.querySelectorAll(".death");
			let SoCaDieuTri = document.querySelectorAll(".treating");
			let SoCaHoiPhuc = document.querySelectorAll(".recovered");
            fetch(
				"https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST"
			)
				.then((response) => response.json())
				.then((data) => {
					updateTime.innerHTML = data["lastUpdatedAtSource"];

					for (i = 0; i <= data["detail"].length - 1; i++) {
						ThanhPho[i].querySelector("h2").innerHTML = data["detail"][i]["name"];
						SoCaMac[i].innerHTML = "Số ca: " + data["detail"][i]["cases"];
						SoCaTuVong[i].innerHTML = "Số ca tử vong: " + data["detail"][i]["death"];
						SoCaDieuTri[i].innerHTML =
							"Số ca đang điều trị: " + data["detail"][i]["treating"];
						SoCaHoiPhuc[i].innerHTML =
							"Số ca hồi phục: " + data["detail"][i]["recovered"];
					}
				})
				.catch((error) => {
					console.log(error);
				});