import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  .exp-card {
    position: relative;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: 0.75s cubic-bezier(0.25, 0.8, 0.25, 1);
    overflow: hidden;
  }

  .exp-card:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2), 0 5px 5px rgba(0, 0, 0, 0.22);
  }

  .exp-card .exp-card-hero {
    height: 20em;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    margin-bottom: 1.25em;
  }

  .exp-card.close .exp-card-hero {
    height: 10em;
  }

  .exp-card .exp-card-hero img {
    background: #32373e;
    position: absolute;
    top: 0;
    left: 0;
    width: 3.5em;
    padding: .75em;
  }

  .exp-card .exp-card-main {
    padding: 2em;
  }

  .exp-card .exp-card-title {
    margin-bottom: 1.5em;
  }

  .exp-card.close .exp-card-title {
    margin-bottom: 0;
  }

  .exp-card .exp-card-content {
    display: block;
  }

  .exp-card.close .exp-card-content {
    display: none;
  }

  .exp-card .exp-card-tagline {
    font-style: italic;
    line-height: 1.75;
  }

  .exp-card .exp-card-keepinmind {
    position: relative;
    padding-left: 1.5em;
    padding-top: 1.5em;
  }

  .exp-card .exp-card-keepinmind ul {
    list-style: outside none none;
    margin-left: 0;
    margin-bottom: 3em;
  }

  .exp-card.close .exp-card-keepinmind ul {
    margin-bottom: 1em;
  }

  .exp-card .exp-card-keepinmind ul > li {
    font-family: 'Proxima N W01 Reg',sans-serif;
    margin-left: 1em;
    font-size: 1.125em;
    letter-spacing: .03em;
  }

  .exp-card .exp-card-keepinmind ul > li:before {
    content: '\2013';
    margin-left: -1em;
    margin-right: .333em;
  }

  .exp-card .exp-card-keepinmind:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: auto;
    height: 100%;
    border-left: 1px solid #32373e;
  }

  .exp-card .exp-card-keepinmind:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 11.5em;
    border-bottom: 1px solid #32373e;
  }

  .exp-card .exp-card-partnerdetails {
    display: block;
    color: #fff;
    font-style: italic;
    background: #32373e;
    padding: 1.5em;
    margin-right: -2em;
    box-shadow: 10px 5px 10px rgba(0, 0, 0, 0.2), 0 5px 5px rgba(0, 0, 0, 0.22);
  }

  .exp-card.close .exp-card-partnerdetails {
    display: none;
  }

  .exp-card .exp-card-toggle {
    position: absolute;
    top: -3em;
    right: -3em;
    background: #fff;
    border-radius: 50%;
    width: 7em;
    height: 7em;
  }

  .exp-card .exp-card-toggle .exp-card-plus {
    position: absolute;
    top: 4em;
    left: 1.5em;
    padding: 0 calc(.75em - 1px);
    cursor: pointer;
    transform-origin: center center;
    transform: rotate(0deg);
    transition: .5s;
  }

  .exp-card .exp-card-toggle .exp-card-plus:before {
    content: '';
    display: block;
    position: relative;
    background: #32373e;
    height: 1.5em;
    width: 2px;
    margin: 0;
  }

  .exp-card .exp-card-toggle .exp-card-plus:after {
    content: '';
    display: block;
    background: #32373e;
    position: absolute;
    height: 2px;
    left: 0;
    top: calc(.75em - 1px);
    width: 1.5em;
    margin: 0;
    transform: none;
    transition: none;
  }

  .exp-card .exp-card-toggle.close .exp-card-plus {
    transform: rotate(45deg);
  }
`;
