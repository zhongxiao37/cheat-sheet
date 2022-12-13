import React from "react";
import useStyles from "./PostTitle.styles";
import clsx from "clsx";
import Link from "next/link";

const PostTitle: React.FC<{ link: string; title: string }> = ({
  link,
  title,
}) => {
  const classes = useStyles();

  return (
    <div className="my-6 flex">
      <Link href={`/${link}`}>
        <h1
          className={clsx({
            [classes.root]: true,
            "text-3xl": true,
            "font-bold": true,
            "text-blue-600": true,
          })}
        >
          {title}
        </h1>
      </Link>
    </div>
  );
};

export default PostTitle;
