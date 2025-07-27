import "../Calendar.css";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function May() {
  return (
    <div>
      <div class="month">      
        <ul>
          <li class="prev"><Arrowlink to="/apr25">&#9664;</Arrowlink></li>
          <li class="next"><Arrowlink to="/jun25">&#9654;</Arrowlink></li>
          <li>
            May<br />
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
          Artifact Chest x18<br />
          Expedition x8<br />
          Exp Potion x60<br />
          Hydra x3</li>
        <li>2 <br />
          Mission x22<br />
          Arena x8<br />
          Summoning Circle x4<br />
          Titanite x90</li>
        <li>3 <br />
          Grand Arena x7<br />
          Hydra x3<br />
          Expedition x8<br />
          Outland Battle x8</li>
        <li>4 <br />
          Outlands Chest x7<br />
          Guild Activity x250<br />
          Exp Potion x60<br />
          Heroic Mission x12</li>
        <li>5 <br />
          Heroes Skills x10<br />
          Titanite x90<br />
          Artifact Chest x18<br />
          Expedition x8</li>
        <li>6 <br />
          Summoning Circle x4<br />
          Arena x8<br />
          Hydra x3<br />
          Tower Chest x11</li>
        <li>7 <br />
          Outland Battle x8<br />
          Heroic Chest x3<br />
          Mission x22<br />
          Titanite x90</li>
        <li>8 <br />
          Exp Potion x60<br />
          Outlands Chest x7<br />
          Grand Arena x7<br />
          Expedition x8</li>
        <li>9 <br />
          Summoning Circle x4<br />
          Tower Chest x11<br />
          Guild Activity x250<br />
          Heroic Mission x12</li>
        <li>10 <br />
          Outland Battle x8<br />
          Artifact Chest x18<br />
          Hydra x3<br />
          Soul Stone x75</li>
        <li>11 <br />
          Mission x22<br />
          Outlands Chest x7<br />
          Soul Stone x75<br />
          Titanite x90</li>
        <li>12 <br />
          Arena x8<br />
          Artifact Chest x18<br />
          Hydra x3<br />
          Exp Potion x60</li>
        <li>13 <br />
          Summoning Circle x4<br />
          Tower Chest x11<br />
          Heroic Chest x3<br />
          Titanite x90</li>
        <li>14 <br />
          Expedition x8<br />
          Guild Activity x250<br />
          Outlands Chest x7<br />
          Soul Stone x75</li>
        <li>15 <br />
          Outland Battle x8<br />
          Grand Arena x7<br />
          Heroes Skills x10<br />
          Artifact Chest x18</li>
        <li>16 <br />
          Hydra x3<br />
          Guild Activity x250<br />
          Exp Potion x60<br />
          Arena x8</li>
        <li>17 <br />
          Expedition x8<br />
          Summoning Circle x4<br />
          Outlands Chest x7<br />
          Tower Chest x11</li>
        <li>18 <br />
          Heroic Chest x3<br />
          Mission x22<br />
          Titanite x90<br />
          Heroic Mission x12</li>
        <li>19 <br />
          Grand Arena x7<br />
          Soul Stone x75<br />
          Exp Potion x60<br />
          Outland Battle x8</li>
        <li>20 <br />
          Arena x8<br />
          Artifact Chest x18<br />
          Guild Activity x250<br />
          Outland Chest x7</li>
        <li>21 <br />
          Tower Chest x11<br />
          Summoning Circle x4<br />
          Hydra x3<br />
          Outland Battle x8</li>
        <li>22 <br />
          Expedition x8<br />
          Heroes Skills x10<br />
          Heroic Mission x12<br />
          Outlands Chest x7</li>
        <li>23 <br />
          Heroic Chest x3<br />
          Outland Battle x8<br />
          Titanite x90<br />
          Soul Stone x75</li>
        <li>24 <br />
          Arena x8<br />
          Exp Potion x60<br />
          Artifact Chest x18<br />
          Guild Activity x250</li>
        <li>25 <br />
          Mission x22<br />
          Expedition x8<br />
          Heroes Skills x10<br />
          Exp Potion x60</li>
        <li>26 <br />
          Hydra x3<br />
          Tower Chest x11<br />
          Grand Arena x7<br />
          Summoning Circle x4</li>
        <li>27 <br />
          Titanite x90<br />
          Outland Battle x8<br />
          Heroic Chest x3<br />
          Heroic Mission x12</li>
        <li>28 <br />
          Soul Stone x75<br />
          Guild Activity x250<br />
          Tower Chest x11<br />
          Outlands Chest x7</li>
        <li>29 <br />
          Artifact Chest x18<br />
          Expedition x8<br />
          Exp Potion x60<br />
          Hydra x3</li>
        <li>30 <br />
          Mission x22<br />
          Arena x8<br />
          Summoning Circle x4<br />
          Titanite x90</li>
        <li>31 <br />
          Grand Arena x7<br />
          Hydra x3<br />
          Expedition x8<br />
          Outland Battle x8</li>
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