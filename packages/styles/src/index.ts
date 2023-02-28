import { br_circle, fs_regular, fw_800 } from "@bennytestui1/constants";
import styled from "styled-components";
import { motion, AnimatePresence } from "./animationExports";
interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
	width?: string;
	minWidth?: string;
	maxWidth?: string;
	height?: string;
	minHeight?: string;
	maxHeight?: string;

	position?: string;
	top?: string;
	right?: string;
	bottom?: string;
	left?: string;
	zIndex?: string;

	margin?: string;
	marginTop?: string;
	marginRight?: string;
	marginBottom?: string;
	marginLeft?: string;
	marginInline?: string;
	marginBlock?: string;

	padding?: string;
	paddingTop?: string;
	paddingRight?: string;
	paddingBottom?: string;
	paddingLeft?: string;
	paddingInline?: string;
	paddingBlock?: string;

	alignContent?: string;
	alignItems?: string;
	alignSelf?: string;
	display?: string;
	flex?: string;
	flexBasis?: string;
	flexDirection?: string;
	flexGrow?: string;
	flexShrink?: string;
	flexWrap?: string;
	gap?: string;
	justifyItems?: string;
	justifyContent?: string;
	justifySelf?: string;
	order?: string;

	overflow?: string;
	overflowX?: string;
	overflowY?: string;

	gridTemplateColumns?: string;
	gridTemplateRows?: string;
	gridTemplateAreas?: string;
	gridAutoColumns?: string;
	gridAutoRows?: string;
	gridAutoFlow?: string;
	grid?: string;
	gridRow?: string;
	gridColumn?: string;
	gridArea?: string;
	gridRowStart?: string;
	gridRowEnd?: string;
	gridColumnStart?: string;
	gridColumnEnd?: string;
	gridRowGap?: string;
	gridColumnGap?: string;
	gridGap?: string;

	background?: string;
	backgroundColor?: string;
	backgroundImage?: string;
	backgroundSize?: string;
	backgroundPosition?: string;
	backgroundRepeat?: string;
	backgroundAttachment?: string;
	backgroundClip?: string;
	backgroundOrigin?: string;
	backgroundBlendMode?: string;

	border?: string;
	borderRadius?: string;
	borderImage?: string;
	borderImageSource?: string;
	borderImageSlice?: string;
	borderImageWidth?: string;
	borderImageOutset?: string;
	borderImageRepeat?: string;
	borderTop?: string;
	borderRight?: string;
	borderBottom?: string;
	borderLeft?: string;
	borderTopColor?: string;
	borderRightColor?: string;
	borderBottomColor?: string;
	borderLeftColor?: string;

	boxShadow?: string;
	dropShadow?: string;
	textShadow?: string;

	color?: string;
	font?: string;
	fontFamily?: string;
	fontSize?: string;
	fontStyle?: string;
	fontVariant?: string;
	fontWeight?: string;
	fontStretch?: string;
	lineHeight?: string;
	letterSpacing?: string;
	textAlign?: string;
	textDecoration?: string;
	textTransform?: string;
	textIndent?: string;
	wordSpacing?: string;
	writingMode?: string;
	verticalAlign?: string;

	cursor?: string;
	opacity?: string;
	aspectRatio?: string;
	whiteSpace?: string;
	wordBreak?: string;

	cssTransition?: string;
	cssAnimation?: string;
	cssAnimationName?: string;
	cssAnimationDuration?: string;
	cssAnimationTimingFunction?: string;
	cssAnimationDelay?: string;
	cssAnimationIterationCount?: string;
	cssAnimationDirection?: string;
	cssAnimationFillMode?: string;

	filter?: string;
	backdropFilter?: string;
	clipPath?: string;
	mask?: string;

	scrollSnapType?: string;
	scrollSnapAlign?: string;
	scrollSnapStop?: string;
	scrollBehavior?: string;

	scrollBarWidth?: string;
	scrollBarColor?: string;
	scrollBarTrackColor?: string;
	scrollBarThumbColor?: string;
}

const Button = styled.div<ButtonProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 8px 16px;
	background-color: #000;
	border-radius: ${({ borderRadius }) => borderRadius || br_circle}};
	color: #fff;
	font-size: ${({ fontSize }) => fontSize || fs_regular};
	font-weight: ${({ fontWeight }) => fontWeight || fw_800};
	cursor: pointer;
	width: 100px;
	height: 200px;
`;

const ButtonText = styled.h1`
	font-size: 16px;
	font-weight: 500;
	color: #fff;
	font-family: "Roboto", sans-serif;
	font-style: italic;
`;

const ButtonIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 48px;
	height: 48px;
`;

export { Button, ButtonText, ButtonIcon };
