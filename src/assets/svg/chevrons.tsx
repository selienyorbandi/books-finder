import styled from "styled-components";
import { styledVariables } from "../../styled-components/variables.styled";

export const SvgIcon = styled.div<{ color: string }>`
  width: 32px;
  height: 32px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus,
  &:active,
  &:hover {
    background: ${({ color }) => color};
  }
  &:hover svg {
    filter: brightness(2);
  }
`;

export const ChevronLeft = ({ color = "currentColor" }: { color?: string }) => {
  return (
    <SvgIcon color={styledVariables.$primaryColor}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill={color}
        className="bi bi-chevron-left"
        viewBox="0 0 16 16">
        <path
          fillRule="evenodd"
          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
        />
      </svg>
    </SvgIcon>
  );
};

export const ChevronRight = ({ color = "currentColor" }: { color?: string }) => {
  return (
    <SvgIcon color={styledVariables.$primaryColor}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill={color}
        className="bi bi-chevron-right"
        viewBox="0 0 16 16">
        <path
          fillRule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </SvgIcon>
  );
};
