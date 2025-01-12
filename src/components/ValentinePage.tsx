import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #F8C8DC;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const HeaderText = styled.h1`
  font-family: 'Bradley Hand ITC', cursive;
  font-size: 50px;
  font-weight: bold;
  color: rgb(2, 39, 15);
  text-align: center;
  margin-top: 20px;
  margin-bottom: 0px;
`;

const SubText = styled.h2`
  font-family: 'Ink Free', cursive;
  font-size: 10px;
  font-weight: bold;
  color: rgb(4, 2, 39);
  text-align: right;
  margin-top: 20px;
  margin-bottom: 0px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
  position: relative;
`;

interface ButtonProps {
  $position?: { x: number; y: number };
}

const Button = styled.button<ButtonProps>`
  background-color: #FFB6C1;
  color: white;
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border: none;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: ${props => props.$position ? 'absolute' : 'relative'};
  left: ${props => props.$position ? `${props.$position.x}px` : 'auto'};
  top: ${props => props.$position ? `${props.$position.y}px` : 'auto'};

  &:hover {
    background-color: #FAF9F6;
  }
`;

const GifContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 90px;
`;

const GifInCorner = styled.img`
  position: absolute;
  max-width: 150px;
  border-radius: 10px;
`;

const ValentinePage: React.FC = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();  // Add this hook

  const handleNoButtonHover = () => {
    const buttonWidth = 164;  // Button width (padding + font size)
    const buttonHeight = 39;  // Button height (padding)

    // Calculate the maximum X and Y positions to ensure the button stays within the viewport
    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;

    // Generate random positions within the limits of the page
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    setNoButtonPosition({ x: newX, y: newY });
  };

  const handleYesClick = () => {
    navigate('/yes');  // Changed from window.location.href
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <HeaderText>Will you make me the luckiest guy and be my valentine?</HeaderText>
        <SubText>Pretty please? 🥺</SubText>
        
        {/* GIFs in four corners */}
        <GifInCorner
          src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2h0cDkxbWxpenJheXZsZzQ4bDZ3M2N4ZGJ0bXFwZDYyZGNkYzRiMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/10a8AOSeP6Rqfu/giphy.gif"
          alt="Cute animated illustration"
          style={{ top: -165, left: -135 }}
        />
        <GifInCorner
          src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2x3bTU5OGtlcnQxdHU1cTF5eG8xenFmcHNlM2locnRvbXBza21odCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/qUIQfddFeDBIPRw2cW/giphy.gif"
          alt="Cute animated illustration"
          style={{ top: -165, right: -135 }}
        />
        <GifInCorner
          src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGRmZ2lldHZhcWsxeDF0aGJ0MmQweGgweGs0c3gzZWhybHF1MW82byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/a2aK70fIbZXrpGmXJa/giphy.gif"
          alt="Cute animated illustration"
          style={{ bottom: -165, left: -135 }}
        />
        <GifInCorner
          src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHRoNXprbTU5a2c3MWRlZWZoZ3djcXJwam4wZXNmejE2b2VpaW9vdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/jQhB29KUfyKQmjQ8fF/giphy.gif"
          alt="Cute animated illustration"
          style={{ bottom: -165, right: -135 }}
        />
        
        <GifContainer>
          <img 
            src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGgybTg2bXV0cDdmaGZkaHFybjY2ZjB2a2l1cHNjZWFoM214MTZwZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/auGFCmg6rM0eI/giphy.gif"
            alt="Cute animated illustration"
            style={{ maxWidth: '300px', borderRadius: '10px' }}
          />
        </GifContainer>
        
        <ButtonContainer>
          <Button 
            onClick={handleYesClick}
            style={{ marginRight: '150px' }}
          >
            Yes, I'd love to! ❤️
          </Button>
          
          <Button
            onMouseEnter={handleNoButtonHover}
            $position={noButtonPosition}
            style={{ marginLeft: '150px' }}
          >
            No thanks :/
          </Button>
        </ButtonContainer>
      </Container>
    </>
  );
};

export default ValentinePage;
