import axios from 'axios';
import qs from 'qs';

const geo = axios.create({
  baseURL: 'https://geoapi.fluvip.com',
});

geo.defaults.paramsSerializer = (params) =>
  qs.stringify(params, { encode: false });
geo.interceptors.response.use(
  (response) => response,
  (error) => error.response
);

export const getCountryArrObj = (countries) =>
  geo.get('/countries/countries-object', { params: { countries } });
export const getCountry = (country) => geo.get(`/countries/${country}`);

export const changeCountryFlag = (country, setCountryFlag) =>
  getCountry(country).then(
    ({
      data: {
        data: { flag },
      },
    }) => {
      setCountryFlag(flag);
    }
  );
