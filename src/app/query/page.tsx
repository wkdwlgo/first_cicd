import { NextPage } from "next";
import { useEffect } from "react";

const Query: NextPage =()=>{
    //ul: role list

    // const [color, setColor]= useState<Array>([])

    // useEffect(())
    return(
        <ul>
            <li>{"Red"}</li>
            <li>{"Blue"}</li>
            <li>{"Green"}</li>
        </ul>
    );
}

export default Query;

export const noEmptyString = (str:string) =>{
    if(str===""){
        throw new Error("빈 문자열이 들어왔습니다.")
    }

    return str;
}