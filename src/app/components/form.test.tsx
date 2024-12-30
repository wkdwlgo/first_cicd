import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
//fireEvent도 있다. 
import userEvent from "@testing-library/user-event";
import Form from "./form";
import { prototype } from "events";
import { TODO } from "./types";

describe("form 테스트", () => {
  const User = userEvent.setup();

  it("input에 값을 입력하면 value에 값이 있어야한다.", async () => {
    // Arrange
    const setTodoMock = jest.fn();
    render(<Form handleSaveToStorage={jest.fn()} setTodos={setTodoMock} />);

    // Act
    // 1. input 요소를 찾는다.
    const input = screen.getByRole("textbox");

    // // 2. input 요소를 클릭한다.
    // await User.click(input);

    // 3. input 요소에 타이핑한다.
    await User.type(input, "test");

    // setTodoMock 호출 되었는지 확인
    expect(input).toHaveValue("test");
  });


  it("생성하기 버튼을 클릭하면 handleAddTodo가 호출되고 setTodos와 handleSaveToStorage가 호출되어야한다.", async()=>{
    //Arrange
    const User = userEvent.setup();
    const setTodosMock =jest.fn();
    const handleSaveToStorageMock= jest.fn();
    const newTodo: TODO={
      id:1,
      todo:"test",
      done:false,
    }
    jest.spyOn(Date.prototype, "getTime").mockReturnValue(1); //Date().getTime()의 함수의 결과가 항상 1로 나오게 만들어준다. 
    render(<Form setTodos={setTodosMock} handleSaveToStorage={handleSaveToStorageMock} />)

    const input = screen.getByRole("textbox");
    await User.type(input, newTodo.todo);

    const submitButton= screen.getByRole("button", {name:/create/i});
    await User.click(submitButton);

    //Act
    expect(setTodosMock).toHaveBeenCalledTimes(1);
    expect(handleSaveToStorageMock).toHaveBeenCalledTimes(1);
    expect(handleSaveToStorageMock).toHaveBeenCalledWith(newTodo);


  })

  it("todo가 empty일때, error 발생해야한다.", ()=>{



    //error 잡는 방법
    //1. rejects.toThrow
    //2. try catch
    //3. 
  })

  const renderForm = () => {
    render(<Form handleSaveToStorage={jest.fn()} setTodos={jest.fn()} />);
  };

  it("form이 렌더링 되어야 합니다.", () => {
    renderForm();

    const form = screen.getByLabelText("form");
    expect(form).toBeInTheDocument();

    const formByTestId = screen.getByTestId("todo-form");
    expect(formByTestId).toBeInTheDocument();

    const formByTitle = screen.getByTitle(/create/i);
    expect(formByTitle).toBeInTheDocument();

    const formByQuerySelector = document.querySelector("form");
    expect(formByQuerySelector).toBeInTheDocument();

    const formById = document.getElementById("todo-form");
    expect(formById).toBeInTheDocument();
  });

  it("input이 렌더링 되어야합니다.", () => {
    renderForm();

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();

    const inputByLabel = screen.getByLabelText(/입력/i);
    expect(inputByLabel).toBeInTheDocument();

    const inputByPlaceholder = screen.getByPlaceholderText(/할 일/i);
    expect(inputByPlaceholder).toBeInTheDocument();

    const inputByQuerySelector = document.querySelector("form input");
    expect(inputByQuerySelector).toBeInTheDocument();
  });

  it("button이 렌더링 되어야합니다.", () => {
    renderForm();

    const button = screen.getByRole("button", { name: /cancel/i });
    expect(button).toBeInTheDocument();
  });
});