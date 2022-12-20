import { createUseStyles } from "react-jss";

export default createUseStyles(
  {
    root: {
      padding: "16px",
      width: "343px",
      maxHeight: "600px",
      flexGrow: 0,
      flexShrink: 0,
      border: "solid 1px #eeeeee",
      borderRadius: "8px",
      margin: "16px 0",
      backgroundColor: "#ffffff",
      transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      boxShadow: "rgb(0 0 0 / 16%) 4px 4px 20px 2px",
      display: "flex",
      flexDirection: "column",

      "@media (min-width: 395px)": {
        margin: "16px",
      },
    },
    title: {
      fontSize: "20px",
      fontWeight: "400",
      padding: "0 4px",
      margin: "8px 0",
      display: "flex",
      justifyContent: "space-between",
      textTransform: "capitalize",
    },
    code: {
      margin: "8px 0",
      color: "rgba(0, 0, 0, 0.6)",
      overflow: "scroll",
    },
  },
  {
    name: "Card",
  }
);
