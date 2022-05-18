import { pagarme } from "../configs/axios";
import { ICreditProps } from "../interface/newTransaction";

export async function creaditCard(data: ICreditProps) {
  try {
    const response = await pagarme.post("/orders/", data);
    return response;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}
