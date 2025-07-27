import styled from "styled-components";

const Tower = () =>{
  return (
    <Wrapper>
      <Column>
        <p>1 - Battle / Booster (Relic Floor)</p>
        <p>2 - Treasure</p>
        <p>3 - Battle / Booster</p>
        <p>4 - Treasure</p>
        <p>5 - Battle / Booster</p>
        <p>6 - Treasure</p>
        <p>7 - Battle / Booster</p>
        <p>8 - Treasure</p>
      </Column>
      <Column>
        <p>9 - Battle / Booster</p>
        <p>10 - Treasure</p>
        <p>11 - Battle / Booster</p>
        <p>12 - Treasure</p>
        <p>13 - Battle / Booster</p>
        <p>14 - Treasure</p>
        <p>15 - Battle / Booster</p>
      </Column>
      <Column>
        <p>16 - Treasure</p>
        <p>17 - Battle / Booster</p>
        <p>18 - Treasure</p>
        <p>19 - Battle / Booster</p>
        <p>20 - Treasure</p>
        <p>21 - Battle / Booster</p>
        <p>22 - Treasure</p>
        <p>23 - Complete</p>
      </Column>
    </Wrapper>
    
  );
}

export default Tower;

const Wrapper = styled.div`
  padding-left: 10px;
  padding-top: 25px;
`

const Column = styled.div`
  float: left;
  width: 15%;
  padding: 5px;
`