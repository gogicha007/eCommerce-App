import { API_KYES } from "./ct-constants";
import { ITF_LoginData } from "../interfaces/interfaces";

export const getTokensByPass = async (data: ITF_LoginData) => {
    const response = await fetch(
        `${API_KYES.CTP_AUTH_URL}/oauth/${API_KYES.CTP_PROJECT_KEY}/customers/token?grant_type=password&username=${data.login}&password=${data.password}`,
        {
            method: "POST",
            headers: {
                Authorization: `Basic ${btoa(`${API_KYES.CTP_CLIENT_ID}:${API_KYES.CTP_CLIENT_SECRET}`)}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }
    );
    return response.json();
};
