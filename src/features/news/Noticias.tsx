import { useEffect, useState } from "react";
import { AssinarImage, CloseButton as Close } from "../../assets";
import { CardNoticias } from "./components/CardNoticias";
import { ModalNoticia } from "./components/ModalContainer/ModalNoticia";
import { PremiumModal } from "./components/ModalContainer/PremiumModal";
import { obterNoticias } from "./fakeRest";
import { FormatacaoTempo, FormatacaoTitulo } from "./formatacoes";
import { ContainerNoticias, ListaNoticias, TituloNoticias } from "./styled";
import { INoticiasNormalizadas } from "./types";

const Noticias = () => {
    const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
    const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);

    const obterInformacoes = async () => {
        const resposta = await obterNoticias();

        const data = resposta.map((noticia) => {
            return {
                id: noticia.id,
                titulo: FormatacaoTitulo(noticia.titulo),
                description: noticia.description,
                date: `Faz ${FormatacaoTempo(noticia.date)} minutos`,
                premium: noticia.premium,
                image: noticia.image,
                descriptionCurto: noticia.description.substring(0, 100),
            };
        });

        setNoticias(data);
    };

    useEffect(() => {
        obterInformacoes();
    }, []);

    return (
        <ContainerNoticias>
            <TituloNoticias>Noticias dos Simpsons</TituloNoticias>
            <ListaNoticias>
                {noticias.map((noticia) => (
                    <CardNoticias
                        key={noticia.id}
                        setModal={() => setModal(noticia)}
                        titulo={noticia.titulo}
                        date={noticia.date}
                        image={noticia.image}
                        descriptionCurto={noticia.descriptionCurto}
                    />
                ))}
                {modal ? (
                    modal.premium ? (
                        <PremiumModal
                            setModal={() => setModal(null)}
                            close={Close}
                            assinarImage={AssinarImage}
                        />
                    ) : (
                        <ModalNoticia
                            setModal={() => setModal(null)}
                            close={Close}
                            image={modal.image}
                            title={modal.titulo}
                            description={modal.description}
                        />
                    )
                ) : null}
            </ListaNoticias>
        </ContainerNoticias>
    );
};

export default Noticias;
