const API_KEY = '5355544c73746f66343772666b4d42';

export async function getRestList(){

    const url = `http://openapi.seoul.go.kr:8088/${API_KEY}/json/ListAirQualityByDistrictService/1/5/`

    const response =  await fetch(url);
    const data = response.json();

    return data;
}

 export async function getRestDetail(MSRADMCODE){
     const url = `http://openapi.seoul.go.kr:8088/${API_KEY}/json/ListAirQualityByDistrictService/1/5/${MSRADMCODE}`;

     const response = await fetch(url);
     const data = await response.json();

     return data.ListAirQualityByDistrictService;
 }