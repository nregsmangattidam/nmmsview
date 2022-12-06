function nmmsView() {
    let n = document.getElementById("wc").value;
    let m = document.getElementById("msr").value;
    document.getElementById('hidden').style.visibility = 'hidden';
    document.getElementById('wait').innerHTML = 'Please wait...';
    window.location.href  = "http://164.100.70.9/nregamms92/writereaddata/nregamobapp/Attendance/KL/"+m+"_1602006004_WC_"+n+"_2022-12-06R6122022091519.jpeg";
}