const formSelectors = {
  inputSelector: '.form__input-text',
  submitButtonSelector: '.form__save',
  inactiveButtonClass: 'form__save_inactive',
  inputErrorClass: 'form__input-text_type_error',
  errorClass: 'form__input-error_active'
}
const baseUrl = 'https://api.mesto.vkorch.nomoredomains.club';
// const baseUrl = 'http://localhost:3000';

const optionsApi = {
  urlUserMe: `${baseUrl}/users/me`,
  urlCards: `${baseUrl}/cards`,
  urlCardsLikes: `${baseUrl}/cards/likes`,
  urlUserMeAvatar: `${baseUrl}/users/me/avatar`,
}

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

export {
  formSelectors,
  optionsApi,
  headers,
  baseUrl,
}
