import React from "react";
import useStyles from "./PostTitle.styles";
import clsx from "clsx";

const PostTitle: React.FC<{ title: string }> = ({ title }) => {
  const classes = useStyles();

  return (
    <div className="my-6">
      <h1
        className={clsx({
          [classes.root]: true,
          "text-3xl": true,
          "font-bold": true,
        })}
      >
        {title}
      </h1>
    </div>
  );
};

export default PostTitle;
