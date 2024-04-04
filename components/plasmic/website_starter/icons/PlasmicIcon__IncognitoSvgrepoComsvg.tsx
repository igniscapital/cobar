// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IncognitoSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IncognitoSvgrepoComsvgIcon(
  props: IncognitoSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M4.614 8.545l-.426 1.705H2a.75.75 0 000 1.5h20a.75.75 0 000-1.5h-2.188l-.426-1.705c-.546-2.183-.818-3.274-1.632-3.91C16.94 4 15.815 4 13.565 4h-3.13c-2.25 0-3.375 0-4.189.635-.814.636-1.087 1.727-1.632 3.91zM6.5 21a3.501 3.501 0 003.384-2.604l1.11-.555a2.25 2.25 0 012.012 0l1.11.555A3.501 3.501 0 0021 17.5a3.5 3.5 0 00-6.91-.794l-.413-.206a3.75 3.75 0 00-3.354 0l-.413.206A3.501 3.501 0 003 17.5 3.5 3.5 0 006.5 21z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IncognitoSvgrepoComsvgIcon;
/* prettier-ignore-end */
