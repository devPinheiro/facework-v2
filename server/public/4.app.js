(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ ResetPassword; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(17);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(43);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(44);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(54);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(45);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(46);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(31);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(6);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(4);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/react-helmet/lib/Helmet.js
var Helmet = __webpack_require__(79);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 24 modules
var es = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/redux-flash/lib/index.js
var lib = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 113 modules
var formik_esm = __webpack_require__(57);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(9);

// EXTERNAL MODULE: ./client/components/Button/index.js + 1 modules
var Button = __webpack_require__(30);

// EXTERNAL MODULE: ./client/components/Textbox/index.js + 1 modules
var Textbox = __webpack_require__(70);

// CONCATENATED MODULE: ./client/components/ResetPasswordForm/ResetPasswordForm.js



 // components




var ResetPasswordForm_ResetPasswordForm = function ResetPasswordForm(_ref) {
  var initialValues = _ref.initialValues,
      onSubmit = _ref.onSubmit,
      validationSchema = _ref.validationSchema;
  return /*#__PURE__*/react_default.a.createElement(react["Fragment"], null, /*#__PURE__*/react_default.a.createElement("div", {
    className: "bg-image"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "container mx-auto flex text-white justify-center h-screen"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "max-w-md-1/2 mx-3 my-8 w-full"
  }, /*#__PURE__*/react_default.a.createElement("h1", {
    className: "text-center font-primary mt-16 mb-8 font-semibold text-6xl"
  }, "facework"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "bg-white-900 shadow-md pb-8 pt-8 pl-4 pr-4 md:pl-16 md:pr-16 rounded-lg w-full bg-form-transparent"
  }, /*#__PURE__*/react_default.a.createElement("h2", {
    className: "text-center font-primary font-semibold mb-8"
  }, "Change Your Password"), /*#__PURE__*/react_default.a.createElement(formik_esm["a" /* Formik */], {
    onSubmit: onSubmit,
    initialValues: initialValues,
    validationSchema: validationSchema
  }, function (_ref2) {
    var values = _ref2.values,
        errors = _ref2.errors,
        touched = _ref2.touched,
        isSubmitting = _ref2.isSubmitting,
        handleChange = _ref2.handleChange,
        handleBlur = _ref2.handleBlur,
        handleSubmit = _ref2.handleSubmit;
    return /*#__PURE__*/react_default.a.createElement("form", {
      onSubmit: handleSubmit
    }, /*#__PURE__*/react_default.a.createElement(Textbox["a" /* default */], {
      type: "email",
      name: "email",
      label: "Email",
      onBlur: handleBlur,
      value: values.email,
      onChange: handleChange,
      "data-testid": 'email-field',
      placeholder: 'Enter your email',
      error: touched.email && errors.email
    }), /*#__PURE__*/react_default.a.createElement(Textbox["a" /* default */], {
      type: "password",
      name: "password",
      label: "New Password",
      onBlur: handleBlur,
      value: values.password,
      onChange: handleChange,
      "data-testid": 'password-field',
      placeholder: 'Enter your new password',
      error: touched.password && errors.password
    }), /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
      type: "submit",
      loading: isSubmitting,
      "data-testid": "submit-button"
    }, "Reset Password"));
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: "mt-8 text-white flex justify-center pb-32"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: ""
  }, "Already have an account?", /*#__PURE__*/react_default.a.createElement(react_router_dom["b" /* Link */], {
    to: "/auth/login",
    className: "text-orange no-underline"
  }, ' ', "Sign in Now")))))));
};

ResetPasswordForm_ResetPasswordForm.propTypes = {
  initialValues: prop_types_default.a.shape({
    email: prop_types_default.a.string,
    password: prop_types_default.a.string,
    token: prop_types_default.a.string
  }).isRequired,
  validationSchema: prop_types_default.a.object,
  onSubmit: prop_types_default.a.func.isRequired
};
/* harmony default export */ var components_ResetPasswordForm_ResetPasswordForm = (ResetPasswordForm_ResetPasswordForm);
// CONCATENATED MODULE: ./client/components/ResetPasswordForm/index.js

// EXTERNAL MODULE: ./client/store/actions/auth.js
var auth = __webpack_require__(24);

// EXTERNAL MODULE: ./client/validation-schemas/index.js
var validation_schemas = __webpack_require__(39);

// EXTERNAL MODULE: ./client/pages/Login/index.css
var Login = __webpack_require__(339);

// CONCATENATED MODULE: ./client/pages/ResetPassword/ResetPassword.js









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










var ResetPassword_ResetPasswordPage = /*#__PURE__*/function (_Component) {
  inherits_default()(ResetPasswordPage, _Component);

  var _super = _createSuper(ResetPasswordPage);

  function ResetPasswordPage() {
    var _this;

    classCallCheck_default()(this, ResetPasswordPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      initialValues: {
        email: '',
        password: '',
        token: _this.props.match.params.token
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "ResetPasswordSchema", validation_schemas["e" /* ResetPasswordSchema */]);

    defineProperty_default()(assertThisInitialized_default()(_this), "onSubmit", function (data, _ref) {
      var setSubmitting = _ref.setSubmitting,
          setErrors = _ref.setErrors;
      var _this$props = _this.props,
          dispatch = _this$props.dispatch,
          history = _this$props.history;
      dispatch(Object(auth["k" /* postResetPassword */])(data)).then(function () {
        // history.push('/')
        dispatch(Object(lib["flashMessage"])('Password successfully reset.'));
      })["catch"](function (_ref2) {
        var error = _ref2.error;
        setSubmitting(false);
        setErrors(error.response.data.message);
        dispatch(Object(lib["flashMessage"])(error.response.data.message, {
          isError: true
        }));
      });
    });

    return _this;
  }

  createClass_default()(ResetPasswordPage, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react_default.a.createElement(react["Fragment"], null, /*#__PURE__*/react_default.a.createElement(Helmet["Helmet"], null, /*#__PURE__*/react_default.a.createElement("title", null, "Reset Password")), /*#__PURE__*/react_default.a.createElement(components_ResetPasswordForm_ResetPasswordForm, extends_default()({}, this.props, {
        onSubmit: this.onSubmit,
        initialValues: this.state.initialValues,
        validationSchema: this.ResetPasswordSchema
      })));
    }
  }]);

  return ResetPasswordPage;
}(react["Component"]);

defineProperty_default()(ResetPassword_ResetPasswordPage, "propTypes", {
  dispatch: prop_types_default.a.func.isRequired,
  history: prop_types_default.a.shape({
    push: prop_types_default.a.func.isRequired
  }),
  match: prop_types_default.a.shape({
    params: prop_types_default.a.shape({
      token: prop_types_default.a.string
    })
  })
});

/* harmony default export */ var ResetPassword = (Object(es["b" /* connect */])()(ResetPassword_ResetPasswordPage));
// CONCATENATED MODULE: ./client/pages/ResetPassword/index.js


/***/ })

}]);