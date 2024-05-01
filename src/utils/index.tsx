export const getLocalStorage = (key: string) => {
  if (typeof window === "undefined") return;
  let data = window.localStorage.getItem(key);
  if (data) {
    try {
      return JSON.parse(data);
    } catch (error) {
      return data;
    }
  }
};

export const setLocalStorage = (key: string, value: any) => {
  if (typeof window === "undefined") return;
  if (typeof value === "object") {
    value = JSON.stringify(value);
  }
  window.localStorage.setItem(key, value);
};
