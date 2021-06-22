const formSelectors = {
  inputSelector: '.form__input-text',
  submitButtonSelector: '.form__save',
  inactiveButtonClass: 'form__save_inactive',
  inputErrorClass: 'form__input-text_type_error',
  errorClass: 'form__input-error_active'
}
const baseUrl = 'api.mesto.vkorch.nomoredomains.club';

const optionsApi = {
  urlUserMe: `${baseUrl}/users/me`,
  urlCards: `${baseUrl}/cards`,
  urlCardsLikes: `${baseUrl}/cards/likes`,
  urlUserMeAvatar: `${baseUrl}/users/me/avatar`,
  headers: {
    'Content-Type': 'application/json',
    'authorization': `Bearer ${localStorage.getItem('jwt')}`,
  },
}

export {
  formSelectors,
  optionsApi,
  baseUrl,
}
