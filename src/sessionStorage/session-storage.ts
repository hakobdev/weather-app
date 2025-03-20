const storage = {
  getItemFromSessionStorage: (key: string) => {
    const data = sessionStorage.getItem(key);
    if (data) {
      return data;
    }
    return null;
  },
  setItemToSessionStorage: (key: string, value: string) => {
    sessionStorage.setItem(key, value);
  },
};

export default storage;
