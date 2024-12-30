import "@testing-library/jest-dom";
import { Suffix } from "./suffix";
import {render, screen} from "@testing-library/react"

describe("Suffix Test Suite",()=>{
    it("suffix Test",() =>{
        render(<Suffix/>)

        const h3= screen.getByText("Data Input");
        expect(h3).toBeInTheDocument();

        const imgWrapper = screen.getByTestId("codeit-img-wrapper");
        expect(imgWrapper).toBeInTheDocument();

        const imgRole= screen.getByRole("img");
        expect(imgRole).toBeInTheDocument();

        // const imgAltText= screen.getByAltText(/codeit-img/);
        // expect(imgAltText).toBeInTheDocument();
        
        const inputBylabel =screen.getByLabelText("email");
        expect(inputBylabel).toBeInTheDocument();

        const inputByDisplayValue= screen.getByDisplayValue("hello");
        expect(inputByDisplayValue).toBeInTheDocument();

        const inputByPlaceholder = screen.getByPlaceholderText(/type/i);
        expect(inputByPlaceholder).toBeInTheDocument();

        const buttonByTitle= screen.getByTitle(/click/i);
        expect(buttonByTitle).toBeInTheDocument();



    })
})