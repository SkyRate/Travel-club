import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "./Questionnaire.module.scss";

export const Questionnaire: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [errorMessageEmail, setErrorMessageEmail] = useState<boolean>(false);
  const [errorMessageName, setErrorMessageName] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setErrorMessageEmail(false);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setErrorMessageName(false);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email && !name) {
      setErrorMessage("Ни одно поле не заполненно");
      setErrorMessageEmail(true);
      setErrorMessageName(true);
      return;
    }
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const isValidName = /^[a-zA-Zа-яА-ЯёЁ]+$/u.test(name);
    if (!email && name) {
      setErrorMessage("Укажите, пожалуйста, email");
      setErrorMessageEmail(true);
      return;
    } else if (!isValidEmail) {
      setErrorMessage("Укажите, пожалуйста, корректный email");
      setErrorMessageEmail(true);
      return;
    } else if (email && !name) {
      setErrorMessage("Укажите, пожалуйста, имя");
      setErrorMessageName(true);
      return;
    } else if (!isValidName) {
      setErrorMessage("Укажите, пожалуйста, корректное имя");
      setErrorMessageName(true);
      return;
    } else if (isValidEmail && isValidName) {
      setSubmitted(true);
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.background}>
        <div className={styles.gradient}>
          <div className={styles.content}>
            <div className={styles.container}>
              <div className={styles.h}>
                <div className={styles.title}>Нравится? Бронируйте тур</div>
                <div className={styles.description}>
                  Заполните небольшую анкету, и мы свяжемся с вами и ответим на
                  все вопросы.
                </div>
                {!submitted && (
                  <div className={styles.sectionForm}>
                    <form onSubmit={handleSubmit}>
                      <div className={styles.inputbox}>
                        <div className={styles.inputblock}>
                          <input
                            type="text"
                            autoComplete="email"
                            name="email"
                            value={email}
                            placeholder="Почта"
                            onChange={handleEmailChange}
                            className={`${styles.input}  ${
                              errorMessageEmail ? styles.error : ""
                            }`}
                          />
                        </div>
                        {errorMessageEmail && (
                          <div className={styles.errorMessage}>
                            Укажите, пожалуйста, корректный email
                          </div>
                        )}

                        <div className={styles.inputblock}>
                          <input
                            type="text"
                            autoComplete="name"
                            name="Name"
                            placeholder="Имя"
                            value={name}
                            onChange={handleNameChange}
                            className={`${styles.input}  ${
                              errorMessageName ? styles.error : ""
                            }`}
                          />
                        </div>
                        {errorMessageName && (
                          <div className={styles.errorMessage}>
                            Укажите, пожалуйста, корректное имя
                          </div>
                        )}

                        <div className={styles.fieldBlock}>
                          <textarea
                            name="Textarea"
                            id=""
                            placeholder="Какой тур хотите выбрать?"
                          ></textarea>
                        </div>
                        {errorMessage && (
                          <div className={styles.errorBox}>{errorMessage}</div>
                        )}
                        <div className={styles.submit}>
                          <button> Отправить</button>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
                {submitted && (
                  <div className={styles.successbox}>
                    Спасибо данные успешно отправленны
                  </div>
                )}
                <div className={styles.bottomText}>
                  Нажимая отправить, вы соглашаетесь с <a href="">условием</a> и{" "}
                  <a href="">правилами </a> сайта
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
