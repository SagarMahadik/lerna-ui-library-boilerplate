import styled from "styled-components";

export * from "styled-components";

//@ts-ignore
const defaultStyled = typeof styled === "function" ? styled : styled;

export { defaultStyled as default };
