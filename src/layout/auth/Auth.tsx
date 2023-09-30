import { Button, Input } from "components";
import React, { ChangeEvent, useState } from "react";
import { FieldError, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { saveNumber } from "store/slice";
import { numRegex } from "./variables";

interface Inputs {
  number: string;
  password: string;
}

function Auth() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => alert(JSON.stringify(data));

  const [showPass, setShowPass] = useState(false);

  const [isNumberFound, setIsNumberFound] = useState(false);

  const [showFormatError, setShowFormatError] = useState(false);

  const formatError: FieldError = {
    type: "value",
    message: "Введите в формате +7 (777) 777 77 77",
  };

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const checkNumber = async (e: ChangeEvent<HTMLInputElement>) => {
    if (numRegex.test(e.target.value)) {
      if (e.target.value === "+7 (777) 777 77 77") {
        setShowFormatError(false);
        setIsNumberFound(true);
      } else {
        dispatch(saveNumber(e.target.value));
        navigate("register");
      }
    } else setShowFormatError(true);
  };

  return (
    <AuthWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h5>Авторизация</h5>
        <span style={{ fontSize: "0.8rem" }}>
          Единственный валидный номер +7 (777) 777 77 77 , остальные будут
          перебрасывать на регистрацию
        </span>
        <Input
          placeholder="Номер"
          error={showFormatError ? formatError : errors?.number}
          {...register("number", {
            required: "Обязательное поле",
            pattern: {
              value: numRegex,
              message: "Введите в формате +7 (777) 777 77 77",
            },
          })}
          onChange={checkNumber}
        />
        {isNumberFound && (
          <>
            <PassWrapper>
              <Input
                placeholder="Пароль"
                type={showPass ? "text" : "password"}
                {...register("password", {
                  required: "Обязательное поле",
                })}
              />
              <button type="button" onClick={() => setShowPass((v) => !v)}>
                {showPass ? <BsEyeSlash /> : <BsEye />}
              </button>
            </PassWrapper>
            <Button type="button" inline onClick={() => navigate("forget")}>
              Забыли пароль ?
            </Button>
            <Button type="submit" disabled={showFormatError}>
              Войти
            </Button>
          </>
        )}
      </form>
    </AuthWrapper>
  );
}

const PassWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  button {
    position: absolute;
    right: 5px;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export const AuthWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  height: 40vh;
  width: 30vw;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 15px;
  }
`;

export default Auth;
