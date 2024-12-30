import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
//fireEvent도 있다. 
import userEvent from "@testing-library/user-event";
import DataFetchingComponent from "./page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {rest} from "msw";
import {setupServer} from "msw/node";
import { Post } from "../libs/useJSONPlaceholder";

const handler =[
    rest.get("https://jsonplaceholder.typicode.com/posts/1",(req,res,ctx)=>{
        const fakePost:Post={
            userId:1,
            id:1,
            title:"아아아아아아아아아",
            body:"우오앙아ㅗ아ㅓ아오아ㅗ아ㅗㅇ",
        }
        return res(ctx.json({fakePost}));
    }),

]


describe("Data Fetching Component Test Suite",()=>{

    const server= setupServer(...handler);

    beforeAll(()=>server.listen());
    afterEach(()=>server.restoreHandlers());
    afterAll(()=>server.close());

    const renderDataFetchingComponent=()=>{
        const client = new QueryClient({
            defaultOptions:{
                queries:{
                    retry:false,
                    staleTime:Infinity,
                }
            }
        });
        render(
            <QueryClientProvider client={client}>
                <DataFetchingComponent/>
            </QueryClientProvider>
    )
    }

    it("fs",()=>{
        
    })


    it("should render the Component",async()=>{
       renderDataFetchingComponent();
        
       const postBody= await screen.findByText(/body:/i);

       await waitFor(()=>{
            const postbodyByGetBy= screen.getByText(/body:/i)
            expect(postbodyByGetBy).toBeInTheDocument();
       });
       expect(postBody).toBeInTheDocument();

    })
})