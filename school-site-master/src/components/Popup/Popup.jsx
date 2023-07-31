import React, { useMemo } from "react";
import "./style.css";
import InputMask from "react-input-mask";
import $ from "jquery";
function Popup({ setPopupOpen }) {
  const [userPhone, setUserPhone] = React.useState("");
  const [phoneError, setPhoneError] = React.useState("");
  const [phoneDirty, setPhoneDirty] = React.useState(false);

  const [formValid, setFormValid] = React.useState(false);

  React.useEffect(() => {
    if (phoneError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [phoneError]);

  const phoneHandler = (e) => {
    setUserPhone(e.target.value);

    if (e.target.value.includes("_") || e.target.value === "") {
      setPhoneError("Неккоректный номер телефона");
    } else {
      setPhoneError("");
    }
  };

  const blurHandler = (e) => {
    setPhoneDirty(true);
  };

  // Отправка формы
  const onSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    var xhr = new XMLHttpRequest();
    formData.append("phone", userPhone);

    xhr.open("GET", "http://localgost:3000/sendemail/index.php");

    xhr.send();
  };

  $(".g-form").submit(function (event) {
    event.preventDefault();

    // Ссылка, которую получили на этапе публикации приложения
    let appLink =
      "https://script.google.com/macros/s/AKfycbzXIyAg-SxZS8mDNDxccL4f-oVlYEiMw7aWX9v4loJBNDqpJfUvNJm3id3lOjZHDQdQ/exec";

    // Сообщение при успешной отправке данных
    let successRespond = "Заявка успешно отправлена!";

    // Сообщение при ошибке в отправке данных
    let errorRespond = "Не удалось отправить сообщение";

    // Id текущей формы
    let form = $("#" + $(this).attr("id"))[0];

    // h2 с ответом формы
    let formRespond = $(this).find(".g-form__title_respond");

    // h2 с заголовком формы
    let formTitle = $(this).find(".g-form__title_main");

    // Кнопка отправки формы
    let submitButton = $(this).find(".g-form__button");

    // FormData
    let fd = new FormData(form);

    $.ajax({
      url: appLink,
      type: "POST",
      data: fd,
      processData: false,
      contentType: false,
    })
      .done(function (res, textStatus, jqXHR) {
        if (jqXHR.readyState === 4 && jqXHR.status === 200) {
          // Прячем заголовок формы
          formTitle.css({
            display: "none",
          });

          // Выводим ответ формы.
          formRespond.html(successRespond).css("color", "#37b599");

          // Возвращаем активность кнопке отправки
          submitButton.prop("disabled", false);
          return;
        } else {
          formTitle.css({
            display: "none",
          });
          console.log("Гугл не ответил статусом 200");
          return;
        }
      })
      .fail(function (res, textStatus, jqXHR) {
          formRespond
          .html(
            "Не удалось отправить сообщение. Cвяжитесь с администратором сайта другим способом"
          )
          .css("color", "#c64b4b")

        console.log("Не удалось выполнить запрос по указанному в скрипте пути");
      });
    return;
  });

  return (
    <div className="background-wrapper">
      <div className="modal">
        <h3>Заказать звонок</h3>
        {/* <form
          class="g-form"
          id="g-form-1"
          method="POST"
          action=""
          autocomplete="off"
        >
            <p class="g-form__title g-form__title_respond"></p>
          <div>
            <InputMask
              mask="+7 (999) 999-99-99"
              maskChar="_"
              value={userPhone}
              onBlur={(e) => blurHandler(e)}
              class="g-form__input g-form__input_tel"
              id="tel"
              name="Телефон"
              onChange={(e) => phoneHandler(e)}
            >
              {(inputProps) => (
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  {...inputProps}
                />
              )}
            </InputMask>
            {phoneDirty && phoneError && <span>{phoneError}</span>}
            <input
              type="tel"
              class="g-form__input g-form__input_name"
              id="name"
              name="Имя"
              placeholder="Введите ваше имя"
              required
            />
          </div>

          <button class="g-form__button" disabled={!formValid} type="submit">
            Отправить
          </button>
        </form> */}
        <form
          class="g-form"
          id="g-form-1"
          method="POST"
          action=""
          autocomplete="off"
        >
          <p class="g-form__title g-form__title_respond"></p>
          <div class="g-form__inputs">
            <InputMask
              mask="+7 (999) 999-99-99"
              maskChar="_"
              value={userPhone}
              onBlur={(e) => blurHandler(e)}
              class="g-form__input g-form__input_tel"
              id="tel"
              name="Телефон"
              onChange={(e) => phoneHandler(e)}
            >
              {(inputProps) => (
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  {...inputProps}
                />
              )}
            </InputMask>

            {phoneDirty && phoneError && <span>{phoneError}</span>}
            <input
              type="tel"
              class="g-form__input g-form__input_name"
              id="name"
              name="Имя"
              placeholder="Введите ваше имя"
              required
            />
            {/* <fieldset class="g-form__input-wrapper">
              <input
                id="email"
                name="Email"
                type="email"
                required
                placeholder="Введите ваш email"
              />
            </fieldset>

            <fieldset class="g-form__input-wrapper">
              <input
                id="arbitrary-field"
                name="Произвольное поле"
                placeholder="Произвольное поле для теста"
              />
            </fieldset>

            <fieldset class="g-form__input-wrapper">
              <textarea
                id="message"
                name="Сообщение"
                rows="10"
                placeholder="Введите сообщение"
              ></textarea>
            </fieldset>

            <fieldset class="g-form__input-wrapper g-form__input-wrapper_hidden">
              <label for="honeypot">
                Помогает бороться со спамом. Должно быть пустым!
              </label>
              <input id="honeypot" type="text" name="honeypot" value="" />
            </fieldset> */}

            <button class="g-form__button" disabled={!formValid} type="submit">
              Отправить
            </button>
          </div>
        </form>

        <img
          src="close.svg"
          onClick={() => setPopupOpen(false)}
          alt="Закрыть"
        />
      </div>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    </div>
  );
}

export default Popup;
