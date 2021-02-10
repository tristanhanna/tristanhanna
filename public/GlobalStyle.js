import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`

	${normalize};

	html, body, #__next  {
		height: 100%;
	}

	body {
		background-color: #fff;
        background-size: 100% 1.2em;
        background-image: -webkit-linear-gradient(0deg, transparent 79px, #abced4 79px, #abced4 81px, transparent 81px), -webkit-linear-gradient(#eee .05em, transparent .05em);
        background-image: -moz-linear-gradient(0deg, transparent 79px, #abced4 79px, #abced4 81px, transparent 81px), -moz-linear-gradient(#eee .05em, transparent .05em);
        background-image: -ms-linear-gradient(0deg, transparent 79px, #abced4 79px, #abced4 81px, transparent 81px), -ms-linear-gradient(#eee .05em, transparent .05em);
        background-image: -o-linear-gradient(0deg, transparent 79px, #abced4 79px, #abced4 81px, transparent 81px), -o-linear-gradient(#eee .05em, transparent .05em);
        background-image: linear-gradient(0deg, transparent 79px, #abced4 79px, #abced4 81px, transparent 81px), linear-gradient(#eee .05em, transparent .05em);
        -pie-background: linear-gradient(0deg, transparent 79px, #abced4 79px, #abced4 81px, transparent 81px) 0 0 / 100% 1.2em, linear-gradient(#eee .05em, transparent .05em) 0 0 / 100% 1.2em #fff;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
        font-family: Arial, Helvetica, sans-serif;
		font-size: 18px;
		line-height: 1.5;
		color: black;
        text-align: center;
        justify-content:center;
	}

	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}

	a {
		text-decoration: none;
        color: #0070f3;
	}

    a:hover {
        color: #013169;
    }

    .tristan-container{
        display:flex;
        flex-direction:column;
        justify-content:center;
        text-align:center;
    }

    .title{
        font-size:4em;
        justify-content: center;
        margin-bottom: 2%;
        margin-top: 2%;
    }

    .banana{
        margin:1%;
    }

    .img-wrapper {
        display: inline-block;
        position: relative;
        width: 200px;
        height: 200px;
        overflow: hidden;
        border-radius: 50%;
        margin-left: -100px;
        margin: 0 auto;
        box-shadow: 10px 10px 8px #888888;
      }

      .img-wrapper img {
        width: auto;
        height: 100%;
      }

      .link-wrapper{
          display:flex;
          flex-direction:row;
          justify-content:space-around;
          width:50%;
          margin: 0 auto;
      }

      @media screen and (max-width: 800px) {
        .link-wrapper {
          flex-direction:column;
        }
      }
`;
