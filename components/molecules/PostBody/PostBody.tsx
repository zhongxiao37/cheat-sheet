import React from "react";
import useStyles from "./PostBody.styles";
import clsx from "clsx";
import { Card } from "../Card";
import Post, { ICard } from "../../../types/post";

const PostBody: React.FC<{ description: string; content: ICard[] }> = ({
  description,
  content,
}) => {
  const classes = useStyles();

  return (
    <div>
      <div>{description}</div>
      <div className={clsx(classes.root)}>
        {content.map((c, i) => (
          <Card key={i} language={c.language} code={c.code} />
        ))}
      </div>
    </div>
  );
};

export default PostBody;
