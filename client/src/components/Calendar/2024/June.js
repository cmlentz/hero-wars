import "../Calendar.css";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function June() {
  return (
    <div>
      <div class="month">      
        <ul>
          <li class="prev"><Arrowlink to="/may24">&#9664;</Arrowlink></li>
          <li class="next"><Arrowlink to="/jul24">&#9654;</Arrowlink></li>
          <li>
            June<br />
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
        <li><br /><br /><br /><br /><br /></li>
        <li><br /><br /><br /><br /><br /></li>
        <li>1 <br /><br /><br /><br /></li>
        <li>2 <br /><br /><br /><br /></li>
        <li>
          3 <br />
          Gift of the Elements - Assemble<br />
          Gift of the Elements - Unbreakable Shield<br />
          Gift of the Elements - Value Exchange<br />
          Gift of the Elements - Celestial Hall<br />
          Gift of the Elements - Titanic Contribution</li>
        <li>4 <br /><br /><br /><br /></li>
        <li>5 <br /><br /><br /><br /></li>
        <li>
          6 <br />
          Power of the Elements - Day After Day<br />
          Power of the Elements - Hydra Hunter<br />
          Power of the Elements - Fellow in Arms<br />
          Power of the Elements - Value Exchange</li>
        <li>7 <br /><br /><br /><br /></li>
        <li>8 <br /><br /><br /><br /></li>
        <li>
          9 <br />
          Outland Splendor - Day After Day<br />
          Outland Splendor - Outland Treasures<br />
          Outland Splendor - Successful Fighter<br />
          Outland Splendor - Secrets of Outland</li>
        <li>10 <br /><br /><br /><br /></li>
        <li>11 <br /><br /><br /><br /></li>
        <li>
          12 <br />
          Perfection of Darkness - Day After Day<br />
          Perfection of Darkness - Value Exchange<br />
          Perfection of Darkness - Endless Darkness<br />
          Perfection of Darkness - Dance of Shadows<br />
          Perfection of Darkness - Perfection of Darkness</li>
        <li>13 <br /><br /><br /><br /></li>
        <li>14 <br /><br /><br /><br /></li>
        <li>15 <br /><br /><br /><br /></li>
        <li>
          16 <br />
          Secrets of the Dungeon - Day After Day<br />
          Secrets of the Dungeon - Value Exchange<br />
          Secrets of the Dungeon - Hydra Hunter<br />
          Secrets of the Dungeon - Energy of Evolution<br />
          Secrets of the Dungeon - Fellow in Arms</li>
        <li>17 <br /><br /><br /><br /></li>
        <li>18 <br /><br /><br /><br /></li>
        <li>
          19 <br />
          Way of Eternity - Day After Day<br />
          Way of Eternity - Value Exchange<br />
          Way of Eternity - Journey<br />
          Way of Eternity - The Way Up</li>
        <li>20 <br /><br /><br /><br /></li>
        <li>21 <br /><br /><br /><br /></li>
        <li>
          22 <br />
          Treasures of Valkyries - Day After Day<br />
          Treasures of Valkyries - Journey<br />
          Treasures of Valkyries - Value Exchange<br />
          Treasures of Valkyries - The Way Up</li>
        <li>23 <br /><br /><br /><br /></li>
        <li>24 <br /><br /><br /><br /></li>
        <li>
          25<br />
          Runic Millstone - Day After Day<br />
          Runic Millstone - Wanting More<br />
          Runic Millstone - Value Exchange<br />
          Runic Millstone - Journey</li>
        <li>26 <br /><br /><br /><br /><br /></li>
        <li>27 <br /><br /><br /><br /><br /></li>
        <li>
          28 <br />
          Unfading Beauty - Day After Day<br />
          Unfading Beauty - Value Exchange<br />
          Unfading Beauty - Journey<br />
          Unfading Beauty - The Way Up<br />
          Unfading Beauty - Soaring Might</li>
        <li>
          29 <br /><br /><br /><br /><br /></li>
        <li>
          30 <br /><br /><br /><br /><br /></li>
        <li>
          31 <br /><br /><br /><br /><br /></li>
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