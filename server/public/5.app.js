(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./client/components/Button/Button.js":
/*!********************************************!*\
  !*** ./client/components/Button/Button.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Loader */ \"./client/components/Loader/index.js\");\n\n\n // components\n\n\n\nvar Button = function Button(_ref) {\n  var _ref$type = _ref.type,\n      type = _ref$type === void 0 ? 'button' : _ref$type,\n      children = _ref.children,\n      disabled = _ref.disabled,\n      loading = _ref.loading;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: type,\n    disabled: disabled || loading,\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('focus:outline-none rounded-sm hover:bg-emerald-light px-4 py-5 w-full text-white text-xl', {\n      'bg-emerald': !disabled,\n      'bg-emerald-light cursor-not-allowed': disabled\n    })\n  }, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    dark: false\n  }), !loading && children);\n};\n\nButton.propTypes = {\n  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\n\n//# sourceURL=webpack:///./client/components/Button/Button.js?");

/***/ }),

/***/ "./client/components/Button/index.js":
/*!*******************************************!*\
  !*** ./client/components/Button/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ \"./client/components/Button/Button.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./client/components/Button/index.js?");

/***/ }),

/***/ "./client/components/ResetPasswordForm/ResetPasswordForm.js":
/*!******************************************************************!*\
  !*** ./client/components/ResetPasswordForm/ResetPasswordForm.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button */ \"./client/components/Button/index.js\");\n/* harmony import */ var _Textbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Textbox */ \"./client/components/Textbox/index.js\");\n\n\n // components\n\n\n\n\nvar ResetPasswordForm = function ResetPasswordForm(_ref) {\n  var initialValues = _ref.initialValues,\n      onSubmit = _ref.onSubmit,\n      validationSchema = _ref.validationSchema;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"container mx-auto flex justify-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"max-w-md-1/2 mx-3 my-12 w-full\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"h1\", {\n    className: \"text-center font-primary font-semibold text-gold\"\n  }, \"Reset Password\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"bg-white shadow-md my-12 p-16 rounded w-full\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_0__[\"Formik\"], {\n    onSubmit: onSubmit,\n    initialValues: initialValues,\n    validationSchema: validationSchema\n  }, function (_ref2) {\n    var values = _ref2.values,\n        errors = _ref2.errors,\n        touched = _ref2.touched,\n        isSubmitting = _ref2.isSubmitting,\n        handleChange = _ref2.handleChange,\n        handleBlur = _ref2.handleBlur,\n        handleSubmit = _ref2.handleSubmit;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"form\", {\n      onSubmit: handleSubmit\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Textbox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      type: \"email\",\n      name: \"email\",\n      onBlur: handleBlur,\n      value: values.email,\n      onChange: handleChange,\n      \"data-testid\": 'email-field',\n      placeholder: 'Enter your email',\n      error: touched.email && errors.email\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Textbox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      type: \"password\",\n      name: \"password\",\n      onBlur: handleBlur,\n      value: values.password,\n      onChange: handleChange,\n      \"data-testid\": 'password-field',\n      placeholder: 'Enter your new password',\n      error: touched.password && errors.password\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      type: \"submit\",\n      loading: isSubmitting,\n      \"data-testid\": \"submit-button\"\n    }, \"Reset Password\"));\n  })))));\n};\n\nResetPasswordForm.propTypes = {\n  initialValues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    email: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n    password: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n    token: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n  }).isRequired,\n  validationSchema: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,\n  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResetPasswordForm);\n\n//# sourceURL=webpack:///./client/components/ResetPasswordForm/ResetPasswordForm.js?");

/***/ }),

/***/ "./client/components/ResetPasswordForm/index.js":
/*!******************************************************!*\
  !*** ./client/components/ResetPasswordForm/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ResetPasswordForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResetPasswordForm */ \"./client/components/ResetPasswordForm/ResetPasswordForm.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _ResetPasswordForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./client/components/ResetPasswordForm/index.js?");

/***/ }),

/***/ "./client/components/Textbox/Textbox.js":
/*!**********************************************!*\
  !*** ./client/components/Textbox/Textbox.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Textbox = function Textbox(_ref) {\n  var onChange = _ref.onChange,\n      placeholder = _ref.placeholder,\n      onBlur = _ref.onBlur,\n      value = _ref.value,\n      type = _ref.type,\n      error = _ref.error,\n      name = _ref.name;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mb-5\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    name: name,\n    type: type,\n    onChange: onChange,\n    placeholder: placeholder,\n    onBlur: onBlur,\n    value: value,\n    className: \"focus:outline-none w-full p-6 bg-brown-lightest text-brown\"\n  }), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"text-sm text-red-light mt-2 block\"\n  }, error));\n};\n\nTextbox.propTypes = {\n  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,\n  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Textbox);\n\n//# sourceURL=webpack:///./client/components/Textbox/Textbox.js?");

/***/ }),

/***/ "./client/components/Textbox/index.js":
/*!********************************************!*\
  !*** ./client/components/Textbox/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Textbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Textbox */ \"./client/components/Textbox/Textbox.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _Textbox__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./client/components/Textbox/index.js?");

/***/ }),

/***/ "./client/pages/ResetPassword/ResetPassword.js":
/*!*****************************************************!*\
  !*** ./client/pages/ResetPassword/ResetPassword.js ***!
  \*****************************************************/
/*! exports provided: ResetPasswordPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ResetPasswordPage\", function() { return ResetPasswordPage; });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/lib/Helmet.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux_flash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux-flash */ \"./node_modules/redux-flash/lib/index.js\");\n/* harmony import */ var redux_flash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(redux_flash__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _components_ResetPasswordForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/ResetPasswordForm */ \"./client/components/ResetPasswordForm/index.js\");\n/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../store/actions/auth */ \"./client/store/actions/auth.js\");\n/* harmony import */ var _validation_schemas__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../validation-schemas */ \"./client/validation-schemas/index.js\");\n\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\nvar ResetPasswordPage = /*#__PURE__*/function (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ResetPasswordPage, _Component);\n\n  var _super = _createSuper(ResetPasswordPage);\n\n  function ResetPasswordPage() {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ResetPasswordPage);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), \"state\", {\n      initialValues: {\n        email: '',\n        password: '',\n        token: _this.props.match.params.token\n      }\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), \"ResetPasswordSchema\", _validation_schemas__WEBPACK_IMPORTED_MODULE_15__[\"ResetPasswordSchema\"]);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), \"onSubmit\", function (data, _ref) {\n      var setSubmitting = _ref.setSubmitting,\n          setErrors = _ref.setErrors;\n      var _this$props = _this.props,\n          dispatch = _this$props.dispatch,\n          history = _this$props.history;\n      dispatch(Object(_store_actions_auth__WEBPACK_IMPORTED_MODULE_14__[\"postResetPassword\"])(data)).then(function () {\n        history.push('/');\n        dispatch(Object(redux_flash__WEBPACK_IMPORTED_MODULE_11__[\"flashMessage\"])('Password successfully reset.'));\n      })[\"catch\"](function (_ref2) {\n        var error = _ref2.error;\n        setSubmitting(false);\n        setErrors(error.response.data.data.errors);\n      });\n    });\n\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ResetPasswordPage, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12__[\"Fragment\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_9__[\"Helmet\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(\"title\", null, \"Reset Password\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_ResetPasswordForm__WEBPACK_IMPORTED_MODULE_13__[\"default\"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props, {\n        onSubmit: this.onSubmit,\n        initialValues: this.state.initialValues,\n        validationSchema: this.ResetPasswordSchema\n      })));\n    }\n  }]);\n\n  return ResetPasswordPage;\n}(react__WEBPACK_IMPORTED_MODULE_12__[\"Component\"]);\n\n_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(ResetPasswordPage, \"propTypes\", {\n  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,\n  history: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({\n    push: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired\n  }),\n  match: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({\n    params: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({\n      token: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string\n    })\n  })\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__[\"connect\"])()(ResetPasswordPage));\n\n//# sourceURL=webpack:///./client/pages/ResetPassword/ResetPassword.js?");

/***/ }),

/***/ "./client/pages/ResetPassword/index.js":
/*!*********************************************!*\
  !*** ./client/pages/ResetPassword/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ResetPassword__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResetPassword */ \"./client/pages/ResetPassword/ResetPassword.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _ResetPassword__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./client/pages/ResetPassword/index.js?");

/***/ }),

/***/ "./client/validation-schemas/index.js":
/*!********************************************!*\
  !*** ./client/validation-schemas/index.js ***!
  \********************************************/
/*! exports provided: LoginSchema, RegisterSchema, ForgotPasswordSchema, EmailConfirmationSchema, ResetPasswordSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoginSchema\", function() { return LoginSchema; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RegisterSchema\", function() { return RegisterSchema; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ForgotPasswordSchema\", function() { return ForgotPasswordSchema; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EmailConfirmationSchema\", function() { return EmailConfirmationSchema; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ResetPasswordSchema\", function() { return ResetPasswordSchema; });\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ \"./node_modules/yup/lib/index.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);\n\nvar LoginSchema = yup__WEBPACK_IMPORTED_MODULE_0__[\"object\"]().shape({\n  email: yup__WEBPACK_IMPORTED_MODULE_0__[\"string\"]().email().required(),\n  password: yup__WEBPACK_IMPORTED_MODULE_0__[\"string\"]().min(6).max(10).required()\n});\nvar RegisterSchema = yup__WEBPACK_IMPORTED_MODULE_0__[\"object\"]().shape({\n  name: yup__WEBPACK_IMPORTED_MODULE_0__[\"string\"]().required(),\n  email: yup__WEBPACK_IMPORTED_MODULE_0__[\"string\"]().required().email(),\n  password: yup__WEBPACK_IMPORTED_MODULE_0__[\"string\"]().min(6).max(10).required()\n});\nvar ForgotPasswordSchema = yup__WEBPACK_IMPORTED_MODULE_0__[\"object\"]().shape({\n  email: yup__WEBPACK_IMPORTED_MODULE_0__[\"string\"]().email().required()\n});\nvar EmailConfirmationSchema = yup__WEBPACK_IMPORTED_MODULE_0__[\"object\"]().shape({\n  token: yup__WEBPACK_IMPORTED_MODULE_0__[\"string\"]().required()\n});\nvar ResetPasswordSchema = yup__WEBPACK_IMPORTED_MODULE_0__[\"object\"]().shape({\n  email: yup__WEBPACK_IMPORTED_MODULE_0__[\"string\"]().email().required(),\n  password: yup__WEBPACK_IMPORTED_MODULE_0__[\"string\"]().min(6).max(10).required(),\n  token: yup__WEBPACK_IMPORTED_MODULE_0__[\"string\"]().required()\n});\n\n//# sourceURL=webpack:///./client/validation-schemas/index.js?");

/***/ })

}]);