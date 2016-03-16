function apertureSlider() {
	var x = document.getElementById("aperture-slider").value;
	document.getElementById("layer-2").setAttribute("style", "-webkit-filter: blur(" + x + "px);");
}