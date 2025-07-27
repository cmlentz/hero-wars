import "../Calendar.css";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function December() {
  return (
    <div>
      <div class="month">      
        <ul>
          <li class="prev"><Arrowlink to="/nov23">&#9664;</Arrowlink></li>
          <li class="next"><Arrowlink to="/jan24">&#9654;</Arrowlink></li>
          <li>
            December<br />
            2023
          </li>
        </ul>
      </div>

      <ul class="weekdays">
        <li>Su</li>
        <li>Mo</li>
        <li>Tu</li>
        <li>We</li>
        <li>Th</li>
        <li>Fr</li>
        <li>Sa</li>
      </ul>

      <ul class="days">
        <li><br /><br /><br /><br /><br /></li>
        <li><br /><br /><br /><br /><br /></li>
        <li><br /><br /><br /><br /><br /></li>
        <li><br /><br /><br /><br /><br /></li>
        <li><br />
          exp potion x60<br />
          titanite x170<br />
          artifact chest x15<br />
          soul stone x90</li>
        <li>
          1 <br />
          use energy x600<br />
          outlands chest x8<br />
          highwaymen x5<br />
          mission x20</li>
        <li>
          2 <br />
          expedition x9<br />
          guild activity x500<br />
          tower chest x25<br />
          arena x8</li>
        <li>
          3 <br />
          heroic mission x12<br />
          artifact chest x15<br />
          exp potion x60<br />
          outlands chest x8</li>
        <li>
          4 <br />
          use energy x600<br />
          tower chest x25<br />
          highwaymen x5<br />
          titanite x170</li>
        <li>
          5 <br />
          artifact chest x15<br />
          expedition x9<br />
          soul stone x90<br />
          hydra x3</li>
        <li>
          6 <br />
          outlands chest x8<br />
          gift of the elements x10<br />
          guild activity x500<br />
          heroic mission x12</li>
        <li>
          7 <br />
          titanite x170<br />
          mission x20<br />
          artifact chest x15<br />
          arena x8</li>
        <li>
          8 <br />
          hydra x3<br />
          soul stone x90<br />
          exp potion x60<br />
          highwaymen x5</li>
        <li>
          9 <br />
          tower chest x25<br />
          outlands chest x8<br />
          titanite x170<br />
          use energy x600</li>
        <li>
          10 <br />
          expedition x9<br />
          outland battle x8<br />
          arena x8<br />
          exp potion x60</li>
        <li>
          11 <br />
          mission x20<br />
          heroic chest x3<br />
          titanite x170<br />
          outlands chest x8</li>
        <li>
          12 <br />
          use energy x600<br />
          arena x8<br />
          tower chest x25<br />
          expedition x9</li>
        <li>
          13 <br />
          exp potion x60<br />
          outlands chest x8<br />
          grand arena x7<br />
          titanite x170</li>
        <li>
          14 <br />
          heroic mission x12<br />
          tower chest x25<br />
          hydra x3<br />
          artifact chest x15</li>
        <li>
          15 <br />
          gift of the elements x10<br />
          expedition x9<br />
          grand arena x7<br />
          highwaymen x5</li>
        <li>
          16 <br />
          use energy x600<br />
          mission x20<br />
          arena x8<br />
          tower chest x25</li>
        <li>
          17 <br />
          soul stone x90<br />
          guild activity x500<br />
          expedition x9<br />
          highwaymen x5</li>
        <li>
          18 <br />
          use energy x600<br />
          gift of the elements x10<br />
          outlands chest x8<br />
          hydra x3</li>
        <li>
          19 <br />
          grand arena x7<br />
          titanite x170<br />
          highwaymen x5<br />
          artifact chest x15</li>
        <li>
          20 <br />
          arena x8<br />
          guild activity x500<br />
          expedition x9<br />
          use energy x500</li>
        <li>
          21 <br />
          outlands chest x8<br />
          hydra x3<br />
          grand arena x7<br />
          soul stones x90</li>
        <li>
          22 <br />
          arena x8<br />
          exp potion x60<br />
          artifact chest x15<br />
          mission x20</li>
        <li>
          23 <br />
          use energy x600<br />
          outlands chest x8<br />
          hydra x3<br />
          titanite x170</li>
        <li>
          24 <br />
          outland battle x8<br />
          heroic mission x12<br />
          tower chest x25<br />
          guild activity x500</li>
        <li>
          25 <br /><br /><br /><br /><br /></li>
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