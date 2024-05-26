import { ITFProdQuery } from '../interfaces/interfaces';

export const getProdList = (data: Pick<ITFProdQuery, 'results'>) => {
  const cardData = data.results.map((val: any) => {
    const priceObj =
      val.masterData.current.masterVariant.prices.find(
        (el: any) => el.value.currencyCode === 'EUR'
      ) || null;
    const cardObj = {
      id: val.id,
      name: val.masterData.current.name['en-US'],
      description: val.masterData.current.description['en-US'],
      img: val.masterData.current.masterVariant.images[0].url || '',
      price: priceObj.value.centAmount,
      discount: null,
    };
    return cardObj;
  });
  return cardData || null;
};

export const getProductData = (id: string) => {
  console.log(id);
};
