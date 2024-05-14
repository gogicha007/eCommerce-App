import POSTALS from '../services/postal-codes';

const CountryList = () => {
  const list = Object.keys(POSTALS).reduce((acc, val) => {
    acc.push([val, POSTALS[val]]);
    return acc;
  }, [] as any[]);
  return list;
};

export default CountryList;
