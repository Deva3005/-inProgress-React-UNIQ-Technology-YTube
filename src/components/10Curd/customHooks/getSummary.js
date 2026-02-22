const getSummary = (data) => {
  let dataMap = new Map();
  data.forEach((element) => {
    dataMap.set(element.category, (dataMap.get(element.category) || 0) + 1);
  });
  return dataMap.entries();
};
export default getSummary;
