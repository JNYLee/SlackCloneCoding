import React, { CSSProperties, FC, useCallback } from "react";
import { CloseButton } from "react-toastify/dist/components";
import { CloseModalButton, CreateMenu } from "./styles";

interface Props {
	show: boolean;
	onCloseModal: (e: any) => void;
	style:CSSProperties;
	closeButton?: boolean
}

const Menu: FC<Props> = ({children, style, show, onCloseModal, closeButton}) => {
	const stopPropagation = useCallback((e) => {
		e.stopPropagation();
	}, []);

	return (
		<CreateMenu onClick={onCloseModal}>
			<div style={style} onClick={stopPropagation}> 
			{closeButton && <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>}
			{children}
			</div>
		</CreateMenu>
	);
};
Menu.defaultProps = {
	closeButton: true,
};

export default Menu;