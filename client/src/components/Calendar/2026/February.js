import "../Calendar.css";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function February() {
  return (
    <div>
      <div class="month">      
        <ul>
          <li class="prev"><Arrowlink to="/jan26">&#9664;</Arrowlink></li>
          {/* <li class="next"><Arrowlink to="/mar26">&#9654;</Arrowlink></li> */}
          <li>
            February<br />
            2026
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
          Heroic Mission x12<br />
          Tower Chest x11<br />
          Hydra x3<br />
          Artifact Chest x18</li>
        <li>2 <br />
          Titanite x90<br />
          Expedition x8<br />
          Grand Arena x7<br />
          Summoning Circle x4</li>
        <li>3 <br />
          Heroic Chest x3<br />
          Mission x22<br />
          Arena x8<br />
          Tower Chest x11</li>
        <li>4 <br />
          Soul Stone x75<br />
          Guild Activity x250<br />
          Expedition x8<br />
          Summoning Circle x4</li>
        <li>5 <br />
          Heroes Skills x10<br />
          Mission x22<br />
          Outlands Chest x7<br />
          Hydra x3</li>
        <li>6 <br />
          Grand Arena x7<br />
          Titanite x90<br />
          Summoning Circle x4<br />
          Artifact Chest x18</li>
        <li>7 <br />
          Arena x8<br />
          Guild Activity x250<br />
          Expedition x8<br />
          Tower Chest x11</li>
        <li>8 <br />
          Outlands Chest x7<br />
          Hydra x3<br />
          Grand Arena x7<br />
          Soul Stone x75</li>
        <li>9 <br />
          Arena x8<br />
          Exp Potion x60<br />
          Artifact Chest x18<br />
          Mission x22</li>
        <li>10 <br />
          Summoning Circle x4<br />
          Soul Stone x75<br />
          Hydra x3<br />
          Titanite x90</li>
        <li>11 <br />
          Outland Battle x8<br />
          Heroic Chest x3<br />
          Tower Chest x11<br />
          Guild Activity x250</li>
        <li>12 <br />
          Mission x22<br />
          Expedition x8<br />
          Heroes Skills x10<br />
          Arena x8</li>
        <li>13 <br />
          Titanite x90<br />
          Outlands Chest x7<br />
          Summoning Circle x4<br />
          Hydra x3</li>
        <li>14 <br />
          Arena x8<br />
          Exp Potion x60<br />
          Expedition x8<br />
          Mission x22</li>
        <li>15 <br />
          Tower Chest x11<br />
          Expedition x8<br />
          Heroic Mission x12<br />
          Summoning Circle x4</li>
        <li>16 <br />
          <br /><br /><br /></li>
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