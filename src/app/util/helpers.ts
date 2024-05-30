import POSTALS from '../services/postal-codes';

export const CountryList = () => {
  const list = Object.keys(POSTALS).reduce((acc, val) => {
    acc.push([val, POSTALS[val][0]]);
    return acc;
  }, [] as any[]);
  return list;
};

export const FormatPrice= (curr: string, price: number) => Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: curr,
}).format(price as number);
