import { useState } from "react";

type UseFormProps = {
  initialValues: {
    id: number;
    name: string;
    description: string;
    categoryId: string;
    price: number | null;
  };
};

function useForm({ initialValues }: UseFormProps) {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return { values, setValues, handleInputChange };
}

export default function Form({ children }: { children: React.ReactNode }) {
  return <form autoComplete="off">{children}</form>;
}

export { useForm, Form };
