import "../Calendar.css";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function October() {
  return (
    <div>
      <div class="month">      
        <ul>
          <li class="prev"><Arrowlink to="/aug25">&#9664;</Arrowlink></li>
          {/* <li class="next"><Arrowlink to="/oct25">&#9654;</Arrowlink></li> */}
          <li>
            October<br />
            2025
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
        <li>1 <br />
          Heroic Mission x12<br />
          Artifact Chest x18<br />
          Exp Potion x60<br />
          Outlands Chest x7</li>
        <li>2 <br />
          Heroic Chest x3<br />
          Tower Chest x11<br />
          Summoning Circle x4<br />
          Titanite x90</li>
        <li>3 <br />
          Artifact Chest x18<br />
          Expedition x8<br />
          Soul Stone x75<br />
          Hydra x3</li>
        <li>4 <br />
          <br /><br /><br /></li>
        <li>5 <br /><br /><br /><br /></li>
        <li>6 <br /><br /><br /><br /></li>
        <li>7 <br /><br /><br /><br /></li>
        <li>8 <br /><br /><br /><br /></li>
        <li>9 <br /><br /><br /><br /></li>
        <li>10 <br /><br /><br /><br /></li>
        <li>11 <br /><br /><br /><br /></li>
        <li>12 <br /><br /><br /><br /></li>
        <li>13 <br /><br /><br /><br /></li>
        <li>14 <br /><br /><br /><br /></li>
        <li>15 <br /><br /><br /><br /></li>
        <li>16 <br /><br /><br /><br /></li>
        <li>17 <br /><br /><br /><br /></li>
        <li>18 <br /><br /><br /><br /></li>
        <li>19 <br /><br /><br /><br /></li>
        <li>20 <br /><br /><br /><br /></li>
        <li>21 <br /><br /><br /><br /></li>
        <li>22 <br /><br /><br /><br /></li>
        <li>23 <br /><br /><br /><br /></li>
        <li>24 <br /><br /><br /><br /></li>
        <li>25 <br /><br /><br /><br /></li>
        <li>26 <br /><br /><br /><br /></li>
        <li>27 <br /><br /><br /><br /></li>
        <li>28 <br /><br /><br /><br /></li>
        <li>29 <br /><br /><br /><br /></li>
        <li>30 <br /><br /><br /><br /></li>
        <li>31 <br /><br /><br /><br /></li>
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