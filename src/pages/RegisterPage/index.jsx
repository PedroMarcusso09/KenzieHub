import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'react-toastify';
import { UserContext } from '../../providers/UserContext';
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
    .min(8, { message: 'Senha deve ter no mínimo 8 caracteres' })
    .refine(password => 
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).*$/.test(password), {
      message: 'Senha deve ter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial',
    }),
  passwordConfirmation: z.string().nonempty({ message: 'Confirmação de senha é obrigatória' }),
  bio: z.string().nonempty({ message: 'Bio é obrigatória' }),
  contact: z.string().nonempty({ message: 'Contato é obrigatório' }),
  course_module: z.string().nonempty({ message: 'Selecione um módulo' }),
})
.refine(data => data.password === data.passwordConfirmation, {
  message: 'Senha e confirmação de senha devem ser iguais',
  path: ['passwordConfirmation'],
});

const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  const { registerUser, loading } = useContext(UserContext);

  const onSubmit = (data) => {
    registerUser(data, toast, '/');
  };

  return (
    <MainContainer>
      <LogoContainer>
      <img src={logo} alt="Logo" />
      <Button type="button" text="Voltar" variant="back" />
      </LogoContainer>
      <FormContainer style={{ height: '68.75rem' }}>
      <StyledH1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Crie sua conta</StyledH1>
      <Headline style={{ textAlign: 'center' }}>Rapido e grátis, vamos nessa</Headline>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input register={register} label="Nome" id="name" type="text" placeholder="Digite aqui seu nome" errors={errors} />
        <Input register={register} label="Email" id="email" type="email" placeholder="Digite aqui seu email" errors={errors} />
        <Input register={register} label="Senha" id="password" type="password" placeholder="Digite aqui sua senha" errors={errors} />
        <Input register={register} label="Confirmar Senha" id="passwordConfirmation" type="password" placeholder="Digite novamente sua senha" errors={errors} />
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
        <Button type="submit" text="Cadastrar" disabled={loading} />
        {loading && <p>Carregando...</p>}
      </form>
      </FormContainer>
    </MainContainer>
  );
}

export default RegisterPage