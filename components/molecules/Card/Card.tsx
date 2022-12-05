import React from "react";
import useStyles from "./Card.styles";
import clsx from "clsx";
import { ICard } from "../../../types/post";
import { Icon } from "../../atoms/Icon";

export const Card: React.FC<ICard> = ({ language, code }) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root)}>
      <div className={clsx(classes.title)}>
        <Icon type={language} size={32} />
        <div>{language}</div>
      </div>
      <hr />
      <div
        className={clsx(classes.code)}
        dangerouslySetInnerHTML={{ __html: code }}
      ></div>
    </div>
  );
};

export default Card;
