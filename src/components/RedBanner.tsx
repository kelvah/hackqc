import { createStyles } from "@workday/canvas-kit-styling";

const RedBanner = () => {
  const styles = createStyles({
    height: 190,
    background:
      "linear-gradient(0deg, rgba(195,54,47,1) 0%, rgba(107,25,19,1) 100%)",
  });
  return <div className={styles}></div>;
};

export default RedBanner;
