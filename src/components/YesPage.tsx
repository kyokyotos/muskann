import React, { useEffect } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import confetti from 'canvas-confetti';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #FFB6C1;
    overflow: hidden;
  }
`;

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const heartBeat = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-family: 'Bradley Hand ITC', cursive;
  font-size: 3rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  animation: ${heartBeat} 1.5s infinite;
`;

const GifContainer = styled.div`
  animation: ${floatAnimation} 3s infinite ease-in-out;
  margin: 2rem 0;
`;

const Message = styled.p`
  font-family: 'Ink Free', cursive;
  font-size: 1.5rem;
  color: white;
  max-width: 600px;
  line-height: 1.6;
  margin: 1rem 0;
`;

const Heart = styled.div`
  position: fixed;
  color: white;
  font-size: 2rem;
  animation: ${floatAnimation} 3s infinite ease-in-out;
  opacity: 0.6;
`;

const YesPage: React.FC = () => {
  useEffect(() => {
    // Create initial confetti burst
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;

    const frame = () => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) return;

      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ff6b6b', '#FFB6C1', '#f06292']
      });
      
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ff6b6b', '#FFB6C1', '#f06292']
      });

      requestAnimationFrame(frame);
    };

    frame();

    // Cleanup
    return () => {
      cancelAnimationFrame(frame as unknown as number);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>YAYYYY!!! 🎉</Title>
        
        <GifContainer>
          <img 
            src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHZ4ZG50dGtwdThjZHphdXpveDZ6NHY1YnM1Mjd4eTI0dXFnbGN5OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/r4UG27LD5Ee5y/giphy.gif"
            alt="Lilo and Stitch Celebration"
            style={{ borderRadius: '10px', maxWidth: '300px' }}
          />
        </GifContainer>

        <Message>
          Thank you for saying yes! 💖 You've made me the happiest guy ever!
        </Message>

        {/* Floating hearts background */}
        {Array.from({ length: 20 }).map((_, i) => (
          <Heart
            key={i}
            style={{
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            ❤️
          </Heart>
        ))}
      </Container>
    </>
  );
};

export default YesPage;