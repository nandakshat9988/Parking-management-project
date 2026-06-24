const totalSlots = 10;
let parkedVehicles = [];

const vehicleInput = document.getElementById("vehicleNumber");
const vehicleList = document.getElementById("vehicleList");
const availableSlots = document.getElementById("availableSlots");

function updateDisplay() {
    availableSlots.textContent = totalSlots - parkedVehicles.length;

    vehicleList.innerHTML = "";

    parkedVehicles.forEach((vehicle, index) => {
        const li = document.createElement("li");
        li.textContent = `Slot ${index + 1} : ${vehicle}`;
        vehicleList.appendChild(li);
    });
}

document.getElementById("parkBtn").addEventListener("click", () => {
    const vehicleNumber = vehicleInput.value.trim();

    if (vehicleNumber === "") {
        alert("Please enter a vehicle number.");
        return;
    }

    if (parkedVehicles.includes(vehicleNumber)) {
        alert("Vehicle already parked.");
        return;
    }

    if (parkedVehicles.length >= totalSlots) {
        alert("Parking Full!");
        return;
    }

    parkedVehicles.push(vehicleNumber);
    vehicleInput.value = "";
    updateDisplay();
});

document.getElementById("removeBtn").addEventListener("click", () => {
    const vehicleNumber = vehicleInput.value.trim();

    const index = parkedVehicles.indexOf(vehicleNumber);

    if (index === -1) {
        alert("Vehicle not found.");
        return;
    }

    parkedVehicles.splice(index, 1);
    vehicleInput.value = "";
    updateDisplay();
});

updateDisplay();