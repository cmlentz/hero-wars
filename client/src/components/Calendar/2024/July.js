import "../Calendar.css";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function July() {
  return (
    <div>
      <div class="month">      
        <ul>
          <li class="prev"><Arrowlink to="/jun24">&#9664;</Arrowlink></li>
          <li class="next"><Arrowlink to="/aug24">&#9654;</Arrowlink></li>
          <li>
            July<br />
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
        <li>
          1 <br />
          When Worlds Collide - Day After Day<br />
          When Worlds Collide - Value Exchange<br />
          When Worlds Collide - Master of Fire<br />
          When Worlds Collide - Titan Plains<br />
          When Worlds Collide - Father of the Ocean</li>
        <li>2 <br /><br /><br /><br /></li>
        <li>3 <br /><br /><br /><br /></li>
        <li>
          4 <br />
          Power of the Elements - Day After Day<br />
          Power of the Elements - Hydra Hunter<br />
          Power of the Elements - Fellow in Arms<br />
          Power of the Elements - Value Exchange</li>
        <li>5 <br /><br /><br /><br /></li>
        <li>6 <br /><br /><br /><br /></li>
        <li>
          7 <br />
          Outland Splendor - Day After Day<br />
          Outland Splendor - Outland Treasures<br />
          Outland Splendor - Successful Fighter<br />
          Outland Splendor - Secrets of Outland</li>
        <li>8 <br /><br /><br /><br /></li>
        <li>9 <br /><br /><br /><br /></li>
        <li>
          10 <br />
          Brawls - Day After Day<br />
          Brawls - Value Exchange<br />
          Brawls - Energy of Evolution<br />
          Brawls - Journey<br />
          Brawls - Secrets of Outland<br />
          Brawls - The Way Up<br />
          Brawls - Successful Fighter</li>
        <li>11 <br /><br /><br /><br /></li>
        <li>12 <br /><br /><br /><br /></li>
        <li>13 <br /><br /><br /><br /></li>
        <li>
          14 <br />
          Secrets of the Dungeon - Day After Day<br />
          Secrets of the Dungeon - Value Exchange<br />
          Secrets of the Dungeon - Hydra Hunter<br />
          Secrets of the Dungeon - Energy of Evolution<br />
          Secrets of the Dungeon - Titanic Contribution< br/>
          Secrets of the Dungeon - Fellow in Arms</li>
        <li>15 <br /><br /><br /><br /></li>
        <li>16 <br /><br /><br /><br /></li>
        <li>
          17 <br />
          Way of Honor - Day After Day<br />
          Way of Honor - Value Exchange<br />
          Way of Honor - Journey<br />
          Way of Honor - The Way Up<br />
          Way of Honor - Purifier's Wrath</li>
        <li>18 <br /><br /><br /><br /></li>
        <li>19 <br /><br /><br /><br /></li>
        <li>
          20 <br />
          Treasure of the Valkyries - Day After Day<br />
          Treasure of the Valkyries - Journey<br />
          Treasure of the Valkyries - Value Exchange<br />
          Treasure of the Valkyries - The Way Up</li>
        <li>21 <br /><br /><br /><br /></li>
        <li>22 <br /><br /><br /><br /></li>
        <li>
          23 <br />
          Runic Millstone - Day After Day<br />
          Runic Millstone - Wanting More<br />
          Runic Millstone - Value Exchange<br />
          Runic Millstone - Journey</li>
        <li>24 <br /><br /><br /><br /></li>
        <li>25 <br /><br /><br /><br /><br /></li>
        <li>
          26 <br />
          Sunny Days - Day Afer Day<br />
          Sunny Days - Value Exchange<br />
          Sunny Days - Journey<br />
          Sunny Days - The Way Up<br />
          Sunny Days - Soaring Might</li>
        <li>27 <br /><br /><br /><br /><br /></li>
        <li>28 <br /><br /><br /><br /><br /></li>
        <li>
          29 <br />
          Gift of the Elements - Day Afer Day<br />
          Gift of the Elements - Energy of Evolution<br />
          Gift of the Elements - Secrets of Outland<br />
          Gift of the Elements - Value Exchange<br />
          Gift of the Elements - Fusion of Souls<br />
          Gift of the Elements - Titanic Contribution</li>
        <li>30 <br /><br /><br /><br /><br /></li>
        <li>31 <br /><br /><br /><br /><br /></li>
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