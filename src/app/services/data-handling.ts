import { ITFProdQuery, ITFMap } from '../interfaces/interfaces';

export const getProdList = (
  data: Pick<ITFProdQuery, 'results'>,
  categoryObj: ITFMap,
  discounts: any[],
) => {
  const cardData = data.results.map((val) => {
    const priceObj =
      val.masterData.current.masterVariant.prices.find(
        (el: any) => el.value.currencyCode === 'EUR',
      ) || null;
    const categoryIdArr =
      val.masterData.current.categories.map((cat: ITFMap) => cat.id) || null;
    const categoryKeysArr = val.masterData.current.categories.map(
      (cat: ITFMap) => categoryObj[cat.id as string],
    );
    let discount: null | number = null;
    let discountName: null | string = null;
    if (discounts) {
      discounts.forEach((dis) => {
        const arr = dis.predicate.split(' ');
        const key = arr[arr.length - 1].replaceAll('"', '');
        if (categoryKeysArr.includes(key)) {
          if (dis.value.type === 'relative') {
            discount =
              (priceObj.value.centAmount -
                (priceObj.value.centAmount * dis.value.permyriad) / 10000) /
              100;
          }
          if (dis.value.type === 'absolute') {
            discount =
              (priceObj.value.centAmount - dis.value.money.centAmount) / 100;
          }
          discountName = dis.name['en-US'];
        }
      });
    }
    const cardObj = {
      id: val.id,
      name: val.masterData.current.name['en-US'],
      description: val.masterData.current.description['en-US'],
      img: val.masterData.current.masterVariant.images[0].url || '',
      price: priceObj.value.centAmount / 100,
      currency: priceObj.value.currencyCode,
      discount,
      discountName,
      categoryIds: categoryIdArr,
      categoryKeys: categoryKeysArr,
    };
    return cardObj;
  });
  return cardData || null;
};

export const getProductData = (id: string) => {
  console.log(id);
};
