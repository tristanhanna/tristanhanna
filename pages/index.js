import Head from 'next/head';
import { GlobalStyle } from '../components/GlobalStyle';
import { motion } from 'framer-motion';
import { Linkedin, Github, WalletFill} from 'react-bootstrap-icons';

export default function Home() {
  return (
    <div className="container">
      <GlobalStyle />
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
