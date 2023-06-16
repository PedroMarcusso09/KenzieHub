import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'react-toastify';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Headline, StyledH1 } from '../../styles/typography';
import { StyledSelect, StyledLabel } from '../../styles/select';
import { MainContainer, FormContainer } from '../LoginPage/styles';
import { LogoContainer } from './styles';
import logo from '../../assets/logo.svg';


const schema = z.object({
  name: z.string().nonempty({ message: 'Nome é obrigatório' }),
  email: z.string().nonempty({ message: 'Email é obrigatório' }).email({ message: 'Email inválido' }),
  password: z
    .string()
    .nonempty({ message: 'Senha é obrigatória' })
    .min(8, { message: 'Senha deve ter no mínimo 8 caracteres' }),
  bio: z.string().nonempty({ message: 'Bio é obrigatória' }),
  contact: z.string().nonempty({ message: 'Contato é obrigatório' }),
  course_module: z.string().nonempty({ message: 'Selecione um módulo' }),
});

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

const instance = axios.create({
  baseURL: 'https://kenziehub.herokuapp.com',
  timeout: 1000,
});

const onSubmit = async (data) => {
  setLoading(true);
  try {
    await instance.post('/users', data);
    toast.success("Conta criada com sucesso!");
    window.location.href = '/';
  } catch (err) {
    if (err.response && err.response.data.message === 'Email already exists') {
      toast.error("Este e-mail já foi registrado. Por favor, use um diferente.");
    } else {
      toast.error("Ops! Algo deu errado.");
    }
  } finally {
    setLoading(false);
  }
};

  return (
    <MainContainer>
      <LogoContainer>
      <img src={logo} alt="Logo" />
      <Button type="button" text="Voltar" variant="back" />
      </LogoContainer>
      <FormContainer style={{ height: '62.5rem' }}>
      <StyledH1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Crie sua conta</StyledH1>
      <Headline style={{ textAlign: 'center' }}>Rapido e grátis, vamos nessa</Headline>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input register={register} label="Nome" id="name" type="text" placeholder="Digite aqui seu nome" errors={errors} />
        <Input register={register} label="Email" id="email" type="email" placeholder="Digite aqui seu email" errors={errors} />
        <Input register={register} label="Senha" id="password" type="password" placeholder="Digite aqui sua senha" errors={errors} />
        <Input register={register} label="Confirmar Senha" id="password1" type="password1" placeholder="Digite novamente sua senha" errors={errors} />
        <Input register={register} label="Bio" id="bio" type="text" placeholder="Fale sobre você" errors={errors} />
        <Input register={register} label="Contato" id="contact" type="text" placeholder="Opções de contato" errors={errors} />
        <StyledLabel htmlFor="course_module">Selecione o módulo</StyledLabel>
        <StyledSelect id="course_module" {...register('course_module')}>
          <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo </option>
          <option value="Segundo módulo (Frontend Avançado)">Segundo módulo </option>
          <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo </option>
          <option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
          {errors.course_module && <p>{errors.course_module.message}</p>}
        </StyledSelect>
        <Button type="submit" text="Cadastrar" disabled={loading} variant="primary" />
        {loading && <p>Carregando...</p>}
      </form>
      </FormContainer>
    </MainContainer>
  );
}

export default RegisterPage