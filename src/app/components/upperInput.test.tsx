import "@testing-library/jest-dom"
import {render,screen} from "@testing-library/react"
import UpperInput from "./upperInput"
import userEvent from "@testing-library/user-event";
describe("UpperInput Page Test",()=>{
    const User=userEvent.setup();
    it("소문자열을 입력하면 대문자로", async ()=>{
        // UpperInput 컴포넌트를 렌더링합니다.
        render(<UpperInput/>);
        // input 요소를 찾습니다.
        const inputText= screen.getByRole("textbox");
        const testText="stuff";
         // input 요소에 "stuff"를 입력합니다.
        await User.type(inputText, testText)
        // input 요소의 값이 대문자로 변환되었는지 확인합니다.
        expect(inputText).toHaveValue("STUFF");
    })

    it("대문자열을 입력하면 대문자로", async ()=>{
        // UpperInput 컴포넌트를 렌더링합니다.
        render(<UpperInput/>);
        // input 요소를 찾습니다.
        const inputText= screen.getByRole("textbox");
        const testText="STUFF";
         // input 요소에 "STUFF"를 입력합니다.
        await User.type(inputText, testText)
        // input 요소의 값이 그대로인지 확인합니다.
        expect(inputText).toHaveValue("STUFF");
    })
})