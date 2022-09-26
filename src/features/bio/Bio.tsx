import { useState } from "react";
import { NomesSimpsons, INFO_SIMPSONS } from "./constants";

import * as SC from './styled';

const Bio = () => {
    const [bioActive, setBioActive] = useState(INFO_SIMPSONS[NomesSimpsons.BART]);

    const onClick: (nome: NomesSimpsons) => void = (nome) =>
        setBioActive(INFO_SIMPSONS[nome]);

    const criarBotoes = () => {
        return Object.keys(INFO_SIMPSONS).map((nome: string) => (
            <SC.BotaoBio
                key={nome as string}
                onClick={() => onClick(nome as NomesSimpsons)}
                isActive={
                  bioActive.id === nome
                    ? true
                    : false
                }
            >
                {nome}
            </SC.BotaoBio>
        ));
    };

    return (
        <SC.BioContainer>
            <SC.CointainerBotoes>{criarBotoes()}</SC.CointainerBotoes>
            <div>
                <div>
                    <SC.BioImage
                        src={bioActive.image}
                        alt={bioActive.nome}
                    />
                </div>
                <div>
                    <SC.BioNome>{bioActive.nome}</SC.BioNome>
                    <SC.BioDescription>{bioActive.description}</SC.BioDescription>
                </div>
            </div>
        </SC.BioContainer>
    );
};

export default Bio;