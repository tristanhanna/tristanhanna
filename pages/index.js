import Head from 'next/head';
import { motion } from 'framer-motion';
import { Linkedin, Github, WalletFill} from 'react-bootstrap-icons';

export default function Home() {
  return (
    <div className="container">
      <style global jsx>
      {`html, body, #__next  {
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
        `}</style>
      <Head>
        <title>Tristan Hanna</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <div className="tristan-container">
        <div className="title">
          <motion.div
              animate={{
                scale: [1,1.04,1]
              }}
              transition={{
                duration: 2,
                loop: Infinity,
                repeatDelay: 0
              }}
            >Tristan Hanna</motion.div>
        </div>
        <motion.path strokeDasharray="0 1" />
        <motion.div className="img-wrapper" initial="hidden" animate="visible" variants={{
          hidden: {
            scale: .8,
            opacity: 0
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: .6
            }
          },
        }}>
          <img src="/me.jpg" id="my-image"></img>
        </motion.div>
        <motion.div className="banana" initial="hidden" animate="visible" variants={{
          hidden: {
            scale: .8,
            opacity: 0
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: .8
            }
          },
        }}>
        <p>Ecommerce / BS Creative Technology Design / Denver, CO </p>
        <p>tristan.hanna@colorado.edu</p>
        </motion.div>
        <div className="link-wrapper">
        <motion.div className="banana" initial="hidden" 
        animate="visible" 
        variants={{
          hidden: {
            scale: .8,
            opacity: 0
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 1
            }
          },
        }}>  
        <a href="https://www.linkedin.com/in/tristan-hanna-9100a1156/" target="_blank"><Linkedin size={40} /></a>
        </motion.div>
        <motion.div className="banana" initial="hidden" animate="visible" 
        variants={{
          hidden: {
            scale: .8,
            opacity: 0
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 1.2
            }
          },
        }} >  
          <a href="https://www.github.com/tristanhanna" target="_blank"><Github size={40} /></a>
        </motion.div>
        <motion.div className="banana" initial="hidden" animate="visible" 
        variants={{
          hidden: {
            scale: .8,
            opacity: 0
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 1.4
            }
          },
        }} >  
          <a href="https://dash-lbsg2fe52.vercel.app/" target="_blank"><WalletFill size={40} /></a>
        </motion.div>
        </div>
      </div>
    </div>
  )
}
