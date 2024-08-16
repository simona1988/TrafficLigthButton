let currentColor = 0;
const colors = ['btn-danger', 'btn-warning', 'btn-success']; 

function changeButtonColor() {
    document.getElementById("trafficLightButton").classList.remove('btn-danger', 'btn-warning', 'btn-success');
    currentColor = (currentColor + 1) % colors.length;
    document.getElementById("trafficLightButton").classList.add(colors[currentColor]);
}

setInterval(changeButtonColor, 10000);