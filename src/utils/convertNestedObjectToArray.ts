export default (nestedObj: any) =>
    Object.keys(nestedObj).map((key) => nestedObj[key]);
