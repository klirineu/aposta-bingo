import { pagarme } from "../configs/axios";
import { IPixProps } from "../interface/newTransaction";

export async function pixType(data: IPixProps) {
  try {
    const response = await pagarme.post("/order/", data);

    return response;
  } catch (e) {
    throw new Error("Internal server Error");
  }
}
