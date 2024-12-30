import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Role } from "./role";

describe("Role Test Suite", () => {
  it("role 별로 요소 찾아보기", () => {
    render(<Role />);

    const a = screen.getByRole("link");
    expect(a).toBeInTheDocument();

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();

    const hTags = screen.getAllByRole("heading");
    expect(hTags).toHaveLength(3);

    //h tag 한정
    const h1= screen.getByRole("heading", {level:1});
    expect(h1).toBeInTheDocument();

    const h1WithName = screen.getByRole("heading",{name:"에이치원"})
    expect(h1WithName).toBeInTheDocument();

    // const h1WithText= screen.getByText("에이치원")
    // expect(h1WithText).toBeInTheDocument();

    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();

    const img= screen.getByRole("img");
    expect(img).toBeInTheDocument();

    const textInput= screen.getByRole("textbox");
    expect(textInput).toBeInTheDocument();

    const checkBox = screen.getByRole("checkbox");
    expect(checkBox).toBeInTheDocument();

    const numberInput = screen.getByRole("spinbutton");
    expect(numberInput).toBeInTheDocument();

    const radioInput= screen.getByRole("radio");
    expect(radioInput).toBeInTheDocument();

    //이렇게도 가능하다
    // const ul= document.querySelector("ul");
    // expect(ul).toBeInTheDocument()


  });
});