import { pagarme } from "../configs/axios";
import { IDebitProps } from "../interface/newTransaction";

export async function debitCard(data: IDebitProps) {
  try {
    const response = await pagarme.post("/orders/", data);

    return response;
  } catch (error) {
    throw new Error("Internal server error");
  }
}
