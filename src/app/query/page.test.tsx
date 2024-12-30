import "@testing-library/jest-dom"
import {render,screen} from "@testing-library/react"
import Query from "./page"
import { FetchDataComponent } from "../components/fetch"
describe("Query Page Test",()=>{
    it("should render query page",()=>{
        //Arrange
        render(<Query/>)

        //Act 
        // query 대표적인 함수 3가지
        // screen.queryByRole
        // screen.findByRole
        // screen.getByRole
        const ul= screen.getByRole("list");//getByRole: DOM에서 해당 요소를 찾는 함수, list=li
        //screen.debug(); => 디버깅 용도
        //screen.logTestingPlaygroundURL(); => 디버깅 용도 
        
        //Assert
        expect(ul).toBeInTheDocument();
    })


    it("get by, query by, find by",async()=>{
        //query 별로 요소를 찾는 방법

        //Arrange
        render(<Query/>)

        //Act
        // 둘다 동기로 받는다. 
        const getByRole= screen.getByRole("list");//DOM 요소 못 찾으면 에러던짐
        const queryByRole= screen.queryByRole("list");//DOM 요소 못 찾으면 에러던짐
    

        const findByRole= await screen.findByRole("list");//비동기로 받는다.


        //Assert
        expect(getByRole).toBeInTheDocument();
        expect(queryByRole).toBeInTheDocument();
        expect(findByRole).toBeInTheDocument();

    })

    it("get by, query by, find by 못찾는 경우",async()=>{

        //Arrange
        render(<Query/>)

        //Act
        // const getByRole= screen.getByRole("button");
        const queryByRole= screen.queryByRole("button");

        // const findByRole= await screen.findByRole("button");


        //Assert
        // expect(getByRole).not.toBeInTheDocument();// error가 나오는 게 잘 된 테스트가 아님
        expect(()=> screen.getByRole("button")).toThrow();// 이런식으로 해주자
        
        //expect(queryByRole).not.toBeInTheDocument(); 이것도 맞지만
        expect(queryByRole).toBeNull()// 이렇게 해주자 

        // expect(findByRole).not.toBeInTheDocument();// 이것도 get by와 마찬가지로 에러 나옴
        await expect(screen.findByRole('button')).rejects.toThrow();//비동기로 받아주자 await, reject(에러)


    })

    // it("li 태그를 get by, Findby, queryBy로 찾기", async()=>{
    //     render(<Query/>)

    //     const getByRole= screen.getByRole("listitem");


    // })

    it("li 태그를 get by, Findby, queryBy로 찾기", async()=>{
        render(<Query/>)

        const getByRole= screen.getAllByRole("listitem");
        const queryByRole= screen.queryAllByRole("listitem");
        const findByRole=await screen.findAllByRole("listitem");

        
        expect(getByRole).toHaveLength(3)
        expect(findByRole).toHaveLength(3)
        expect(queryByRole).toHaveLength(3)


    })

    it("get All By, query All By, FindAllBy 요소가 없는 경우", async()=>{
        render(<Query/>)

    
        const queryByRole= screen.queryAllByRole("button");
        //queryBy
        //한개 찾을떄 없으면 null

        //queryAllBy
        //여러개 찾을때, 없으면 빈배열

        expect(()=> screen.getAllByRole("button")).toThrow();
        expect(queryByRole).toHaveLength(0);
        await expect(screen.findAllByRole('button')).rejects.toThrow();


    })

    it("get by, get by All 에러", ()=>{
        //getBy, getByAll 함수는 DOM 에서 요소를 찾지 못하면 에러를 던진다.

        render(<Query/>)

        try{
            screen.getByRole("button");
        }catch(error){
            expect(error).toBeInstanceOf(Error);
        }
        expect(()=>screen.getByRole("button")).toThrow();
    })


    it("Fetch Data Component", async () => {
        render(<FetchDataComponent />);
    
        const getBy = await screen.findByRole("list");
        screen.debug();
    
        expect(getBy).toBeInTheDocument();
      });

})