import "../Calendar.css";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function November() {
  return (
    <div>
      <div class="month">      
        <ul>
          <li class="prev"><Arrowlink to="/oct24">&#9664;</Arrowlink></li>
          <li class="next"><Arrowlink to="/dec24">&#9654;</Arrowlink></li>
          <li>
            November<br />
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
        <li>1 <br />
          Mission x22<br />
          Tower Chest x25<br />
          Summoning Circle x4<br />
          Hydra x3</li>
        <li>2 <br />
          Heroic Mission x12<br />
          Artifact Chest x18<br />
          Exp Potion x60<br />
          Outlands Chest x7</li>
        <li>3 <br />
          Soul Stone x75<br />
          Heroes Skills x10<br />
          Arena x5<br />
          Hydra x3</li>
        <li>4 <br />
          Grand Arena x7<br />
          Titanite x90<br />
          Summoning Circle x4<br />
          Artifact Chest x18</li>
        <li>5 <br />
          Heroes Skills x10<br />
          Outlands Chest x7<br />
          Exp Potion x60<br />
          Arena x8</li>
        <li>6 <br />Ooops!<br /><br /><br /><br /></li>
        <li>7 <br />
          Artifact Chest x18<br />
          Guild Activity x250<br />
          Titanite x90<br />
          Summoning Circle x4</li>
        <li>8 <br />
          Arena x8<br />
          Exp Potion x60<br />
          Expedition x8<br />
          Mission x22</li>
        <li>9 <br />
          Outlands Chest x7<br />
          Hydra x3<br />
          Grand Arena x7<br />
          Soul Stone x75</li>
        <li>10 <br />
          Summoning Circle x4<br />
          Tower Chest x25<br />
          Expedition x8<br />
          Heroic Mission x12</li>
        <li>11 <br />
          Arena x8<br />
          Heroic Chest x3<br />
          Soul Stone x75<br />
          Outland Battle x8</li>
        <li>12 <br />
          Titanite x90<br />
          Mission x22<br />
          Artifact Chest x18<br />
          Hydra x3</li>
        <li>13 <br />
          Expedition x8<br />
          Guild Activity x250<br />
          Tower Chest x25<br />
          Summoning Circle x4</li>
        <li>14 <br />
          Exp Potion x60<br />
          Outlands Chest x7<br />
          Arena x8<br />
          Titanite x90</li>
        <li>15 <br />
          Outland Battle x8<br />
          Heroic Mission x12<br />
          Tower Chest x25<br />
          Guild Activity x250</li>
        <li>16 <br />
          Artifact Chest x18<br />
          Exp Potion x60<br />
          Titanite x90<br />
          Summoning Circle x4</li>
        <li>17 <br />
          Heroes Skills x10<br />
          Arena x8<br />
          Mission x22<br />
          Expedition x8</li>
        <li>18 <br />
          Heroic Mission x12<br />
          Tower Chest x25<br />
          Titanite x90<br />
          Exp Potion x60</li>
        <li>19 <br />
          Hydra x3<br />
          Heroic Chest x3<br />
          Outland Battle x8<br />
          Summoning Circle x4</li>
        <li>20 <br />
          Hydra x3<br />
          Titanite x90<br />
          Artifact Chest x18<br />
          Soul Stone x75</li>
        <li>21 <br />
          Grand Arena x7<br />
          Outland Battle x8<br />
          Heroic Chest x3<br />
          Heroic Mission x12</li>
        <li>22 <br />
          Exp Potion x60<br />
          Expedition x8<br />
          Artifact Chest x18<br />
          Soul Stone x75</li>
        <li>23 <br />
          Titanite x90<br />
          Exp Potion x60<br />
          Mission x22<br />
          Hydra x3</li>
        <li>24 <br />
          Heroic Mission x12<br />
          Artifact Chest x18<br />
          Titanite x90<br />
          Outlands Chest x7</li>
        <li>25 <br />
          Expedition x8<br />
          Heroes Skills x10<br />
          Tower Chest x12<br />
          Arena x8</li>
        <li>26 <br />
          Heroic Mission x12<br />
          Artifact Chest x18<br />
          Exp Potion x60<br />
          Outland Chest x7</li>
        <li>27 <br />
          Hydra x3<br />
          Soul Stone x75<br />
          Guild Activity x250<br />
          Summoning Circle x4</li>
        <li>28 <br />
          Arena x8<br />
          Heroic Mission x12<br />
          Expedition x8<br />
          Heroes Skills x10</li>
        <li>29 <br />
          Soul Stone x75<br />
          Titanite x90<br />
          Outlands Chest x7<br />
          Hydra x3</li>
        <li>30 <br />
          Grand Arena x7<br />
          Mission x22<br />
          Summoning Circle x4<br />
          Artifact Chest x18</li>
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