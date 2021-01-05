const key='0fa99e55795c9edfeb1d0289b7822f37';
const formEl=document.querySelector('form'); 
const detials=document.querySelector('.detials'); 
formEl.addEventListener('submit',(e) =>{
    e.preventDefault(); 
    detials.innerHTML='<h1><i>Loading..</i></h1>';
    const location=e.target.location.value;
    weatherApp(location);
}); 
async function weatherApp(location){
    const data=await fetchAPI(location);
    generatehtml(data);
} 
 async function fetchAPI(location){
const baseURL=`http://api.weatherstack.com/current?access_key=${key}&query= ${location}`;
const res=await fetch(baseURL); 
const data= await res.json();
return data; 
console.log(data)
} 
function generatehtml(data){
    const html=`
    <h1 class="temp">${data.current.temperature} deg</h1>
    <h1 class="status">
        ${data.current.weather_descriptions.map(item => item).join(' ')}
    </h1>
    <div class="class-info">
        <p>Humidity -${data.current.humidity}%</p><br>
        <p> Wind speed -${data.current.wind_speed}km/h</p><br>
        <p> Wind direction-${data.current.wind_dir}</p><br>
        <p> Pressure -${data.current.pressure}MB</p><br>
    </div>
    <div >${data.request.query}</div>
    `; 
    detials.innerHTML=html;
}