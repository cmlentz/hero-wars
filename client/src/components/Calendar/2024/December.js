import "../Calendar.css";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function December() {
  return (
    <div>
      <div class="month">      
        <ul>
          <li class="prev"><Arrowlink to="/nov24">&#9664;</Arrowlink></li>
          <li class="next"><Arrowlink to="/jan25">&#9654;</Arrowlink></li>
          <li>
            December<br />
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
        <li>1 <br />
          Exp Potion x60<br />
          Outlands Chest x7<br />
          Arena x8<br />
          Titanite x90</li>
        <li>2 <br />
          Outland Battle x8<br />
          Soul Stone x75<br />
          Heroic Chest x3<br />
          Guild Activity x250</li>
        <li>3 <br />
          Heroes Skills x10<br />
          Arena x8<br />
          Summoning Circle x4<br />
          Expedition x8</li>
        <li>4 <br />
          Heroic Mission x12<br />
          Outlands Chest x7<br />
          Tower Chest x12<br />
          Exp Potion x60</li>
        <li>5 <br />
          Hydra x3<br />
          Titanite x90<br />
          Artifact Chest x18<br />
          Soul Stone x75</li>
        <li>6 <br />
          Expedition x8<br />
          Guild Activity x250<br />
          Tower Chest x12<br />
          Summoning Circle x4</li>
        <li>7 <br />
          Heroes Skills x10<br />
          Grand Arena x7<br />
          Outland Battle x8<br />
          Hydra x3</li>
        <li>8 <br />
          Arena x8<br />
          Exp Potion x60<br />
          Expedition x8<br />
          Mission x22</li>
        <li>9 <br />
          Outlands Chest x7<br />
          Hydra x3<br />
          Grand Arena x7<br />
          Soul Stones x75</li>
        <li>10 <br />
          Artifact Chest x18<br />
          Guild Activity x250<br />
          Titanite x90<br />
          Heroic Chest x3</li>
        <li>11 <br />
          Arena x8<br />
          Exp Potion x60<br />
          Expedition x8<br />
          Mission x22</li>
        <li>12 <br />
          Titanite x90<br />
          Soul Stone x75<br />
          Artifact Chest x18<br />
          Hydra x3</li>
        <li>13 <br />
          Outland Battle x8<br />
          Heroes Skills x10<br />
          Tower Chest x12<br />
          Guild Activity x250</li>
        <li>14 <br />
          Heroic Mission x12<br />
          Outlands Chest x7<br />
          Soul Stone x75<br />
          Titanite x90</li>
        <li>15 <br />
          Summoning Circle x4<br />
          Mission x22<br />
          Arena x8<br />
          Artifact Chest x18</li>
        <li>16 <br />
          Heroic Chest x3<br />
          Exp Potion x60<br />
          Grand Arena x7<br />
          Hydra x3</li>
        <li>17 <br />
          Expedition x8<br />
          Guild Activity x250<br />
          Tower Chest x12<br />
          Summoning Circle x4</li>
        <li>18 <br />
          Arena x8<br />
          Titanite x90<br />
          Heroes Skills x10<br />
          Exp Potion x60</li>
        <li>19 <br />
          Heroic Mission x12<br />
          Artifact Chest x18<br />
          Grand Arena x7<br />
          Exp Potion x60</li>
        <li>20 <br />
          Mission x22<br />
          Expedition x8<br />
          Guild Activity x250<br />
          Summoning Circle x4</li>
        <li>21 <br />
          Titanite x90<br />
          Outlands Chest x7<br />
          Tower Chest x12<br />
          Soul Stone x75</li>
        <li>22 <br />
          Mission x22<br />
          Outlands Chest x7<br />
          Soul Stone x75<br />
          Titanite x90</li>
        <li>23 <br />
          Arena x8<br />
          Artifact Chest x18<br />
          Hydra x3<br />
          Exp Potion x60</li>
        <li>24 <br />
          Summoning Circle x4<br />
          Tower Chest x12<br />
          Heroic Chest x3<br />
          Titanite x90</li>
        <li>25 <br />
          Expedition x8<br />
          Guild Activity x250<br />
          Outlands Chest x7<br />
          Soul Stone x75</li>
        <li>26 <br />
          Outland Battle x8<br />
          Grand Arena x7<br />
          Heroes Skills x10<br />
          Artifact Chest x18</li>
        <li>27 <br />
          Hydra x3<br />
          Guild Activity x250<br />
          Exp Potion x60<br />
          Arena x8</li>
        <li>28 <br />
          Expedition x8<br />
          Summoning Circle x4<br />
          Outlands Chest x7<br />
          Tower Chest x12</li>
        <li>29 <br />
          Heroic Chest x3<br />
          Mission x22<br />
          Titanite x90<br />
          Heroic Mission x12</li>
        <li>30 <br />
          Grand Arena x7<br />
          Soul Stone x75<br />
          Exp Potion x60<br />
          Outland Battle x8</li>
        <li>31 <br />
          Arena x8<br />
          Artifact Chest x18<br />
          Guild Activity x250<br />
          Outlands Chest x7</li>
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