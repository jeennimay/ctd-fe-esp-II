export type CardNoticiaProps = {
    titulo: string;
    date: number | string;
    image: string;
    descriptionCurto?: string;
    setModal: () => void;
}