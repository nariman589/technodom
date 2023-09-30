import React from "react";
import { AuthWrapper } from "./Auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Input, Button } from "components";
import { RootState } from "store/store";
import { numRegex } from "./variables";

interface Inputs {
  number: string;
}

function Forget() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => alert(JSON.stringify(data));

  const initialNum = useSelector((state: RootState) => state.Auth.number);

  return (
    <AuthWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h5>Восстановление пароля</h5>
        <Input
          placeholder="Номер"
          error={errors?.number}
          defaultValue={initialNum}
          {...register("number", {
            required: "Обязательное поле",
            pattern: {
              value: numRegex,
              message: "Введите в формате +7 (777) 777 77 77",
            },
          })}
        />

        <Button type="submit">Восстановить</Button>
      </form>
    </AuthWrapper>
  );
}

export default Forget;
