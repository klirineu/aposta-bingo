import { NextApiRequest, NextApiResponse } from "next";
import { creaditCard } from "../../../services/credit_card";
import { debitCard } from "../../../services/debit_card";
import { pixType } from "../../../services/pix";

export default async function pay(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { method } = request;
  const { type } = request.query;

  if (method === "GET") {
    return response.status(404).json({ message: "Cannot get" });
  }

  if (method === "POST") {
    const newTransaction = request.body;

    if (!newTransaction) {
      return response.status(404).json({ message: "The fields are mandatory" });
    }
    switch (type) {
      case "credit_card": {
        try {
          const data = await creaditCard(newTransaction);
          return response.status(404).json(data);
        } catch (error) {
          return response.status(500).json(error);
        }
      }
      case "debit_card": {
        try {
          const data = await debitCard(newTransaction);
          return response.status(201).json(data);
        } catch (error) {
          return response.status(500).json(error);
        }
      }
      case "pix": {
        try {
          const data = await pixType(newTransaction);
          return response.status(201).json(data);
        } catch (error) {
          return response.status(500).json(error);
        }
      }
    }
  }
}

// | "debit_card" | "boleto" | "pix"
