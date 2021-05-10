(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ Register; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(17);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(5);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(11);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

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

// CONCATENATED MODULE: ./client/components/RegisterForm/RegisterForm.js



 // components




var RegisterForm_RegisterForm = function RegisterForm(_ref) {
  var initialValues = _ref.initialValues,
      onSubmit = _ref.onSubmit,
      validationSchema = _ref.validationSchema,
      confirmEmail = _ref.confirmEmail;
  return /*#__PURE__*/react_default.a.createElement(react["Fragment"], null, /*#__PURE__*/react_default.a.createElement("div", {
    className: "bg-image"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "container mx-auto flex text-white justify-center "
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "max-w-md-1/2 mx-3 my-8 w-full"
  }, /*#__PURE__*/react_default.a.createElement("h1", {
    className: "text-center font-primary mt-16 mb-8 font-semibold text-6xl"
  }, "facework"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "bg-white-900 shadow-md pb-8 pt-8 pl-4 pr-4 md:pl-16 md:pr-16 rounded-lg w-full bg-form-transparent"
  }, confirmEmail ? /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("h2", {
    className: "text-center font-primary font-semibold mb-8"
  }, "Confirm your email"), /*#__PURE__*/react_default.a.createElement("p", {
    className: "text-sm"
  }, "We have sent you a confirmation mail. Kindly check it out to activate your account")) : /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("h2", {
    className: "text-center font-primary font-semibold mb-8"
  }, "Register"), /*#__PURE__*/react_default.a.createElement(formik_esm["a" /* Formik */], {
    onSubmit: onSubmit,
    initialValues: initialValues,
    validationSchema: validationSchema
  }, function (_ref2) {
    var values = _ref2.values,
        errors = _ref2.errors,
        touched = _ref2.touched,
        isValid = _ref2.isValid,
        isSubmitting = _ref2.isSubmitting,
        handleChange = _ref2.handleChange,
        handleBlur = _ref2.handleBlur,
        handleSubmit = _ref2.handleSubmit;
    return /*#__PURE__*/react_default.a.createElement("form", {
      onSubmit: handleSubmit
    }, /*#__PURE__*/react_default.a.createElement(Textbox["a" /* default */], {
      type: "name",
      name: "name",
      label: "Full Name",
      onBlur: handleBlur,
      value: values.name,
      onChange: handleChange,
      "data-testid": 'name-field',
      placeholder: 'Enter your name',
      error: touched.name && errors.name
    }), /*#__PURE__*/react_default.a.createElement(Textbox["a" /* default */], {
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
      label: "Password",
      onBlur: handleBlur,
      value: values.password,
      onChange: handleChange,
      "data-testid": 'password-field',
      placeholder: 'Enter your password',
      error: touched.password && errors.password
    }), /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
      type: "submit",
      loading: isSubmitting,
      "data-testid": "submit-button"
    }, "Submit"));
  }))))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "mb-10 text-white flex justify-center  pl-4 pr-4"
  }, /*#__PURE__*/react_default.a.createElement("div", null, "By contunuing, you agree to the Facework's", /*#__PURE__*/react_default.a.createElement(react_router_dom["b" /* Link */], {
    className: "text-orange no-underline",
    to: "/auth/login"
  }, "Conditions of Use"), ' ', "and", /*#__PURE__*/react_default.a.createElement(react_router_dom["b" /* Link */], {
    className: "text-orange no-underline",
    to: "/auth/login"
  }, ' ', "Privacy Policy"))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "mt-2 text-white flex justify-center pb-32"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: ""
  }, "Already have an account?", /*#__PURE__*/react_default.a.createElement(react_router_dom["b" /* Link */], {
    to: "/auth/login",
    className: "text-orange no-underline"
  }, ' ', "Sign in Now")))));
};

RegisterForm_RegisterForm.propTypes = {
  initialValues: prop_types_default.a.shape({
    name: prop_types_default.a.string,
    email: prop_types_default.a.string,
    password: prop_types_default.a.string
  }).isRequired,
  validationSchema: prop_types_default.a.object,
  onSubmit: prop_types_default.a.func.isRequired
};
/* harmony default export */ var components_RegisterForm_RegisterForm = (RegisterForm_RegisterForm);
// CONCATENATED MODULE: ./client/components/RegisterForm/index.js

// EXTERNAL MODULE: ./client/store/actions/auth.js
var auth = __webpack_require__(24);

// EXTERNAL MODULE: ./client/validation-schemas/index.js
var validation_schemas = __webpack_require__(39);

// EXTERNAL MODULE: ./client/components/Footer/index.js + 1 modules
var Footer = __webpack_require__(92);

// EXTERNAL MODULE: ./client/pages/Login/index.css
var Login = __webpack_require__(339);

// CONCATENATED MODULE: ./client/pages/Register/Register.js











function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }











var Register_RegisterPage = /*#__PURE__*/function (_Component) {
  inherits_default()(RegisterPage, _Component);

  var _super = _createSuper(RegisterPage);

  function RegisterPage() {
    var _this;

    classCallCheck_default()(this, RegisterPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      initialValues: {
        name: '',
        email: '',
        password: ''
      },
      confirmEmail: false
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "RegisterSchema", validation_schemas["d" /* RegisterSchema */]);

    defineProperty_default()(assertThisInitialized_default()(_this), "onSubmit", /*#__PURE__*/function () {
      var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(data, _ref) {
        var setSubmitting, setErrors, _this$props, dispatch, history, response, error;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setSubmitting = _ref.setSubmitting, setErrors = _ref.setErrors;
                _this$props = _this.props, dispatch = _this$props.dispatch, history = _this$props.history;
                _context.prev = 2;
                _context.next = 5;
                return dispatch(Object(auth["j" /* postRegister */])(data));

              case 5:
                response = _context.sent;

                if (response.payload.data.data) {
                  dispatch(Object(lib["flashMessage"])('Successfully registered.'));

                  _this.setState({
                    confirmEmail: true
                  });
                }

                if (response.payload.data.errors) {
                  setSubmitting(false);
                  setErrors(response.payload.data.errors);
                  dispatch(Object(lib["flashMessage"])(response.payload.data.errors.email[0], {
                    isError: true
                  }));
                }

                _context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);
                error = _context.t0.error;

                if (error.data) {
                  dispatch(Object(lib["flashMessage"])('Network Error', {
                    isError: true
                  }));
                  setSubmitting(false);
                } else if (error.response.data.errors) {
                  setSubmitting(false);
                  setErrors(error.response.data.errors);
                  dispatch(Object(lib["flashMessage"])(error.response.data.errors.email[0], {
                    isError: true
                  }));
                }

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 10]]);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    return _this;
  }

  createClass_default()(RegisterPage, [{
    key: "render",
    value: function render() {
      var confirmEmail = this.state.confirmEmail;
      return /*#__PURE__*/react_default.a.createElement(react["Fragment"], null, /*#__PURE__*/react_default.a.createElement(Helmet["Helmet"], null, /*#__PURE__*/react_default.a.createElement("title", null, "Register")), /*#__PURE__*/react_default.a.createElement(components_RegisterForm_RegisterForm, extends_default()({}, this.props, {
        onSubmit: this.onSubmit,
        validate: this.handleValidation,
        validationSchema: this.RegisterSchema,
        initialValues: this.state.initialValues,
        confirmEmail: confirmEmail
      })), /*#__PURE__*/react_default.a.createElement(Footer["a" /* default */], null));
    }
  }]);

  return RegisterPage;
}(react["Component"]);

defineProperty_default()(Register_RegisterPage, "propTypes", {
  dispatch: prop_types_default.a.func.isRequired,
  history: prop_types_default.a.shape({
    push: prop_types_default.a.func.isRequired
  })
});

/* harmony default export */ var Register = (Object(es["b" /* connect */])()(Register_RegisterPage));
// CONCATENATED MODULE: ./client/pages/Register/index.js


/***/ })

}]);