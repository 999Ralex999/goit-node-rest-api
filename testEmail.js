import sendEmail from "./helpers/sendEmail.js";

const testEmail = async () => {
  try {
    await sendEmail({
      to: "recipient@example.com",
      subject: "Тестовое письмо",
      text: "Это тестовое письмо от нашего сервиса",
    });
    console.log("Письмо успешно отправлено");
  } catch (error) {
    console.error("Ошибка при отправке письма:", error);
  }
};

testEmail();
