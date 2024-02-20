import styled from "styled-components";


const Rules = () => {
  return (
    <RulesContainer>
        <h2>How To Play Dice Game...Game Rules</h2>
        <div className="text">
            <p>1/ Select Any Number</p>
            <p>2/ Click and Role The Dice</p>
            <p>
                3/ After the Dice is roled if your selected
                number is equal to dice number you will get
                same point as Dice.
            </p>
            <p>
                If you get wrong Guess then 2 points 
                will be deducted
            </p>

        </div>
    </RulesContainer>
  );
};
export default Rules

const RulesContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    background-color: #25277ce5;
    color: #ffffff;
    padding: 20px;
    margin-top: 40px;
    border-radius: 10px;
    h2{
        font-size: 26px;
        font-weight: 700;
    }
    .text{
        margin-top: 24px;
    }
`;