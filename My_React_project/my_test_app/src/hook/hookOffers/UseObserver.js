// import React, { useEffect, useRef } from "react";

// export const useObserver = (ref, canLoad, isLoading, callback) => {

//     // ЭТО ДЛЯ БЕСКОНЕЧНОЙ ЛЕНТЫ ОФФЕРОВ

//     useEffect(()=> {

//         const observer = useRef()

//         if(isLoading) return;
//         if(observer.current) observer.current.disconnect();

//         var callB = function(entries, observer) {

//             if(entries[0].isIntersecting && canLoad)
//             {
//                 callback()
//             }
//         }
//         observer.current = new IntersectionObserver(callB)
//         observer.current.observe(ref.current)
//     }, [isLoading])

// }