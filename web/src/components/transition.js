import React from "react";
import { SwitchTransition, Transition } from "react-transition-group";

export const TransitionWrapper = ({ children, trigger, duration }) => {
  const TRANSITION_DURATION = 200;
  const TRANSITION_STYLES = {
    default: {
      transition: `opacity ${duration || TRANSITION_DURATION}ms ease-in-out`,
    },
    entering: {
      opacity: 0,
    },
    entered: {
      opacity: 1,
    },
    exiting: {
      opacity: 0,
    },
    exited: {
      opacity: 0,
    },
  };
  return (
    <SwitchTransition>
      <Transition
        key={trigger}
        mountOnEnter={true}
        unmountOnExit={true}
        timeout={duration || TRANSITION_DURATION}
      >
        {(status) => (
          <div
            style={{
              ...TRANSITION_STYLES.default,
              ...TRANSITION_STYLES[status],
            }}
          >
            {children}
          </div>
        )}
      </Transition>
    </SwitchTransition>
  );
};