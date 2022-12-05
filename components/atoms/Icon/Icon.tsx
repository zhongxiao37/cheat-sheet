import * as React from "react";
import useStyles from "./Icon.styles";
import ICONS from "./Icons";
import clsx from "clsx";

export { ICONS };

export interface IIconProps {
  type: keyof typeof ICONS;
  size?: number;
  className?: string;
}

const Icon: React.FC<IIconProps> = ({ type, size = 24, className }) => {
  const classes = useStyles();
  const Component = ICONS[type] as () => JSX.Element;

  return (
    <div
      className={clsx(classes.root, className)}
      style={{ width: size, height: size }}
    >
      <Component />
    </div>
  );
};

export default Icon;
