function removeDuplicatedObj(array) {
  const jsonObject = array.map(JSON.stringify);
  const uniqueSet = new Set(jsonObject);

  const uniqueArray = Array.from(uniqueSet).map(JSON.parse);

  return uniqueArray;
}

export default removeDuplicatedObj;
