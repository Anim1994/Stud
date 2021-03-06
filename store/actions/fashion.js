export const setFashion = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        'http://studbd.com/api/category_offers/fashion'
      );
      // console.log(response);

      const resData = await response.json();

      // console.log('from action ' + resData.map((a) => a.review_title));

      dispatch({
        type: 'SET_FASHION',
        fashion: resData,
      });
    } catch (error) {
      throw error;
    }
  };
};
