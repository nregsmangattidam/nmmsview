function nmmsView() {
    let n = document.getElementById("wc").value;
    let m = document.getElementById("msr").value;
    let w = document.getElementById("worktype").value;
    document.getElementById('hidden').style.visibility = 'hidden';
    document.getElementById('wait').innerHTML = 'Please wait...';
   window.location.href  = "https://mnregaweb4.nic.in/nregaarch/View_NMMS_atten_date_dtl_rpt.aspx?page=&short_name=KL&state_name=KERALA&state_code=16&district_name=KANNUR&district_code=1602&block_name=Kuthuparamba&block_code=1602006&panchayat_name=Mangattidam&panchayat_code=1602006004&fin_year=2022-2023&source=&work_code=1602006004/"+w+"/"+n+"&msr_no="+m+"&AttendanceDate=21/01/2023&Digest=G20gYn3y+WJv6sdqVczWyQ";
    console.log(w);
}
