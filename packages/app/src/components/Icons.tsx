/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Fragment, ReactNode } from "react";

export function IconValid() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      css={styles.strokeCurrentColor}
    >
      <circle cx="5.5" cy="5.5" r="4.5" />
      <path
        d="M7.72228 3.27783L5.5 8.00005L3.5 5.50005"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconInvalid() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      css={styles.strokeCurrentColor}
    >
      <circle cx="5.5" cy="5.5" r="4.5" />
      <path
        d="M3.27783 7.72228L7.72228 3.27783M3.27783 3.27783L7.72228 7.72228"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconMale() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.77818 6.71743C6.60661 5.54586 4.70711 5.54586 3.53554 6.71743C2.36397 7.889 2.36397 9.7885 3.53554 10.9601C4.70711 12.1316 6.60661 12.1316 7.77818 10.9601C8.94975 9.7885 8.94975 7.889 7.77818 6.71743ZM2.82843 6.01032C4.27102 4.56773 6.54135 4.45737 8.11059 5.67923C8.11737 5.67158 8.12441 5.66409 8.13173 5.65677L10.1066 3.6819L8.48529 3.6819C8.20914 3.6819 7.98529 3.45804 7.98529 3.1819C7.98529 2.90575 8.20914 2.6819 8.48529 2.6819L11.3137 2.6819C11.3815 2.6819 11.4462 2.69539 11.5051 2.71984C11.5632 2.74388 11.6177 2.77934 11.6651 2.82623C11.6659 2.82693 11.6666 2.82764 11.6673 2.82834C11.668 2.82905 11.6687 2.82976 11.6694 2.83047C11.7586 2.92078 11.8137 3.0449 11.8137 3.1819L11.8137 6.01032C11.8137 6.28647 11.5899 6.51032 11.3137 6.51032C11.0376 6.51032 10.8137 6.28647 10.8137 6.01032L10.8137 4.389L8.83884 6.36388C8.83152 6.3712 8.82403 6.37824 8.81638 6.38502C10.0382 7.95426 9.92788 10.2246 8.48529 11.6672C6.92319 13.2293 4.39053 13.2293 2.82843 11.6672C1.26634 10.1051 1.26634 7.57242 2.82843 6.01032Z"
        fill="#6FA0A8"
      />
    </svg>
  );
}

export function IconFemale() {
  return (
    <svg
      width="15"
      height="13"
      viewBox="0 0 8 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 7C5.65685 7 7 5.65685 7 4C7 2.34315 5.65685 1 4 1C2.34315 1 1 2.34315 1 4C1 5.65685 2.34315 7 4 7ZM8 4C8 6.04013 6.47267 7.72354 4.49906 7.96917C4.49969 7.97937 4.5 7.98965 4.5 8V9.5H6C6.27614 9.5 6.5 9.72386 6.5 10C6.5 10.2761 6.27614 10.5 6 10.5H4.5V12C4.5 12.2761 4.27614 12.5 4 12.5C3.72386 12.5 3.5 12.2761 3.5 12V10.5H2C1.72386 10.5 1.5 10.2761 1.5 10C1.5 9.72386 1.72386 9.5 2 9.5H3.5V8C3.5 7.98965 3.50031 7.97937 3.50094 7.96917C1.52733 7.72354 0 6.04013 0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4Z"
        fill="#8A92D9"
      />
    </svg>
  );
}

const styles = {
  strokeCurrentColor: css({
    stroke: "currentColor"
  })
};
