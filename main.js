


function calculateArea() {
    let area;
    let width = document.getElementById('inWidth').value;
    let height = document.getElementById('inHeight').value;

    area = areaChecking(width, height);

    console.log(area);
    document.getElementById('result').innerHTML = "Area: " + area;
}

function areaChecking(width, height) {
    let result = width * height;
    return result;
}