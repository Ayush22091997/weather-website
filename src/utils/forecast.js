const request=require('request');
const url='http://api.weatherstack.com/current?access_key=b4e41d52d771981e8454edeb3bef642b&query=34.0544,-118.2439&units=m';
const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=b4e41d52d771981e8454edeb3bef642b&query='+latitude+','+longitude+'&units=m';
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('unable to connect with weather service',undefined);
        }else if(response.body.error){
            callback('unable to find location',undefined);
        }else{
            callback(undefined,response.body.current.weather_descriptions[0]+'. It is currently '+response.body.current.temperature+' degrees, feels like '+response.body.current.feelslike+' degrees');
        }
    });
}

module.exports=forecast;