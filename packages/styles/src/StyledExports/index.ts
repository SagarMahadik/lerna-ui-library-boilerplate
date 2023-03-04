import styled from "styled-components";

export * from "styled-components";

const defaultStyled = typeof styled === "function" ? styled : styled;

export { defaultStyled as default };
