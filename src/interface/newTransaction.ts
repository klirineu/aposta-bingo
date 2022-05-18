interface IItemsProps {
  items: [{ amount: number; description: string; quantity: number }];
}

interface ICustomerProps extends IItemsProps {
  customer: {
    name: string;
    email: string;
  };
}

export interface ICreditProps extends ICustomerProps {
  payments: {
    payment_method: "credit_card";
    credit_card: {
      recurrence: {
        recurrence: boolean;
        installments: number;
        statement_descriptor: string;
        card: {
          number: string;
          holder_name: string;
          exp_month: number;
          exp_year: number;
          cvv: string;
          billing_addres: {
            line_1: string;
            zip_code: string;
            city: string;
            state: string;
            country: string;
          };
        };
      };
    };
  };
}

export interface IDebitProps extends ICustomerProps {
  amount: string;
  payments: [
    {
      payments_method: "debit_card";
      debit_card: {
        statement_descriptor: string;
        card: {
          number: string;
          holder_name: string;
          exp_month: number;
          exp_year: string;
          cvv: string;
        };
        authentication: {
          type: string;
          threed_secure: {
            mp: string;
            success_url: string;
          };
        };
      };
    }
  ];
}

export interface IPixProps extends IItemsProps {
  customer: {
    name: string;
    email: string;
    type: string;
    document: string;
    phones: {
      home_phone: {
        country_code: string;
        number: string;
        area_code: string;
      };
    };
  };
  payments: [
    {
      payment_method: "pix";
      pix: {
        expires_in: string;
        additional_information: [
          {
            name: string;
            value: string;
          }
        ];
      };
    }
  ];
}
