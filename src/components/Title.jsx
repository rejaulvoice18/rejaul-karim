import { useEffect } from "react";


const Title = (title) => {
    useEffect(()=>{
        document.title = `${title} | Rejaul Karim`
    },[])
};

export default Title;