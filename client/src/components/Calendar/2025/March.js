import "../Calendar.css";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function March() {
  return (
    <div>
      <div class="month">      
        <ul>
          <li class="prev"><Arrowlink to="/feb25">&#9664;</Arrowlink></li>
          <li class="next"><Arrowlink to="/apr25">&#9654;</Arrowlink></li>
          <li>
            March<br />
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
        <li><br /><br /><br /><br /><br /></li>
        <li><br /><br /><br /><br /><br /></li>
        <li>1 <br />
          Outlands Chest x7<br />
          Hydra x3<br />
          Grand Arena x7<br />
          Soul Stone x75</li>
        <li>2 <br />
          Summoning Circle x4<br />
          Tower Chest x11<br />
          Expedition x8<br />
          Heroic Mission x12</li>
        <li>3 <br />
          Arena x8<br />
          Heroic Chest x3<br />
          Soul Stone x75<br />
          Outland Battle x8</li>
        <li>4 <br />
          Titanite x90<br />
          Mission x22<br />
          Artifact Chest x18<br />
          Hydra x3</li>
        <li>5 <br />
          Expedition x8<br />
          Guild Activity x250<br />
          Tower Chest x11<br />
          Summoning Circle x4</li>
        <li>6 <br />
          Exp Potion x60<br />
          Outlands Chest x7<br />
          Arena x8<br />
          Titanite x90</li>
        <li>7 <br />
          Outland Battle x8<br />
          Heroic Mission x12<br />
          Tower Chest x11<br />
          Guild Activity x250</li>
        <li>8 <br />
          Artifact Chest x18<br />
          Exp Potion x60<br />
          Titanite x90<br />
          Summoning Circle x4</li>
        <li>9 <br />
          Heroes Skills x10<br />
          Arena x8<br />
          Mission x22<br />
          Expedition x8</li>
        <li>10 <br />
          Heroic Mission x12<br />
          Tower Chest x11<br />
          Titanite x90<br />
          Exp Potion x60</li>
        <li>11 <br />
          Hydra x3<br />
          Heroic Chest x3<br />
          Outland Battle x8<br />
          Summoning Circle x4</li>
        <li>12 <br />
          Hydra x3<br />
          Titanite x90<br />
          Artifact Chest x18<br />
          Soul Stone x75</li>
        <li>13 <br />
          Grand Arena x7<br />
          Outland Battle x8<br />
          Heroic Chest x3<br />
          Heroic Mission x12</li>
        <li>14 <br />
          Exp Potion x60<br />
          Expedition x8<br />
          Artifact Chest x18<br />
          Soul Stone x75</li>
        <li>15 <br />
          Titanite x90<br />
          Exp Potion x60<br />
          Mission x22<br />
          Hydra x3</li>
        <li>16 <br />
          Heroic Mission x12<br />
          Artifact Chest x18<br />
          Titanite x90<br />
          Outlands Chest x7</li>
        <li>17 <br />
          Expedition x8<br />
          Heroes Skills x10<br />
          Tower Chest x11<br />
          Arena x8</li>
        <li>18 <br />
          Heroic Mission x12<br />
          Artifact Chest x18<br />
          Exp Potion x60<br />
          Outlands Chest x7</li>
        <li>19 <br />
          Hydra x3<br />
          Soul Stone x75<br />
          Guild Activity x250<br />
          Summoning Circle x4</li>
        <li>20 <br />
          Arena x8<br />
          Heroic Mission x12<br />
          Expedition x8<br />
          Heroes Skills x10</li>
        <li>21 <br />
          Soul Stone x75<br />
          Titanite x90<br />
          Outlands Chest x7<br />
          Hydra x3</li>
        <li>22 <br />
          Grand Arena x7<br />
          Mission x22<br />
          Summoning Circle x4<br />
          Artifact Chest x18</li>
        <li>23 <br />
          Exp Potion x60<br />
          Outlands Chest x7<br />
          Arena x8<br />
          Titanite x90</li>
        <li>24 <br />
          Outland Battle x8<br />
          Soul Stone x75<br />
          Heroic Chest x3<br />
          Guild Activity x250</li>
        <li>25 <br />
          Heroes Skills x10<br />
          Arena x8<br />
          Summoning Circle x4<br />
          Expedition x8</li>
        <li>26 <br />
          Heroic Mission x12<br />
          Outlands Chest x7<br />
          Tower Chest x11<br />
          Exp Potion x60</li>
        <li>27 <br />
          Hydra x3<br />
          Titanite x90<br />
          Artifact Chest x18<br />
          Soul Stone x75</li>
        <li>28 <br />
          Expedition x8<br />
          Guild Activity x250<br />
          Tower Chest x11<br />
          Summoning Circle x4</li>
        <li>29 <br />
          Heroes Skills x10<br />
          Grand Arena x7<br />
          Outland Battle x8<br />
          Hydra x3</li>
        <li>30 <br />
          Arena x8<br />
          Exp Potion x60<br />
          Expedition x8<br />
          Mission x22</li>
        <li>31 <br />
          Outlands Chest x7<br />
          Hydra x3<br />
          Grand Arena x7<br />
          Soul Stone x75</li>
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