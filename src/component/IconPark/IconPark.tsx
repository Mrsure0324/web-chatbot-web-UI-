interface IconFontProps extends React.HTMLAttributes<HTMLOrSVGElement> {
	name: string;
	size: string | number;
	color?: string;
}

const IconFont: React.FC<IconFontProps> = (props) => {
	return (
		<svg
			aria-hidden="true"
			fontSize={props.size}
			color={props.color}
			{...props}
			className={`icon-font-svg  ${props.className || ''}`}
		>
			<use href={'#' + props.name}></use>
		</svg>
	);
};

export default IconFont;
