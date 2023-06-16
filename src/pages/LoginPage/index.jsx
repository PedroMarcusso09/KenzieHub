import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import axios from 'axios';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { HeadlineBold, StyledH1 } from '../../styles/typography';
import { FormContainer, MainContainer, LogoContainer, LogoImage, Container } from './styles';
import logo from '../../assets/logo.svg';

const schema = z.object({
  email: z.string().nonempty({ message: "Email é obrigatório" }),
  password: z.string().nonempty({ message: "Senha é obrigatória" }),
});

const LoginPage = () => {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: zodResolver(schema)
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await axios.post('https://kenziehub.herokuapp.com/sessions', data);
      localStorage.setItem('@TOKEN', res.data.token);
      localStorage.setItem('@USERID', res.data.user.id);

      const userRes = await axios.get(`https://kenziehub.herokuapp.com/users/${res.data.user.id}`, {
        headers: {
          Authorization: `Bearer ${res.data.token}`
        }
      });

      localStorage.setItem('@USERDATA', JSON.stringify(userRes.data));

      navigate('/dashboard'); 
    } catch (err) {
      console.log(err.message || 'Algo deu errado');
    }
    setLoading(false);
  };

  const handleSignupClick = () => {
    navigate('/register');
  };
  
  return (
    <MainContainer>
      <LogoContainer>
        <LogoImage src={logo} alt="Logo" />
      </LogoContainer>
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledH1 style={{ textAlign: 'center' }}>Login</StyledH1>
          <Input 
            register={register} 
            label="Email" 
            id="email" 
            type="email" 
            placeholder="Email" 
            errors={errors} 
          />
          <Input 
            register={register} 
            label="Senha" 
            id="password" 
            type="password" 
            placeholder="Senha" 
            errors={errors} 
          />
          <Container>
            <Button type="submit" text="Entrar" variant="primary" disabled={loading} />
            <HeadlineBold style={{ textAlign: 'center' }}>Ainda não possui uma conta?</HeadlineBold>
            <Button type="button" onClick={handleSignupClick} text="Cadastre-se" variant="signup" disabled={loading} />
            {loading && <p>Carregando...</p>}
          </Container>
        </form>
      </FormContainer>
    </MainContainer>
  );
};

export default LoginPage;