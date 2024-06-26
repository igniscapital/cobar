// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vAGhiduYQcXwriW3jEbZ3x
// Component: M3lk57f5iN7u

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { PlasmicHead } from "@plasmicapp/react-web";
import Dialog from "../../Dialog"; // plasmic-import: 2NiAx_IOLi93/component
import Button from "../../Button"; // plasmic-import: mredfESl2zMt/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: vAGhiduYQcXwriW3jEbZ3x/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: M3lk57f5iN7u/css

import WeedMarijuanaDrugPlantSvgrepoComsvgIcon from "./icons/PlasmicIcon__WeedMarijuanaDrugPlantSvgrepoComsvg"; // plasmic-import: Y3FuEMxURpKW/icon
import Money3SvgrepoComsvgIcon from "./icons/PlasmicIcon__Money3SvgrepoComsvg"; // plasmic-import: ktRph7-P9soD/icon
import BurnSvgrepoComsvgIcon from "./icons/PlasmicIcon__BurnSvgrepoComsvg"; // plasmic-import: FH249D4tipuu/icon
import IncognitoSvgrepoComsvgIcon from "./icons/PlasmicIcon__IncognitoSvgrepoComsvg"; // plasmic-import: YKWb227M8Y43/icon
import Twitter3SvgrepoComsvgIcon from "./icons/PlasmicIcon__Twitter3SvgrepoComsvg"; // plasmic-import: bebtPscR3VsO/icon
import TelegramSvgrepoCom1SvgIcon from "./icons/PlasmicIcon__TelegramSvgrepoCom1Svg"; // plasmic-import: zQkYbugWxXlQ/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: HOhUCJCrEjgV/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: XBaaNrVQ8k0d/icon

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: Flex__<"div">;
  pageMetadataOverride?: Flex__<typeof PlasmicHead>;
  section?: Flex__<"section">;
  columns?: Flex__<"div">;
  h1?: Flex__<"h1">;
  img?: Flex__<typeof PlasmicImg__>;
  dialog?: Flex__<typeof Dialog>;
  button?: Flex__<typeof Button>;
};

export interface DefaultHomepageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "dialog.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => true
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <PlasmicHead
            data-plasmic-name={"pageMetadataOverride"}
            data-plasmic-override={overrides.pageMetadataOverride}
            className={classNames("__wab_instance", sty.pageMetadataOverride)}
            description={
              'Pablo Escobar Coin $COBAR" is a memecoin inspired by the infamous Colombian drug lord Pablo Escobar. This memecoin seeks to capture the rebellious and daring spirit often associated with Escobar, offering a unique and edgy investment opportunity in the cryptocurrency market.'
            }
            image={"/plasmic/website_starter/images/donpablojpg.jpg"}
            title={"$COBAR on SOL"}
          />

          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <div
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              className={classNames(projectcss.all, sty.columns)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__ldLA)}
              >
                <h1
                  data-plasmic-name={"h1"}
                  data-plasmic-override={overrides.h1}
                  className={classNames(
                    projectcss.all,
                    projectcss.h1,
                    projectcss.__wab_text,
                    sty.h1
                  )}
                >
                  {"Welcome to $COBAR"}
                </h1>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__xc9
                  )}
                >
                  {
                    'Pablo Escobar Coin $COBAR" is a memecoin inspired by the infamous Colombian drug lord Pablo Escobar. This memecoin seeks to capture the rebellious and daring spirit often associated with Escobar, offering a unique and edgy investment opportunity in the cryptocurrency market.'
                  }
                </div>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__lJgH)}
                >
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__u09Vw)}
                  >
                    <WeedMarijuanaDrugPlantSvgrepoComsvgIcon
                      className={classNames(projectcss.all, sty.svg__g9HXk)}
                      role={"img"}
                    />

                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__o3N1X
                      )}
                    >
                      {"2 SOL for LP"}
                    </h5>
                  </Stack__>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__zPlL)}
                  >
                    <Money3SvgrepoComsvgIcon
                      className={classNames(projectcss.all, sty.svg__dp2Ek)}
                      role={"img"}
                    />

                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__w4WR
                      )}
                    >
                      {"8.888.888.888 $COBAR"}
                    </h5>
                  </Stack__>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__rDBtc)}
                  >
                    <BurnSvgrepoComsvgIcon
                      className={classNames(projectcss.all, sty.svg__oYxp)}
                      role={"img"}
                    />

                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__hdrDd
                      )}
                    >
                      {"50% Burn"}
                    </h5>
                  </Stack__>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__e651I)}
                  >
                    <IncognitoSvgrepoComsvgIcon
                      className={classNames(projectcss.all, sty.svg__eKon)}
                      role={"img"}
                    />

                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__pMkJ3
                      )}
                    >
                      {"50% Team Allocation"}
                    </h5>
                  </Stack__>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___8CafF)}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__iSbdV
                      )}
                    >
                      {"CA : 6tekh957BwnQASctMaGvCpKQxxqGBPDRbJfRUaMfGgur"}
                    </h5>
                  </Stack__>
                </Stack__>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__lbb8I)}
                >
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___9LebP)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__tEH
                      )}
                    >
                      {"Joint the Community"}
                    </div>
                    <PlasmicLink__
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__pguPc
                      )}
                      component={Link}
                      platform={"nextjs"}
                    >
                      <Twitter3SvgrepoComsvgIcon
                        className={classNames(projectcss.all, sty.svg__jKlla)}
                        role={"img"}
                      />
                    </PlasmicLink__>
                    <PlasmicLink__
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__x9N6I
                      )}
                      component={Link}
                      href={"https://t.me/Escobarcartelsol"}
                      platform={"nextjs"}
                    >
                      <TelegramSvgrepoCom1SvgIcon
                        className={classNames(projectcss.all, sty.svg___54Qwo)}
                        role={"img"}
                      />
                    </PlasmicLink__>
                  </Stack__>
                </Stack__>
              </Stack__>
              <div className={classNames(projectcss.all, sty.column__wjvcV)}>
                <PlasmicImg__
                  data-plasmic-name={"img"}
                  data-plasmic-override={overrides.img}
                  alt={""}
                  className={classNames(sty.img)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/website_starter/images/pabloEscobarpng.png",
                    fullWidth: 700,
                    fullHeight: 700,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </div>
          </section>
          <Dialog
            data-plasmic-name={"dialog"}
            data-plasmic-override={overrides.dialog}
            body={
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__eGr78)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__fImfO
                  )}
                >
                  {
                    " $COBAR is a meme coin inspired by the infamous Colombian drug lord Pablo Escobar  \nwith no intrinsic value or expectation of financial return. \nFor entertainment purposes only."
                  }
                </div>
                <Button
                  data-plasmic-name={"button"}
                  data-plasmic-override={overrides.button}
                  className={classNames("__wab_instance", sty.button)}
                  onClick={async event => {
                    const $steps = {};

                    $steps["updateDialogOpen"] = true
                      ? (() => {
                          const actionArgs = {
                            variable: {
                              objRoot: $state,
                              variablePath: ["dialog", "open"]
                            },
                            operation: 4
                          };
                          return (({
                            variable,
                            value,
                            startIndex,
                            deleteCount
                          }) => {
                            if (!variable) {
                              return;
                            }
                            const { objRoot, variablePath } = variable;

                            const oldValue = $stateGet(objRoot, variablePath);
                            $stateSet(objRoot, variablePath, !oldValue);
                            return !oldValue;
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["updateDialogOpen"] != null &&
                      typeof $steps["updateDialogOpen"] === "object" &&
                      typeof $steps["updateDialogOpen"].then === "function"
                    ) {
                      $steps["updateDialogOpen"] = await $steps[
                        "updateDialogOpen"
                      ];
                    }

                    $steps["updateDialogOpen2"] = true
                      ? (() => {
                          const actionArgs = {
                            customFunction: async () => {
                              return (() => {
                                return document.addEventListener(
                                  "click",
                                  () => {
                                    const audio = new Audio(
                                      "https://site-assets.plasmic.app/9d5ea49eca8caef4a8d7dc560ef075ad.mp3"
                                    );
                                    audio.play();
                                  }
                                );
                              })();
                            }
                          };
                          return (({ customFunction }) => {
                            return customFunction();
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["updateDialogOpen2"] != null &&
                      typeof $steps["updateDialogOpen2"] === "object" &&
                      typeof $steps["updateDialogOpen2"].then === "function"
                    ) {
                      $steps["updateDialogOpen2"] = await $steps[
                        "updateDialogOpen2"
                      ];
                    }
                  }}
                >
                  {"Continue"}
                </Button>
              </Stack__>
            }
            className={classNames("__wab_instance", sty.dialog)}
            noTrigger={true}
            onOpenChange={generateStateOnChangeProp($state, ["dialog", "open"])}
            open={generateStateValueProp($state, ["dialog", "open"])}
            title={"Welcome to $COBAR"}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "pageMetadataOverride",
    "section",
    "columns",
    "h1",
    "img",
    "dialog",
    "button"
  ],
  pageMetadataOverride: ["pageMetadataOverride"],
  section: ["section", "columns", "h1", "img"],
  columns: ["columns", "h1", "img"],
  h1: ["h1"],
  img: ["img"],
  dialog: ["dialog", "button"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  pageMetadataOverride: typeof PlasmicHead;
  section: "section";
  columns: "div";
  h1: "h1";
  img: typeof PlasmicImg__;
  dialog: typeof Dialog;
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    pageMetadataOverride: makeNodeComponent("pageMetadataOverride"),
    section: makeNodeComponent("section"),
    columns: makeNodeComponent("columns"),
    h1: makeNodeComponent("h1"),
    img: makeNodeComponent("img"),
    dialog: makeNodeComponent("dialog"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
