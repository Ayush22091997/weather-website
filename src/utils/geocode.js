const request=require('request');
const geocodeURL='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYXl1c2gta3VtYXIiLCJhIjoiY2tsbDYwMm5oMDc3djJvbGwwMnA3cDN3byJ9.SAJxiVBYhXWWF6CW9q6Oww&limit=1';
const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiYXl1c2gta3VtYXIiLCJhIjoiY2tsbDYwMm5oMDc3djJvbGwwMnA3cDN3byJ9.SAJxiVBYhXWWF6CW9q6Oww&limit=1'
    request({url,json:true},(error,response)=>{
        if(error){
            callback('unable to connect with location service',undefined);
        }else if(response.body.features.length===0){
            callback('unable to find address',undefined);
        }else{
            const latitude=response.body.features[0].center[1];
        const longitude=response.body.features[0].center[0];
            const location=response.body.features[0].place_name;
            callback(undefined,{latitude,longitude,location});
        }
    });
}

module.exports=geocode;