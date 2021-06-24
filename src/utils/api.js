import { optionsApi, headers } from './constant';

class Api {
  constructor(config, headers) {
    this._urlUserMe = config.urlUserMe;
    this._urlCards = config.urlCards;
    this._urlCardsLikes = config.urlCardsLikes;
    this._urlUserMeAvatar = config.urlUserMeAvatar;
    this._headers = headers;
  }

  /**
   * Проверяет ответ сервера и возвращает результат
   * @param {*} res - ответ сервера
   * @returns объект данных или ошибку
   */
  _checkServerResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Ошибка: ${res.status}`));
  }

  _getAuthHeaders(token) {
    return {
      ...this._headers,
      'Authorization': `Bearer ${token}`,
    }
  }

  /**
   * Берёт данные пользователя с сервера
   * @returns {*} Данные пользователя или ошибку
   */
  getUserInfo(token) {
    return fetch(this._urlUserMe, {
      headers: this._getAuthHeaders(token),
    })
      .then(this._checkServerResponse);
  }

  /**
   * Берёт массива карточек с сервера, для первичной инициализации страницы
   * @returns {Array} массив карточек или ошибку
   */
  getInitialCards(token) {
    return fetch(this._urlCards, {
      headers: this._getAuthHeaders(token),
    })
      .then(this._checkServerResponse);
  }

  /**
   * Обновляет информацию пользователя
   * @param {name, about} param0 name - имя пользователя, about - описание пользователя.
   */
  setUserInfo({ name, about }, token) {
    return fetch(this._urlUserMe, {
      method: 'PATCH',
      headers: this._getAuthHeaders(token),
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    })
      .then(this._checkServerResponse);
  }

  /**
   * Добавляет карточку
   * @param {name, link} name - название карточки, link - ссылка на картинку.
   * @returns карточку или ошибку
   */
  setCard({ name, link }, token) {
    return fetch(this._urlCards, {
      method: 'POST',
      headers: this._getAuthHeaders(token),
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    })
      .then(this._checkServerResponse);
  }

  /**
   * Удаляет карточку
   * @param {*} id - id карточки
   * @returns карточку или ошибку
   */
  deleteCard(id, token) {
    return fetch((`${this._urlCards}/${id}`), {
      method: 'DELETE',
      headers: this._getAuthHeaders(token),
    })
      .then(this._checkServerResponse);
  }

  /**
   * Установка лайка
   * @param {*} id - id карточки
   * @returns лайки или ошибку
   */
  putLike(id, token) {
    return fetch((`${this._urlCardsLikes}/${id}`), {
      method: 'PUT',
      headers: this._getAuthHeaders(token),
    })
      .then(this._checkServerResponse);
  }

  /**
   * Удаление лайка
   * @param {*} id - id номер карточки
   * @returns карточку или ошибку
   */
  deleteLike(id, token) {
    return fetch((`${this._urlCardsLikes}/${id}`), {
      method: 'DELETE',
      headers: this._getAuthHeaders(token),
    })
      .then(this._checkServerResponse);
  }

  changeLikeCardStatus(id, isLiked, token) {
    return isLiked ? this.putLike(id, token) : this.deleteLike(id, token);
  }

  /**
   * Установка нового аватара
   * @param {avatar} avatar- аватар
   * @returns аватар или ошибку
   */
  setAvatar({ avatar }, token) {
    return fetch(this._urlUserMeAvatar, {
      method: 'PATCH',
      headers: this._getAuthHeaders(token),
      body: JSON.stringify({
        avatar: avatar,
      }),
    })
      .then(this._checkServerResponse);
  }
}

export const api = new Api(optionsApi, headers);
