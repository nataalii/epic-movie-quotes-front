import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  registerModal: false,
  loginModal: false,
  forgotPassword: false,
  checkEmail: false,
  resetPassword: false,
  passwordChanged: false,
  verificationNotif: false,
  verificationVerify: false,
  addMovieModal: false,
  editMovieModal: false,
  addQuoteModal: false,
  viewQuoteModal: false,
  editQuoteModal: false,
  addEmailModal: false,
  updateUsernameModal: false,
  confirmChangesModal: false,
  updatePasswordModal: false,
  confirmPasswordModal: false,
  updateEmailsModal: false,
  addNewEmailModal: false,
  burgerMenuModal: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openRegisterModal: (state) => {
      state.registerModal = true;
    },
    closeRegisterModal: (state) => {
      state.registerModal = false;
    },
    openLoginModal: (state) => {
      state.loginModal = true;
    },
    closeLoginModal: (state) => {
      state.loginModal = false;
    },
    openForgotPassword: (state) => {
      state.forgotPassword = true;
    },
    closeForgotPassword: (state) => {
      state.forgotPassword = false;
    },
    openCheckEmail: (state) => {
      state.checkEmail = true;
    },
    closeCheckEmail: (state) => {
      state.checkEmail = false;
    },
    openResetPassword: (state) => {
      state.resetPassword = true;
    },
    closeResetPassword: (state) => {
      state.resetPassword = false;
    },
    openPasswordChanged: (state) => {
      state.passwordChanged = true;
    },
    closePasswordChanged: (state) => {
      state.passwordChanged = false;
    },
    openVerificationNotif: (state) => {
      state.verificationNotif = true;
    },
    closeVerificationNotif: (state) => {
      state.verificationNotif = false;
    },
    openVerificationVerify: (state) => {
      state.verificationVerify = true;
    },
    closeVerificationVerify: (state) => {
      state.verificationVerify = false;
    },
    openAddMovieModal: (state) => {
      state.addMovieModal = true;
    },
    closeAddMovieModal: (state) => {
      state.addMovieModal = false;
    },
    openAddEmailModal: (state) => {
      state.addEmailModal = true;
    },
    closeAddEmailModal: (state) => {
      state.addEmailModal = false;
    },
    updateUsername: (state) => {
      state.updateUsernameModal = !state.updateUsernameModal;
    },
    confirmChanges: (state) => {
      state.confirmChangesModal = !state.confirmChangesModal;
    },
    updatePassword: (state) => {
      state.updatePasswordModal = !state.updatePasswordModal;
    },
    confirmPassword: (state) => {
      state.confirmPasswordModal = !state.confirmPasswordModal;
    },

    updateEmails: (state) => {
      state.updateEmailsModal = !state.updateEmailsModal;
    },
    addNewEmail: (state) => {
      state.addNewEmailModal = !state.addNewEmailModal;
    },

    burgerMenu: (state) => {
      state.burgerMenuModal = !state.burgerMenuModal;
    },
    addQoute: (state) => {
      state.addQuoteModal = !state.addQuoteModal;
    },
    viewQuote: (state) => {
      state.viewQuoteModal = !state.viewQuoteModal;
    },
    editQuote: (state) => {
      state.editQuoteModal = !state.editQuoteModal;
    },
    editMovie: (state) => {
      state.editMovieModal = !state.editMovieModal;
    },
  },
});

export const {
  openRegisterModal,
  closeRegisterModal,
  openLoginModal,
  closeLoginModal,
  openForgotPassword,
  closeForgotPassword,
  openCheckEmail,
  closeCheckEmail,
  openResetPassword,
  closeResetPassword,
  openPasswordChanged,
  closePasswordChanged,
  openVerificationNotif,
  closeVerificationNotif,
  closeVerificationVerify,
  openVerificationVerify,
  openAddMovieModal,
  closeAddMovieModal,
  openAddEmailModal,
  closeAddEmailModal,
  updateUsername,
  confirmChanges,
  updatePassword,
  confirmPassword,
  updateEmails,
  addNewEmail,
  burgerMenu,
  addQoute,
  viewQuote,
  editQuote,
  editMovie,
} = modalSlice.actions;

export default modalSlice.reducer;
