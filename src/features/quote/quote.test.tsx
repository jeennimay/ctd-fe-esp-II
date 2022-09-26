import { CitaType } from "./types";
//import { render } from "../../test-utils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { API_URL } from "../../app/constants";
//import Cita from "./Cita";

const mockedApiResponse: CitaType = {
    quote: "I hope I didn't brain my damage.",
    character: "Homer Simpson",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
    characterDirection: "Right"
};

describe("Cita", () => {
    describe("Success cases", () => {
        const worker = setupServer(
            rest.get<CitaType>(API_URL, (req, res, ctx) => {
                return res(ctx.json(mockedApiResponse), ctx.delay(500));
            })
        );

        beforeAll(() => {
            worker.listen();
        });

        afterEach(() => {
            worker.resetHandlers();
        });

        afterAll(() => {
            worker.close();
        });

        it("should render coorectly with no data", () => {
            //render(<Cita />);

            expect(screen.getByText("Nenhuma citação encontrada")).toBeTruthy();
            expect(screen.getByPlaceholderText("Digite o nome do autor")).toBeTruthy();
            expect(screen.getByText("Obter citação aleatória")).toBeTruthy();
            expect(screen.getByText("Apagar")).toBeTruthy();
        });

        it("should get a random quote when the button 'Obter citação aleatória' is pressed", async () => {
            //render(<Cita />);

            const randomQuote = screen.getByText("Obter citação aleatória");

            userEvent.click(randomQuote);

            expect(await screen.findByText("CARREGANDO...")).toBeTruthy();
            expect(await screen.findByText("I hope I didn't brain my damage.")).toBeTruthy();
        });


    })
});