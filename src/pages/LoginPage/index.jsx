import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { UserContext } from '../../providers/UserContext';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { HeadlineBold, StyledH1 } from '../../styles/typography';
import { FormContainer, MainContainer, LogoContainer, LogoImage, Container, FormContainerWrapper } from './styles';
import logo from '../../assets/logo.svg';

const schema = z.object({
  email: z.string().nonempty({ message: "Email é obrigatório" }),
  password: z.string().nonempty({ message: "Senha é obrigatória" }),
});

const LoginPage = () => {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: zodResolver(schema)
  });

  const { loginUser, loading } = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    loginUser(data, navigate);
  };

  const handleSignupClick = () => {
    navigate('/register');
  };
  
  return (
    <MainContainer>
      <LogoContainer>
        <LogoImage src={logo} alt="Logo" />
      </LogoContainer>
      <FormContainerWrapper data-has-errors={Object.keys(errors).length > 0}>
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
      </FormContainerWrapper>
    </MainContainer>
  );
};

export default LoginPage;