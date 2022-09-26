import { CardModal, CloseButton, ContainerModal, ContainerTexto, DescriptionModal, ImageModal, TituloModal } from "../../../styled";
import { ModalProps } from "../types";

export function ModalNoticia({ setModal, close, image, title, description }: ModalProps) {
    return (
        <ContainerModal>
            <CardModal>
                <CloseButton onClick={setModal}>
                    <img src={close} alt="close button" />
                </CloseButton>
                <ImageModal src={image} alt={title} />
                <ContainerTexto>
                    <TituloModal>{title}</TituloModal>
                    <DescriptionModal>{description}</DescriptionModal>
                </ContainerTexto>
            </CardModal>
        </ContainerModal>
    )
}