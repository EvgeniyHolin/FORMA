const initSubmitForm = () => {
  const form = document.getElementById('feedback-form');

  if (!form) {
    return;
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get('name');
    const phone = formData.get('phone');

    const token = import.meta.env.PUBLIC_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.PUBLIC_TELEGRAM_CHAT_ID;
    const message = `Новая заявка!\nИмя: ${name}\nТелефон: ${phone}`;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        })
      });

      const data = await response.json();

      if (data.ok) {
        alert('Заявка отправлена!');
        form.reset();
      } else {
        alert('Ошибка: ' + data.description);
      }
    } catch (error) {
      console.error('Ошибка отправки:', error);
      alert('Ошибка отправки сообщения. Попробуйте еще раз.')
    };
  });
};

export default initSubmitForm;
