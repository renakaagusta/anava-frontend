import axios from 'axios';

const API_URL = 'https://dev.farizdotid.com/api/daerahindonesia/';

class UIService {
  getProvinces() {
    return axios.get(API_URL + 'provinsi')
      .then((response) => {
        return response.data.provinsi;
      })
  }
  
  getCities(provinceName, provinces) {
    let index = 0;
    for(index in provinces) 
      if(provinces[index].nama == provinceName) {
        index = provinces[index].id;
        break;
      }

    return axios.get(API_URL + 'kota?id_provinsi=' + index)
      .then((response) => {     
          return response.data.kota_kabupaten;
      })
  }
  
  getSubdistricts(cityName, cities) {
    let index = 0;
    for(index in cities) 
      if(cities[index].nama == cityName) {
        index = cities[index].id;
        break;
      }

    return axios.get(API_URL + 'kecamatan?id_kota=' + index)
      .then((response) => {        
          return response.data.kecamatan;
      })
  }
}

export default new UIService();
