import { BotaoLeitura, CardNoticia, DateCardNoticia, DescriptionCardNoticia, ImageCardNoticia, TituloCardNoticia } from "../../styled";
import { CardNoticiaProps } from "./types";

export function CardNoticias({ titulo, date, image, descriptionCurto, setModal }: CardNoticiaProps) {
    return (
        <CardNoticia>
            <ImageCardNoticia src={image} />
            <TituloCardNoticia>{titulo}</TituloCardNoticia>
            <DateCardNoticia>{date}</DateCardNoticia>
            <DescriptionCardNoticia>
                {descriptionCurto}
            </DescriptionCardNoticia>
            <BotaoLeitura onClick={setModal}>Ver más</BotaoLeitura>
        </CardNoticia>
    )
}