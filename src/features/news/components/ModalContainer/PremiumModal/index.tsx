import { BotaoAssinar, CardModal, CloseButton, ContainerModal, ContainerTexto, DescriptionModal, ImageModal, TituloModal } from "../../../styled";
import { PremiumModalProps } from "../types";

export const PremiumModal = ({ setModal, close, assinarImage }: PremiumModalProps) => {
    return (
        <ContainerModal>
            <CardModal>
                <CloseButton onClick={() => setModal}>
                    <img src={close} alt="close button" />
                </CloseButton>
                <ImageModal src={assinarImage} alt="mr-burns-excelent" />
                <ContainerTexto>
                    <TituloModal>Assine a nossa newsletter</TituloModal>
                    <DescriptionModal>
                        Assine nossa newsletter e receba novidades de nossos personagens favoritos
                    </DescriptionModal>
                    <BotaoAssinar onClick={() =>
                        setTimeout(() => {
                            alert("Inscrito!")
                            setModal();
                        }, 1000)
                    } >
                        Assinar
                    </BotaoAssinar>
                </ContainerTexto>
            </CardModal>
        </ContainerModal>
    )
}