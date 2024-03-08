import { Children, PropsWithChildren, cloneElement, useRef } from "react";
import { CSSTransition as _CSSTransition } from "react-transition-group";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";

export const CSSTransition = (props: PropsWithChildren<CSSTransitionProps>) => {
  const nodeRef = useRef(null);

  return (
    <_CSSTransition {...props} nodeRef={nodeRef}>
      <>
        {Children.map(props.children, (child) => {
          // @ts-expect-error This line is temporarily ignored due to a known issue with TypeScript type checking
          return cloneElement(child, { ref: nodeRef });
        })}
      </>
    </_CSSTransition>
  );
};
