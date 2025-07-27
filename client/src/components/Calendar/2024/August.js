import "../Calendar.css";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Month() {
  return (
    <div>
      <div class="month">      
        <ul>
          <li class="prev"><Arrowlink to="/jul24">&#9664;</Arrowlink></li>
          <li class="next"><Arrowlink to="/sep24">&#9654;</Arrowlink></li>
          <li>
            August<br />
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
        <li><br /><br /><br /><br /><br /></li>
        <li>
          1 <br />
          Power of the Elements - Day After Day<br />
          Power of the Elements - Hydra Hunter<br />
          Power of the Elements - Fellow in Arms<br />
          Power of the Elements - Value Exchange</li>
        <li>2 <br /><br /><br /><br /></li>
        <li>3 <br /><br /><br /><br /></li>
        <li>
          4 <br />
          Outland Splendor - Day After Day<br />
          Outland Splendor - Good Deal<br />
          Outland Splendor - Successful Fighter<br />
          Outland Splendor - Secrets of Outland</li>
        <li>5 <br /><br /><br /><br /></li>
        <li>6 <br /><br /><br /><br /></li>
        <li>
          7 <br />
          Heroes' Brawls - Day After Day<br />
          Heroes' Brawls - Value Exchange<br />
          Heroes' Brawls - Energy of Evolution<br />
          Heroes' Brawls - Journey<br />
          Heroes' Brawls - Secrets of Outland<br />
          Heroes' Brawls - The Way Up<br />
          Heroes' Brawls - Successful Fighter</li>
        <li>8 <br /><br /><br /><br /></li>
        <li>9 <br /><br /><br /><br /></li>
        <li>10 <br /><br /><br /><br /></li>
        <li>
          11 <br />
          Secrets of the Dungeon - Day After Day<br />
          Secrets of the Dungeon - Value Exchange<br />
          Secrets of the Dungeon - Hydra Hunter<br />
          Secrets of the Dungeon - Energy of Evolution<br />
          Secrets of the Dungeon - Titanic Contribution<br />
          Secrets of the Dungeon - Fellow in Arms</li>
        <li>12 <br /><br /><br /><br /></li>
        <li>13 <br /><br /><br /><br /></li>
        <li>
          14 <br />
          Way of Progress - Day After Day<br />
          Way of Progress - Value Exchange<br />
          Way of Progress - Journey<br />
          Way of Progress - The Way Up<br />
          Way of Progress - Astral Projection</li>
        <li>15 <br /><br /><br /><br /></li>
        <li>16 <br /><br /><br /><br /></li>
        <li>
          17 <br />
          Treasures of Valkyries - Day After Day<br />
          Treasures of Valkyries - Journey<br />
          Treasures of Valkyries - Value Exchange<br />
          Treasures of Valkyries - The Way Up</li>
        <li>18 <br /><br /><br /><br /></li>
        <li>19 <br /><br /><br /><br /></li>
        <li>
          20 <br />
          Runic Millstone - Day After Day<br />
          Runic Millstone - Wanting More<br />
          Runic Millstone - Value Exchange<br />
          Runic Millstone - Journey</li>
        <li>21 <br /><br /><br /><br /></li>
        <li>22 <br /><br /><br /><br /></li>
        <li>
          23 <br />
          Abyss Curse - Day After Day<br />
          Abyss Curse - Value Exchange<br />
          Abyss Curse - Journey<br />
          Abyss Curse - The Way Up<br />
          Abyss Curse - Tes'Lin's Overdrive</li>
        <li>24 <br /><br /><br /><br /></li>
        <li>25 <br /><br /><br /><br /></li>
        <li>
          26 <br />
          Power of the Elements - Day After Day<br />
          Power of the Elements - Hydra Hunter<br />
          Power of the Elements - Fellow in Arms<br />
          Power of the Elements - Value Exchange</li>
        <li>27 <br /><br /><br /><br /><br /></li>
        <li>28 <br /><br /><br /><br /><br /></li>
        <li>
          29 <br />
          When Worlds Collide - Day After Day<br />
          When Worlds Collide - Value Exchange<br />
          When Worlds Collide - Master of Fire<br />
          When Worlds Collide - Titan Plains<br />
          When Worlds Collide - Father of the Ocean</li>
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