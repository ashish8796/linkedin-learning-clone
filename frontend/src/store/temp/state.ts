export const setData = (key: string, data: any) => {
  console.log(data);
  localStorage.setItem(key, JSON.stringify(data));
};

export const getData = (key: string) => {
  return JSON.parse(localStorage.getItem(key)!);
};
