// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WeedMarijuanaDrugPlantSvgrepoComsvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function WeedMarijuanaDrugPlantSvgrepoComsvgIcon(
  props: WeedMarijuanaDrugPlantSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.2"}
      baseProfile={"tiny"}
      viewBox={"-351 153 256 256"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M-177.7 334.5c6.3-2.3 12.6-5.2 19.8-8.6 31.9-16.4 51.7-41.7 51.7-41.7s-32.5.6-64.4 17c-4 1.7-7.5 4-10.9 5.7 5.7-7.5 12.1-16.4 18.7-25 25-37.1 31.3-77.3 31.3-77.3s-34.8 21-59.2 58.6c-5.2 7.5-9.8 14.9-13.8 22.7 1.1-10.3 1.1-22.1 1.1-33.6 0-50-19.8-91.1-19.8-91.1s-19.8 40.5-19.8 91.1c0 12.1.6 23.3 1.1 33.6-4-7.5-8.6-14.9-13.8-22.7-25-37.1-59.2-58.6-59.2-58.6s6.3 40 31.3 77.3c6.3 9.2 12.1 17.5 18.7 25-3.4-2.3-7.5-4-10.9-5.7-31.9-16.4-64.4-17-64.4-17s19.8 25.6 51.7 41.7c6.9 3.4 13.2 6.3 19.8 8.6-4 .6-8 1.1-12.1 2.3-30.5 6.4-53.2 23.9-53.2 23.9s27.3 7.5 58.6 1.1c9.8-2.3 19.8-4.6 27.3-7.5-1.1 1.1 15.8-8.6 21.6-14.4v60.4h8.6v-61.8c6.3 6.3 22.7 16.4 22.1 14.9 8 2.9 17.5 5.2 27.3 7.5 30.8 6.3 58.6-1.1 58.6-1.1s-22.1-17.5-53.4-23.8c-6.3-.3-10.4-.9-14.4-1.5z"
        }
      ></path>
    </svg>
  );
}

export default WeedMarijuanaDrugPlantSvgrepoComsvgIcon;
/* prettier-ignore-end */
