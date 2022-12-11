import React from "react";
import useStyles from "./Card.styles";
import clsx from "clsx";
import { ICard } from "../../../types/post";
import { Icon } from "../../atoms/Icon";
import ReactMarkdown from "react-markdown";

export const Card: React.FC<ICard> = ({ language, code }) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root)}>
      <div className={clsx(classes.title)}>
        <Icon type={language} size={32} />
        <div>{language}</div>
      </div>
      <hr />
      <ReactMarkdown className={clsx(classes.code)}>{code}</ReactMarkdown>
    </div>
  );
};

export default Card;
