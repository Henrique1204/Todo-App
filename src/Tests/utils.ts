export const loopingTesting = (
  items: any,
  testing: (item: any, key: string) => void
) => {
  for (const key in items) {
    try {
      testing(items[key], key);
    } catch (e) {
      console.log("key:", key);

      throw e;
    }
  }
};
