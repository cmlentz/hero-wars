import "../Calendar.css";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function May() {
  return (
    <div>
      <div class="month">      
        <ul>
          <li class="prev"><Arrowlink to="/apr24">&#9664;</Arrowlink></li>
          <li class="next"><Arrowlink to="/jun24">&#9654;</Arrowlink></li>
          <li>
            May<br />
            2024
          </li>
        </ul>
      </div>

      <ul class="weekdays">
        <li>Sun</li>
        <li>Mon</li>
        <li>Tue</li>
        <li>Wed</li>
        <li>Thu</li>
        <li>Fri</li>
        <li>Sat</li>
      </ul>

      <ul class="days">
        <li><br /><br /><br /><br /><br /></li>
        <li><br /><br /><br /><br /><br /></li>
        <li><br /><br /><br /><br /><br /></li>
        <li>1 <br /><br /><br /><br /><br /></li>
        <li>2 <br /><br /><br /><br /><br /></li>
        <li>3 <br /><br /><br /><br /><br /></li>
        <li>4 <br /><br /><br /><br /><br /></li>
        <li>5 <br /><br /><br /><br /><br /></li>
        <li>6 <br /><br /><br /><br /><br /></li>
        <li>7 <br /><br /><br /><br /><br /></li>
        <li>8 <br /><br /><br /><br /><br /></li>
        <li>9 <br /><br /><br /><br /><br /></li>
        <li>10 <br /><br /><br /><br /><br /></li>
        <li>11 <br /><br /><br /><br /><br /></li>
        <li>
          12 <br />
          Outland Splendor - Assemble<br />
          Outland Splendor - Outland Treasures<br />
          Outland Splendor - Successful Fighter<br />
          Outland Splendor - Secrets of Outland</li>
        <li>13 <br /><br /><br /><br /></li>
        <li>14 <br /><br /><br /><br /></li>
        <li>
          15 <br />
          Titan Brawls - Day After Day<br />
          Titan Brawls - Value Exchange<br />
          Titan Brawls - Fellow In Arms<br />
          Titan Brawls - Titanic Contribution</li>
        <li>16 <br /><br /><br /><br /></li>
        <li>17 <br /><br /><br /><br /></li>
        <li>18 <br /><br /><br /><br /></li>
        <li>
          19 <br />
          Treasure of Valkyries - Punctuality<br />
          Treasure of Valkyries - Expeditions<br />
          Treasure of Valkyries - Value Exchange<br />
          Treasure of Valkyries - The Way Up</li>
        <li>20 <br /><br /><br /><br /></li>
        <li>21 <br /><br /><br /><br /></li>
        <li>
          22 <br />
          Way of Chaos - Day After Day<br />
          Way of Chaos - Value Exchange<br />
          Way of Chaos - Explorer<br />
          Way of Chaos - The Way Up</li>
        <li>23 <br /><br /><br /><br /></li>
        <li>24 <br /><br /><br /><br /></li>
        <li>
          25 <br />
          Bonds of Fire - Assemble<br />
          Bonds of Fire - Value Exchange<br />
          Bonds of Fire - Spending Energy<br />
          Bonds of Fire - Duelist</li>
        <li>26 <br /><br /><br /><br /></li>
        <li>27 <br /><br /><br /><br /></li>
        <li>
          28 <br />
          Runic Millstone - Day After Day<br />
          Runic Millstone - Wanting More<br />
          Runic Millstone - Value Exchange<br />
          Runic Millstone - Expeditions</li>
        <li>29 <br /><br /><br /><br /></li>
        <li>30 <br /><br /><br /><br /></li>
        <li>
          31 <br />
          Heavenly Allies - Assemble<br />
          Heavenly Allies - Value Exchange<br />
          Heavenly Allies - Journey<br />
          Heavenly Allies - The Way Up<br />
          Heavenly Allies - Soaring Might</li>
      </ul>
    </div>
  );
};

const Arrowlink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &:hover {
    color: white;
  }
  `;