import { ITFProdQuery, ITFMap } from '../interfaces/interfaces';

export const getProdList = (data: Pick<ITFProdQuery, 'results'>) => {
  const cardData = data.results.map((val: any) => {
    const priceObj = val.masterData.current.masterVariant.prices.find(
      (el: any) => el.value.currencyCode === 'EUR',
    ) || null;
    const categoryIdArr = val.masterData.current.categories.map((cat: ITFMap) => cat.id) || null;
    console.log(categoryIdArr);
    const cardObj = {
      id: val.id,
      name: val.masterData.current.name['en-US'],
      description: val.masterData.current.description['en-US'],
      img: val.masterData.current.masterVariant.images[0].url || '',
      price: priceObj.value.centAmount,
      discount: null,
      categoryIds: categoryIdArr,
    };
    return cardObj;
  });
  return cardData || null;
};

export const getProductData = (id: string) => {
  console.log(id);
};
