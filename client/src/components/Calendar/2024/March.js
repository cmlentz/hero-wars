import "../Calendar.css";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function March() {
  return (
    <div>
      <div class="month">      
        <ul>
          <li class="prev"><Arrowlink to="/feb24">&#9664;</Arrowlink></li>
          <li class="next"><Arrowlink to="/apr24">&#9654;</Arrowlink></li>
          <li>
            March<br />
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
          <br />
          heroic mission x12<br />
          artifact chest x15<br />
          titanite x170<br />
          outlands chest x8</li>
        <li>
          1 <br />
          expedition x9<br />
          guild activity x500<br />
          highwaymen x5<br />
          arena x8</li>
        <li>
          2 <br />
          heroic mission x12<br />
          artifact chest x15<br />
          exp potion x60<br />
          outlands chest x8</li>
        <li>
          3 <br />
          hydra x3<br />
          soul stone x90<br />
          guild activity x500<br />
          highwaymen x5</li>
        <li>
          4 <br />
          arena x8<br />
          heroic mission x12<br />
          expedition x9<br />
          use energy x600</li>
        <li>
          5 <br />
          soul stone x90<br />
          gift of the elements x10<br />
          outlands chest x8<br />
          hydra x3</li>
        <li>
          6 <br />
          grand arena x7<br />
          mission x20<br />
          highwaymen x5<br />
          artifact chest x15</li>
        <li>
          7 <br />
          exp potion x60<br />
          outlands chest x8<br />
          arena x8<br />
          titanite x170</li>
        <li>
          8 <br />
          outland battle x8<br />
          heroic mission x12<br />
          tower chest x25<br />
          guild activity x500</li>
        <li>
          9 <br />
          use energy x600<br />
          arena x8<br />
          highwaymen x5<br />
          expedition x9</li>
        <li>
          10 <br />
          heroic mission x12<br />
          tower chest x25<br />
          gift of the elements x10<br />
          exp potion x60</li>
        <li>
          11 <br />
          use energy x600<br />
          titanite x170<br />
          artifact chest x15<br />
          soul stone x90</li>
        <li>
          12 <br />
          expedition x9<br />
          guild activity x500<br />
          tower chest x25<br />
          highwaymen x5</li>
        <li>
          13 <br />
          use energy x600<br />
          gift of the elements x10<br />
          outland battle x8<br />
          hydra x3</li>
        <li>
          14 <br />
          arena x8<br />
          exp potion x60<br />
          expedition x9<br />
          mission x20</li>
        <li>
          15 <br />
          outlands chest x8<br />
          hydra x3<br />
          grand arena x7<br />
          soul stone x90</li>
        <li>
          16 <br />
          artifact chest x15<br />
          guild activity x500<br />
          titanite x170<br />
          highwaymen x5</li>
        <li>
          17 <br />
          arena x8<br />
          exp potion x60<br />
          expedition x9<br />
          mission x20</li>
        <li>
          18 <br />
          titanite x170<br />
          gift of the elements x10<br />
          artifact chest x15<br />
          hydra x3</li>
        <li>
          19 <br />
          outland battle x8<br />
          heroic mission x12<br />
          tower chest x25<br />
          guild activity x500</li>
        <li>
          20 <br />
          use energy x600<br />
          outlands chest x8<br />
          soul stone x90<br />
          titanite x170</li>
        <li>
          21 <br />
          heroic chest x3<br />
          mission x20<br />
          arena x8<br />
          artifact chest x15</li>
        <li>
          22 <br />
          use energy x600<br />
          gift of the elements x10<br />
          grand arena x7<br />
          hydra x3</li>
        <li>
          23 <br />
          expedition x9<br />
          guild activity x500<br />
          tower chest x25<br />
          highwaymen x5</li>
        <li>
          24 <br />
          arena x8<br />
          use energy x600<br />
          gift of the elements x10<br />
          exp potion x60</li>
        <li>
          25<br /><br /><br /><br /><br /></li>
        <li>
          26 <br /><br /><br /><br /><br /></li>
        <li>
          27 <br /><br /><br /><br /><br /></li>
        <li>
          28 <br /><br /><br /><br /><br /></li>
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