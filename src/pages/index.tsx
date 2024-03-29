/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Invitation from "../../assets/bday-invitation.png";
import { useForm, ValidationError } from "@formspree/react";
import { isMobile } from "react-device-detect";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const formUid = process.env.FORM_UID as string;
  const [state, handleSubmit] = useForm("xrgvldlg");
  if (state.succeeded) {
    // eslint-disable-next-line react/no-unescaped-entities
    return <p>Thanks for your RSVP! I can't wait to see you there! </p>;
  }

  const renderContent = () => {
    if (!isMobile) {
      return (
        <>
          {" "}
          <Image
            alt='birthday invitation'
            src={Invitation}
            width={325}
            height={500}
          />
        </>
      );
    } else {
      return (
        <>
          {" "}
          <Image
            alt='birthday invitation'
            src={Invitation}
            width={600}
            height={650}
          />
        </>
      );
    }
  };

  return (
    <>
      <Head>
        <title>Reese's Reggie Year</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={`${styles.main}`}>
        <a
          style={{
            fontSize: "2rem",
            textDecoration: "underline",
            marginBottom: ".5rem",
          }}
          href='#form'
        >
          RSVP
        </a>
        {renderContent()}
      </div>
      <div id='form' className={styles.form_div}>
        <form
          action='https://formspree.io/f/xrgvldlg'
          method='post'
          className={styles.form}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <label htmlFor='email'>Your Email:</label>
            <input name='Email' id='email' type='email' />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <label>Let Me Know If You Can Make It Please:</label>
            <textarea className={styles.textarea} name='message'></textarea>
          </div>
          <button
            className={``}
            style={{
              marginTop: "1rem",
              padding: "1rem 2rem",
              backgroundColor: "#cecccf",
              border: "beige",
            }}
            type='submit'
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
