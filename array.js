//solve problems using array functions on restcountries data
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
   var res = JSON.parse(request.response);
   console.log(res);
//get all the countries from asia /region using filter method
var da = res.filter((ele)=>ele.region == "Asia");
   console.log(da);
var data= da.map((ele)=>ele.name.common);
console.log(data);
//get all the countries with population < 200000 using filter method.
var dp = res.filter((ele)=>ele.population<200000);
console.log(dp);
for (var i=0;i<dp.length;i++){
    console.log(`country name:${dp[i].name.common}`);
}
//print the following details name,capital,flag using forEach method

    res.forEach(country => {
      console.log('Name:', country.name.common);
      console.log('Capital:', country.capital);
      console.log('Flag:', country.flags.png);
    });
  
//Print the total population of countries using reduce method

    const tp = res.reduce((acc, country) => acc + country.population, 0);
    console.log('Total population of all countries:', tp);
  
//Print the country that uses US dollars as currency.

    const cwu = res.filter(country => {
      return country.currencies && country.currencies.USD;
    });
    
    console.log('Countries that use US dollars as currency:');
    cwu.forEach(country => {
      console.log(' - ', country.name.common);
    });
  }
  


























