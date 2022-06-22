import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchData= async(country)=>{
    let changeableUrl = url;
    if(country){
        changeableUrl = `${url}/countries/${country}`
    }
    try {
    const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(changeableUrl)
    console.log(lastUpdate,'oooo');
    return {confirmed,recovered,deaths,lastUpdate}
   
} catch (error) {
    console.log(error);
}
}

export const fetchDailyData= async()=>{
    try {
        const {data} = await axios.get(`${url}/daily`)
        const modifiedData = data.map(x=>({
            confirmed:x.confirmed.total,
            deaths:x.deaths.total,
            date:x.reportDate,
        }))
        return modifiedData
    } catch (error) {
        console.log(error);
    }
}

export const countries = async()=>{
    try {
       // const {data:{countries}} = await axios.get(`${url}/countries`)
       const {data:{countries}} = await axios.get(`${url}/countries`)
       //return countries.map((x)=>x.name)
       return countries.map((x)=>({
            name:x.name,
            iso2:x.iso2,
            iso3:x.so3
        }))
    } catch (error) {
        console.log(error);
    }
}