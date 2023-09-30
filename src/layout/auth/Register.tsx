import React from "react";
import { AuthWrapper } from "./Auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Input } from "components";
import { emailRegex, numRegex } from "./variables";
import { useSelector } from "react-redux";
import { RootState } from "store/store";

interface Inputs {
  number: string;
  name: string;
  email: string;
  check: boolean;
}

function Register() {
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
        <h5>Регистрация</h5>
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
        <Input
          placeholder="Имя"
          error={errors?.name}
          {...register("name", {
            required: "Обязательное поле",
          })}
        />
        <Input
          placeholder="Email"
          type="email"
          error={errors?.email}
          {...register("email", {
            required: "Обязательное поле",
            pattern: {
              value: emailRegex,
              message: "Формат email должен быть example@mail.com",
            },
          })}
        />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <label htmlFor="checkbox" style={{ cursor: "pointer" }}>
            Даю согласие на обработку данных
          </label>
          <Input
            type="checkbox"
            error={errors?.check}
            id="checkbox"
            {...register("check", {
              required: "Обязательное поле",
            })}
          />
        </div>
        <Button type="submit">Зарегистрироваться</Button>
      </form>
    </AuthWrapper>
  );
}

export default Register;
