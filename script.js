document.addEventListener('DOMContentLoaded', function() {
	// Theme selection
	var storedColorMode = localStorage.getItem("colorMode");
	presetTheme(storedColorMode);
	var colorMode = document.getElementById("colorMode");
	colorMode.addEventListener("click", changeTheme);
});

function presetTheme(theme) {
	if (theme === "dark") {
		document.documentElement.setAttribute('data-theme', "dark");
	} else {
		document.documentElement.setAttribute('data-theme', "light");
	}
}

function changeTheme() {
	if (document.documentElement.getAttribute('data-theme') == "dark") {
		document.documentElement.setAttribute('data-theme', "light");
		localStorage.setItem("colorMode", "light");
	} else {
		document.documentElement.setAttribute('data-theme', "dark");
		localStorage.setItem("colorMode", "dark");
	}
}

function displayImage(input) {
    var imagePreview = document.getElementById("imagePreview");

    if (input.files && input.files[0]) {
        var reader = new FileReader();
        var fileName = input.files[0].name; // Get the file name

        reader.onload = function (e) {
            var img = new Image();
            img.src = e.target.result;
            img.classList.add("preview-image");
            imagePreview.innerHTML = "";
            imagePreview.appendChild(img);

            var imageFileText = document.getElementById("imageFileText");
            imageFileText.innerHTML = "Selected File: " + fileName;
        };

        reader.readAsDataURL(input.files[0]);
    } else {
        imagePreview.innerHTML = "";
    }
}


function displayTopText(text) {
    var topText = document.getElementById("topText");
    topText.innerHTML = text.value;
}

function displayBottomText(text) {
    var bottomText = document.getElementById("bottomText");
    bottomText.innerHTML = text.value;
}

function changeTextSize(slider) {
    const multiplier = parseInt(slider.value) / 100;
    const multipliedValue = 2.5 * multiplier;

    const topText = document.getElementById("topText");
    const bottomText = document.getElementById("bottomText");

    topText.style.fontSize = `${multipliedValue}rem`;
    bottomText.style.fontSize = `${multipliedValue}rem`;
}

function capsTransform(checkbox) {
    const topText = document.getElementById("topText");
    const bottomText = document.getElementById("bottomText");

    if (checkbox.checked) {
        topText.style.textTransform = "uppercase";
        bottomText.style.textTransform = "uppercase";
    } else {
        topText.style.textTransform = "none";
        bottomText.style.textTransform = "none";
    }
}