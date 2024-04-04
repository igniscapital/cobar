// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Twitter3SvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Twitter3SvgrepoComsvgIcon(
  props: Twitter3SvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 512 512"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M459.186 151.787c.203 4.501.305 9.023.305 13.565 0 138.542-105.461 298.285-298.274 298.285-59.209 0-114.322-17.357-160.716-47.104 8.212.973 16.546 1.47 25.012 1.47 49.121 0 94.318-16.759 130.209-44.884-45.887-.841-84.596-31.154-97.938-72.804a104.555 104.555 0 0019.73 1.886c9.55 0 18.816-1.287 27.617-3.68-47.955-9.633-84.1-52.001-84.1-102.795 0-.446 0-.882.011-1.318a104.487 104.487 0 0047.488 13.109c-28.134-18.796-46.637-50.885-46.637-87.262 0-19.212 5.16-37.218 14.193-52.7 51.707 63.426 128.941 105.156 216.072 109.536a105.436 105.436 0 01-2.718-23.896c0-57.891 46.941-104.832 104.832-104.832 30.173 0 57.404 12.734 76.525 33.102 23.887-4.694 46.313-13.423 66.569-25.438-7.827 24.485-24.434 45.025-46.089 58.002 21.209-2.535 41.426-8.171 60.222-16.505-14.051 21.018-31.833 39.48-52.313 54.263z"
        }
        display={"inline"}
      ></path>
    </svg>
  );
}

export default Twitter3SvgrepoComsvgIcon;
/* prettier-ignore-end */
