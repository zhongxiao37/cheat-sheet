import React from "react";
import useStyles from "./PostBody.styles";
import clsx from "clsx";
import { Card } from "../Card";
import Post, { ICard } from "../../../types/post";

const PostBody: React.FC<{ content: ICard[] }> = ({ content }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root)}>
      {content.map((c, i) => (
        <Card key={i} language={c.language} code={c.code} />
      ))}
    </div>
  );
};

export default PostBody;
