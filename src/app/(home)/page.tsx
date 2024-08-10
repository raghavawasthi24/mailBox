"use client";
import { useEffect, useState } from "react";
import InboxMain from "./sections/inbox-mainpage";
import InboxPanel from "./sections/inbox-panel";

export default function Home() {

  const [data, setData] = useState(null);
  const [activeMail, setActiveMail] = useState(null);
  const [activeMailData, setActiveMailData] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch(
            "https://hiring.reachinbox.xyz/api/v1/onebox/list",
            {
              method: "GET",
              headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoicmFnaGF2YXdhc3RoaTI0MEBnbWFpbC5jb20iLCJpZCI6NDUzLCJmaXJzdE5hbWUiOiJSYWdoYXYiLCJsYXN0TmFtZSI6IkF3YXN0aGkifSwiaWF0IjoxNzIzMjU1ODQyLCJleHAiOjE3NTQ3OTE4NDJ9.UDb4_4hVsX_3Q0j0mbRRsxMYmSvwCa5hOdma5MZ7RiI", 
                "Content-Type": "application/json",
              },
            }
          );

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const result = await response.json();
          console.log(result.data);

          setData(result.data);
        } catch (error) {
          console.error("Failed to fetch data:", error);
        }
      }

      fetchData();
    }, []);



    useEffect(() => {
      console.log("Active Mail:", activeMail);


       async function fetchData() {
         try {
           const response = await fetch(
             `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${activeMail}`,
             {
               method: "GET",
               headers: {
                 Authorization:
                   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoicmFnaGF2YXdhc3RoaTI0MEBnbWFpbC5jb20iLCJpZCI6NDUzLCJmaXJzdE5hbWUiOiJSYWdoYXYiLCJsYXN0TmFtZSI6IkF3YXN0aGkifSwiaWF0IjoxNzIzMjU1ODQyLCJleHAiOjE3NTQ3OTE4NDJ9.UDb4_4hVsX_3Q0j0mbRRsxMYmSvwCa5hOdma5MZ7RiI",
                 "Content-Type": "application/json",
               },
             }
           );

           if (!response.ok) {
             throw new Error(`HTTP error! status: ${response.status}`);
           }

           const result = await response.json();
           console.log(result.data);

           setActiveMailData(result.data);
         } catch (error) {
           console.error("Failed to fetch data:", error);
         }
       }

       fetchData();


    }
    ,[activeMail]);

  return (
    <div className="bg-[#FAFAFA] h-screen flex">
      <InboxPanel data={data} setActiveMail={setActiveMail} setCurrentUser={setCurrentUser}/>

      {
        activeMail ? (
          <div className="w-3/4">
            <InboxMain activeMailData={activeMailData} currentUser={currentUser}/>
          </div>
        ) : null
      }
    </div>
  );
}
