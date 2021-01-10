/** @format */

const isMobileFun = () => {
  if (window.innerWidth > 480) {
    return false;
  }
  return true;
};
export const isMobile = isMobileFun();
