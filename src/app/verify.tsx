"use client";
import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function AuthVerify() {
  const router = useRouter();
//   const { token, update } = useAuthStore((state) => state);
  const searchParams = useSearchParams();
  const returnToken = searchParams.get("token");

//   useEffect(() => {
//     if (returnToken) update(returnToken);
//   }, [returnToken]);

//   useEffect(() => {
//     if (token) {
//       router.push("/onebox");
//     }
//   }, [token]);

  return null;
}
