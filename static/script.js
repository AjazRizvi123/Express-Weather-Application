const submitbtn = document.getElementById('submitbtn');
const cityName = document.getElementById('cityname');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const day= document.getElementById('day');
const month= document.getElementById("today_date");
const tdate= document.getElementById('Tdate');
const datess= new Date();

const weekday= new Array(7);
    weekday[0]= "Sunday"
    weekday[1]= "Monday"
    weekday[2]= "Tuesday"
    weekday[3]= "Wednesday"
    weekday[4]= "Thrusday"
    weekday[5]= "Friday"
    weekday[6]= "Saturday"
    let days= new Date();
    let today= weekday[days.getDay()];
    day.innerText=`${today}`

    {
  
    const months= ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    
    let Cmonth= months[datess.getMonth() ];
    let Date= datess.getDate();
    month.innerText= `${Cmonth}`
    tdate.innerText=`${Date}`
    console.log(Date)
    }

const getinfo = async (e) => {
    e.preventDefault();
    let cityVal = cityName.value
    if (cityVal === "") {
        city_name.innerText = `Please Write Your City Name Properly, Else We are Sorry Your City Is Not Registered.`
        temp.innerText= "0"
        // celsius.innerText=""
    } else {

        let Url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=162765b95de5df856475bf6ee721f55f`
        const response = await fetch(Url);
        const data = await response.json();

        const arrData = [data];

        temp.innerText = `${arrData[0].main.temp} `
        city_name.innerText="Current Temperature In Your City Is"
        const celsius = document.getElementById('celsius').style.display = "block";
    }

    const weekday= new Array(7);
    weekday[0]= "Sunday"
    weekday[1]= "Monday"
    weekday[2]= "Tuesday"
    weekday[3]= "Wednesday"
    weekday[4]= "Thrusday"
    weekday[5]= "Friday"
    weekday[6]= "Saturday"
    let day= new Date();
    let today= weekday[day.getDay()];
    

}
submitbtn.addEventListener('click', getinfo);

