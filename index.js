let ipAddress = [0, 0, 0, 0];

const octet1 = document.querySelector("#o1");
const octet2 = document.querySelector("#o2");
const octet3 = document.querySelector("#o3");
const octet4 = document.querySelector("#o4");
const ipAddSubmit = document.querySelector("#ipAddSubmit");

ipAddSubmit.addEventListener("click", getIpAdr);

function getIpAdr() {
  ipAddress[0] = parseInt(octet1.value, 10) || 0;
  ipAddress[1] = parseInt(octet2.value, 10) || 0;
  ipAddress[2] = parseInt(octet3.value, 10) || 0;
  ipAddress[3] = parseInt(octet4.value, 10) || 0;
  console.log(ipAddress);
  if (checkIPAddress(ipAddress)) {
    document.querySelector(".subnets-number").style.display =
      "  display: block;";
  } else {
    document.querySelector(".errorMsg").innerHTML = "The ip address invalid";
  }
}

function checkIPAddress(ipAddress) {
  if (
    ipAddress[0] >= 0 &&
    ipAddress[0] <= 255 &&
    ipAddress[1] >= 0 &&
    ipAddress[1] <= 255 &&
    ipAddress[2] >= 0 &&
    ipAddress[2] <= 255 &&
    ipAddress[3] >= 0 &&
    ipAddress[3] <= 255
  ) {
    return true;
  } else {
    return false;
  }
}
