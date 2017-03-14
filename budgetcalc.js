function calculator(){
  //the fundraising
  var cost = document.getElementById("fundCost").value;
  var sum = document.getElementById("fundSum").value;
  var netFund = sum - cost;

  //the pick up (per year)
  var monthCost = document.getElementById("monthlyCost").value * 1;
  var monthNumber = document.getElementById("monthNumber").value * 1;
  var pickUpTotal = monthCost * monthNumber;

  //the bins
  var binsMed = document.getElementById("binsMed").value * 1; //number of bins
  var binsSmall = document.getElementById("binsSmall").value * 1;
  var binsMCost = binsMed * 10; //cost total
  var binsSCost = binsSmall * 1;
  var x = 100;
  var binsCost = x + binsMCost + binsSCost;
  var binsTotal = 1 + binsMed + binsSmall;

  var remainder = netFund - binsCost - pickUpTotal;

  if(remainder <= (-0.01)){
    document.getElementById("output").innerHTML = remainder;
    document.getElementById("output").style.color = 'red';
  }else{
    document.getElementById("output").innerHTML = remainder;
    document.getElementById("output").style.color = 'green';
  }

  document.getElementById("totBins").innerHTML = binsTotal;
  document.getElementById("totBinsCost").innerHTML = binsCost;
  document.getElementById("fundNet").innerHTML = netFund;
  document.getElementById("totPickCost").innerHTML = pickUpTotal;
}
