(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ pages_UserProfile_UserProfile; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(17);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(6);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(8);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/framer-motion/dist/framer-motion.es.js
var framer_motion_es = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/react-icons/fi/index.esm.js + 4 modules
var index_esm = __webpack_require__(64);

// EXTERNAL MODULE: ./client/components/PostCards/PostCard.js
var PostCard = __webpack_require__(132);

// EXTERNAL MODULE: ./client/components/PostModal/PostModal.js + 6 modules
var PostModal = __webpack_require__(133);

// EXTERNAL MODULE: ./client/components/AuthorCard/index.js
var AuthorCard = __webpack_require__(280);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 113 modules
var formik_esm = __webpack_require__(57);

// EXTERNAL MODULE: ./client/components/Button/index.js + 1 modules
var Button = __webpack_require__(30);

// EXTERNAL MODULE: ./client/components/Textbox/index.js + 1 modules
var Textbox = __webpack_require__(70);

// EXTERNAL MODULE: ./client/components/TextArea/index.js + 1 modules
var TextArea = __webpack_require__(94);

// EXTERNAL MODULE: ./client/components/Modal/index.js
var Modal = __webpack_require__(281);

// EXTERNAL MODULE: ./client/components/ErrorBoundary/index.js
var ErrorBoundary = __webpack_require__(65);

// CONCATENATED MODULE: ./client/components/EditProfileModal/EditProfileModal.js




 // components







var EditProfileModal_EditProfileModal = function EditProfileModal(_ref) {
  var modalVisibility = _ref.modalVisibility,
      initialValues = _ref.initialValues,
      onSubmit = _ref.onSubmit,
      validationSchema = _ref.validationSchema,
      setModalVisibility = _ref.setModalVisibility,
      serverError = _ref.serverError;

  var _useState = Object(react["useState"])(''),
      _useState2 = slicedToArray_default()(_useState, 2),
      selectedImage = _useState2[0],
      setSelectedImage = _useState2[1];

  var _useState3 = Object(react["useState"])(''),
      _useState4 = slicedToArray_default()(_useState3, 2),
      pictureError = _useState4[0],
      setPictureError = _useState4[1];

  var imageRef = Object(react["useRef"])();
  console.log(initialValues);
  return /*#__PURE__*/react_default.a.createElement(Modal["a" /* default */], {
    modalVisibility: modalVisibility
  }, /*#__PURE__*/react_default.a.createElement(ErrorBoundary["a" /* default */], null, /*#__PURE__*/react_default.a.createElement("div", {
    className: "modal-container-active modal-container"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "w-full px-4 py-4 border-grey-lightest border-b-2 "
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "flex flex-row justify-between"
  }, /*#__PURE__*/react_default.a.createElement("p", {
    className: "md:text-xl text-black pt-2"
  }, "Edit Profile"), /*#__PURE__*/react_default.a.createElement("span", {
    className: "justify-center px-2 py-2 rounded-full cursor-pointer",
    onClick: function onClick() {
      return setModalVisibility(!modalVisibility);
    }
  }, "\u2716\uFE0F"))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "md:flex w-full border-none flex-col justify-center px-10 py-12"
  }, serverError && /*#__PURE__*/react_default.a.createElement("p", {
    className: "pb-4 text-red-light text-xs md:text-sm"
  }, serverError), pictureError && /*#__PURE__*/react_default.a.createElement("p", {
    className: " text-red-light text-xs md:text-sm"
  }, pictureError), /*#__PURE__*/react_default.a.createElement("div", {
    className: "flex justify-center items-center pb-16"
  }, /*#__PURE__*/react_default.a.createElement("img", {
    onClick: function onClick() {
      return imageRef.current.click();
    },
    src: selectedImage || initialValues.image,
    alt: "avatar",
    className: "block w-32 h-32 rounded-full border border-grey-lightest"
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "customPositionCamera  border border-grey-lightest rounded-full bg-white flex justify-center items-center"
  }, /*#__PURE__*/react_default.a.createElement(index_esm["c" /* FiCamera */], {
    className: "mx-1 my-1 w-4 h-4 ",
    onClick: function onClick() {
      return imageRef.current.click();
    }
  }))), /*#__PURE__*/react_default.a.createElement(formik_esm["a" /* Formik */], {
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
        handleSubmit = _ref2.handleSubmit,
        setFieldValue = _ref2.setFieldValue;
    return /*#__PURE__*/react_default.a.createElement("form", {
      onSubmit: handleSubmit,
      className: ""
    }, /*#__PURE__*/react_default.a.createElement("div", {
      className: "flex flex-wrap -mx-3 mb-6"
    }, /*#__PURE__*/react_default.a.createElement("input", {
      type: "file",
      ref: imageRef,
      className: "hidden",
      onChange: function onChange(e) {
        setPictureError('');
        var files = e.target.files; //check if file exist

        if (files && files[0]) {
          // check if file type is any image format

          /* istanbul ignore next */
          if (files[0].size > 1028643) {
            /* istanbul ignore next */
            setPictureError('Please select an image less than 1mb.');
          } else {
            setFieldValue('image', e.currentTarget.files[0]); // initializes file reader

            /* istanbul ignore next */

            var reader = new FileReader();
            /* istanbul ignore next */

            reader.onload = function (e) {
              // extract the image file and set it to state

              /* istanbul ignore next */
              setSelectedImage(e.target.result);
            };
            /* istanbul ignore next */


            reader.readAsDataURL(files[0]);
          }
        }
      },
      accept: "image/png, image/jpeg"
    }), /*#__PURE__*/react_default.a.createElement("div", {
      "class": "w-full md:w-1/2 px-3 mb-6 md:mb-0"
    }, /*#__PURE__*/react_default.a.createElement(Textbox["a" /* default */], {
      type: "text",
      name: "name",
      label: "Full Name",
      onBlur: handleBlur,
      value: values.name || initialValues.name,
      onChange: handleChange,
      "data-testid": 'name-field' // placeholder={'Enter your name'}
      ,
      error: touched.name && errors.name
    })), /*#__PURE__*/react_default.a.createElement("div", {
      className: "w-full md:w-1/2 px-3"
    }, /*#__PURE__*/react_default.a.createElement(Textbox["a" /* default */], {
      type: "email",
      name: "email",
      label: "Email",
      onBlur: handleBlur,
      value: values.email || initialValues.email,
      onChange: handleChange,
      "data-testid": 'email-field' // placeholder={'Enter your email'}
      ,
      error: touched.email && errors.email
    }))), /*#__PURE__*/react_default.a.createElement("div", {
      "class": "flex flex-wrap -mx-3 mb-6"
    }, /*#__PURE__*/react_default.a.createElement("div", {
      className: "w-full md:w-1/2 px-3 mb-6 md:mb-0"
    }, /*#__PURE__*/react_default.a.createElement(Textbox["a" /* default */], {
      type: "text",
      name: "state",
      label: "City",
      onBlur: handleBlur,
      value: values.state || initialValues.state,
      onChange: handleChange,
      "data-testid": 'state-field',
      error: touched.state && errors.state
    })), /*#__PURE__*/react_default.a.createElement("div", {
      className: "w-full md:w-1/2 px-3"
    }, /*#__PURE__*/react_default.a.createElement(Textbox["a" /* default */], {
      type: "text",
      name: "phone",
      label: "Phone",
      onBlur: handleBlur,
      value: values.phone || initialValues.phone,
      onChange: handleChange,
      "data-testid": 'phone-field' // placeholder={'Enter your email'}
      ,
      error: touched.phone && errors.phone
    }))), /*#__PURE__*/react_default.a.createElement("div", {
      className: "flex flex-wrap -mx-3 mb-6"
    }, /*#__PURE__*/react_default.a.createElement("div", {
      className: "w-full md:w-1/2 px-3 mb-6 md:mb-0"
    }, /*#__PURE__*/react_default.a.createElement(Textbox["a" /* default */], {
      type: "text",
      name: "service",
      label: "Occupation",
      onBlur: handleBlur,
      value: values.service || initialValues.service,
      onChange: handleChange,
      "data-testid": 'service-field' // placeholder={'Enter your name'}
      ,
      error: touched.service && errors.service
    })), /*#__PURE__*/react_default.a.createElement("div", {
      className: "w-full md:w-1/2 px-3"
    }, /*#__PURE__*/react_default.a.createElement(Textbox["a" /* default */], {
      type: "text",
      name: "address",
      label: "Address",
      onBlur: handleBlur,
      value: values.address,
      onChange: handleChange,
      "data-testid": 'address-field' // placeholder={'Enter your email'}
      ,
      error: touched.address && errors.address
    }))), /*#__PURE__*/react_default.a.createElement("div", {
      className: "flex flex-wrap -mx-3 mb-6"
    }, /*#__PURE__*/react_default.a.createElement("div", {
      "class": "w-full px-3"
    }, /*#__PURE__*/react_default.a.createElement(TextArea["a" /* default */], {
      name: "about",
      type: "textarea",
      col: "10",
      row: "10",
      label: "About ",
      onBlur: handleBlur,
      value: values.about || initialValues.about,
      onChange: handleChange,
      "data-testid": 'about-field' // placeholder={'Enter your email'}
      ,
      error: touched.about && errors.about
    }))), /*#__PURE__*/react_default.a.createElement("div", {
      className: "flex flex-wrap -mx-3 mb-2"
    }, /*#__PURE__*/react_default.a.createElement("div", {
      className: "w-full md:w-1/3 px-3 mb-6 md:mb-0"
    }, /*#__PURE__*/react_default.a.createElement(Textbox["a" /* default */], {
      type: "url",
      name: "facebook",
      label: "Facebook",
      onBlur: handleBlur,
      value: values.facebook || initialValues.facebook,
      onChange: handleChange,
      "data-testid": 'facebook-field',
      placeholder: 'https://facebook/your-handle',
      error: touched.facebook && errors.facebook
    }), ' '), /*#__PURE__*/react_default.a.createElement("div", {
      className: "w-full md:w-1/3 px-3 mb-6 md:mb-0"
    }, /*#__PURE__*/react_default.a.createElement(Textbox["a" /* default */], {
      type: "url",
      name: "twitter",
      label: "Twitter",
      onBlur: handleBlur,
      value: values.twitter || initialValues.twitter,
      onChange: handleChange,
      "data-testid": 'twitter-field',
      placeholder: 'https://twitter/your-handle',
      error: touched.twitter && errors.twitter
    })), /*#__PURE__*/react_default.a.createElement("div", {
      className: "w-full md:w-1/3 px-3 mb-6 md:mb-0"
    }, /*#__PURE__*/react_default.a.createElement(Textbox["a" /* default */], {
      type: "url",
      name: "instagram",
      label: "Instagram",
      onBlur: handleBlur,
      value: values.instagram || initialValues.instagram,
      onChange: handleChange,
      "data-testid": 'instagram-field',
      placeholder: 'https://instagram/your-profile',
      error: touched.instagram && errors.instagram
    }))), /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
      type: "submit",
      loading: isSubmitting,
      "data-testid": "submit-button"
    }, "Update Profile"));
  })))));
};

EditProfileModal_EditProfileModal.propTypes = {};
/* harmony default export */ var components_EditProfileModal_EditProfileModal = (EditProfileModal_EditProfileModal);
// EXTERNAL MODULE: ./client/pages/PostFeeds/fixtures.js
var fixtures = __webpack_require__(340);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 24 modules
var es = __webpack_require__(7);

// EXTERNAL MODULE: ./client/store/actions/fetch-user-profile.js
var fetch_user_profile = __webpack_require__(40);

// EXTERNAL MODULE: ./client/store/actions/auth.js
var auth = __webpack_require__(24);

// EXTERNAL MODULE: ./client/store/actions/follow-user.js
var follow_user = __webpack_require__(101);

// EXTERNAL MODULE: ./client/store/actions/unfollow-user.js
var unfollow_user = __webpack_require__(102);

// EXTERNAL MODULE: ./client/store/reducers/follow-user.js
var reducers_follow_user = __webpack_require__(322);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(5);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(11);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./client/store/Axios.js
var Axios = __webpack_require__(10);

// CONCATENATED MODULE: ./client/store/actions/edit-user-profile.js


 // define constant

var EDIT_USER_PROFILE_START = 'EDIT_USER_PROFILE_START';
var EDIT_USER_PROFILE_SUCCESS = 'EDIT_USER_PROFILE_SUCCESS';
var EDIT_USER_PROFILE_FAIL = 'EDIT_USER_PROFILE_FAIL';
/**
 * Make GET request to server to fetch all posts
 *
 * @return {Object} redux action
 */

var editUserProfileStart = function editUserProfileStart() {
  return {
    type: EDIT_USER_PROFILE_START
  };
};
var editUserProfileSuccess = function editUserProfileSuccess(payload) {
  return {
    type: EDIT_USER_PROFILE_SUCCESS,
    payload: payload
  };
};
var editUserProfileFail = function editUserProfileFail(payload) {
  return {
    type: EDIT_USER_PROFILE_FAIL,
    payload: payload
  };
};
/**
 * Create action to fetch single post
 *
 * @param {Object} page  page number of the response data
 * @param {Object} perPage  number of post per page in the response data
 * @return {Object} Redux action
 */

var edit_user_profile_editUserProfileRequest = function editUserProfileRequest(data, id) {
  return /*#__PURE__*/function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(dispatch) {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch(editUserProfileStart());
              return _context.abrupt("return", Axios["a" /* default */].patch("/profile/edit/".concat(id), data).then(function (res) {
                dispatch(editUserProfileSuccess(res.data));

                if (res.data.message) {
                  dispatch(editUserProfileFail(res.data.message));
                }
              })["catch"](function (err) {
                var message = err.response.data.message;
                var errorResponse;

                if (message) {
                  errorResponse = message;
                } else {
                  errorResponse = 'Something went wrong. please try again';
                }

                dispatch(editUserProfileFail(errorResponse));
              }));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
// CONCATENATED MODULE: ./client/pages/UserProfile/UserProfile.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 // components




 // fixtures











var UserProfile_UserProfile = function UserProfile(props) {
  var history = props.history;
  var _props$match$params = props.match.params,
      id = _props$match$params.id,
      identifier = _props$match$params.identifier,
      userID = _props$match$params.userID;

  var _useState = Object(react["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      modalVisibility = _useState2[0],
      setModalVisibility = _useState2[1];

  var _useState3 = Object(react["useState"])(false),
      _useState4 = slicedToArray_default()(_useState3, 2),
      editProfileModalVisibility = _useState4[0],
      setEditProfileModalVisibility = _useState4[1];

  var dispatch = Object(es["c" /* useDispatch */])();

  var _useState5 = Object(react["useState"])({}),
      _useState6 = slicedToArray_default()(_useState5, 2),
      user = _useState6[0],
      setUser = _useState6[1];

  var _useState7 = Object(react["useState"])([]),
      _useState8 = slicedToArray_default()(_useState7, 2),
      userPost = _useState8[0],
      setUserPost = _useState8[1];

  var _useState9 = Object(react["useState"])(''),
      _useState10 = slicedToArray_default()(_useState9, 2),
      isFollowing = _useState10[0],
      setFollowing = _useState10[1];

  var _useState11 = Object(react["useState"])(false),
      _useState12 = slicedToArray_default()(_useState11, 2),
      isFollowingSuccessful = _useState12[0],
      setFollowingSuccessful = _useState12[1];

  var userProfile = Object(es["d" /* useSelector */])(function (state) {
    return state.userProfile;
  });
  var followUser = Object(es["d" /* useSelector */])(function (state) {
    return state.followUser;
  });
  var unFollowUser = Object(es["d" /* useSelector */])(function (state) {
    return state.unFollowUser;
  });

  var _useState13 = Object(react["useState"])(''),
      _useState14 = slicedToArray_default()(_useState13, 2),
      serverError = _useState14[0],
      setServerError = _useState14[1];

  var closeModal = function closeModal() {
    setModalVisibility(!modalVisibility);
  };

  var transition = {
    duration: 1,
    ease: [0.43, 0.13, 0.23, 0.96]
  };
  var imageVariants = {
    exit: {
      y: '50%',
      opacity: 0.5,
      transition: _objectSpread({
        delay: 1
      }, transition)
    },
    enter: {
      y: '0%',
      opacity: 1,
      transition: transition
    }
  };
  var backVariants = {
    exit: {
      x: 100,
      opacity: 0,
      transition: _objectSpread({
        delay: 1
      }, transition)
    },
    enter: {
      x: 0,
      opacity: 1,
      transition: _objectSpread({
        delay: 1
      }, transition)
    }
  };
  Object(react["useEffect"])(function () {
    if (userID) {
      dispatch(Object(fetch_user_profile["d" /* fetchUserProfileRequest */])(true, userID));
    }
  }, []);
  Object(react["useEffect"])(function () {
    if (userProfile.isSuccessful) {
      setUser(userProfile.data.profile);
      setFollowing(userProfile.data.isFollowing);
      setUserPost(userProfile.data && userProfile.data.posts.data);
    }
  }, [userProfile]);
  Object(react["useEffect"])(function () {
    if (followUser.isSuccessful) {
      setFollowingSuccessful(followUser.data);
      setFollowing(true);
    } else {
      setFollowingSuccessful(false);
    }
  }, [followUser]);
  Object(react["useEffect"])(function () {
    if (unFollowUser.isSuccessful) {
      setFollowingSuccessful(unFollowUser.data);
      setFollowing(false);
    } else {
      setFollowingSuccessful(false);
    }
  }, [unFollowUser]);

  var handleUnfollowUser = function handleUnfollowUser() {
    dispatch(Object(unfollow_user["d" /* createUnfollowRequest */])(user.id));
  };

  var handleFollowUser = function handleFollowUser() {
    dispatch(Object(follow_user["d" /* createFollowRequest */])(user.id));
  };
  /**
  * Handle feeds form submit
  *
  * @return null
  */


  var onSubmit = function onSubmit(data, _ref) {
    var setSubmitting = _ref.setSubmitting,
        resetForm = _ref.resetForm;
    dispatch(edit_user_profile_editUserProfileRequest(data, user.id)).then(function (response) {
      if (response.payload.data.message || response.payload.data.error) {
        setServerError('Something went wrong, check your network and please try again');
        setSubmitting(false);
      } else {
        dispatch(flashMessage('profile updated successfully'));
        setModalVisibility(false);
        setSubmitting(false);
        resetForm(initialValues);
      }
    });
  };

  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("div", null, id && identifier && /*#__PURE__*/react_default.a.createElement(PostModal["a" /* default */], {
    modalVisibility: modalVisibility,
    setModalVisibility: closeModal,
    slug: id,
    identifier: identifier
  }), /*#__PURE__*/react_default.a.createElement(framer_motion_es["b" /* motion */].div, {
    className: "w-full m-auto max-w-2xl block sm:flex",
    initial: "exit",
    animate: "enter",
    exit: "exit"
  }, /*#__PURE__*/react_default.a.createElement(framer_motion_es["b" /* motion */].div, {
    className: "md:w-1/4 my-8 mx-4 h-full p-4 shadow-md border-grey-lighter rounded-lg flex flex-col ",
    variants: imageVariants
  }, /*#__PURE__*/react_default.a.createElement(AuthorCard["a" /* default */], extends_default()({
    profile: true
  }, user)), userID && (isFollowing ? /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    click: handleUnfollowUser
  }, "Unfollow") : /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    click: handleFollowUser
  }, "Follow")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "pt-6 flex flex-col w-full"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "flex flex-row justify-between py-2"
  }, /*#__PURE__*/react_default.a.createElement("p", {
    className: " text-sm"
  }, ' ', /*#__PURE__*/react_default.a.createElement("span", {
    className: "px-2 -mb-1"
  }, /*#__PURE__*/react_default.a.createElement(index_esm["a" /* FiAlignJustify */], null), ' '), "Posts"), /*#__PURE__*/react_default.a.createElement("div", null, userPost && userPost.length, ' ')), /*#__PURE__*/react_default.a.createElement("div", {
    className: "flex flex-row  justify-between py-2"
  }, ' ', /*#__PURE__*/react_default.a.createElement(react_router_dom["b" /* Link */], {
    to: "/messages"
  }, /*#__PURE__*/react_default.a.createElement("p", {
    className: " text-sm"
  }, ' ', /*#__PURE__*/react_default.a.createElement("span", {
    className: "px-2 -mb-1"
  }, /*#__PURE__*/react_default.a.createElement(index_esm["i" /* FiMessageCircle */], null), ' '), "Messages")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "bg-red rounded-full notify-badge h-2 w-2"
  })), !userID && /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("div", {
    className: "flex flex-row  justify-between py-2"
  }, ' ', /*#__PURE__*/react_default.a.createElement("p", {
    className: " text-sm",
    onClick: function onClick() {
      return setEditProfileModalVisibility(!editProfileModalVisibility);
    }
  }, ' ', /*#__PURE__*/react_default.a.createElement("span", {
    className: "px-2 -mb-1"
  }, /*#__PURE__*/react_default.a.createElement(index_esm["d" /* FiEdit3 */], null), ' '), "Edit Profile")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "flex flex-row  justify-between py-2"
  }, /*#__PURE__*/react_default.a.createElement("p", {
    className: "text-sm",
    onClick: function onClick() {
      return dispatch(Object(auth["f" /* logout */])(history));
    }
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: "px-2 -mb-1"
  }, /*#__PURE__*/react_default.a.createElement(index_esm["g" /* FiLogOut */], null), ' '), ' ', "Log Out")))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "pt-4 flex flex-col"
  }, /*#__PURE__*/react_default.a.createElement("h6", {
    className: "md:text-md text-black text-sm py-2"
  }, "About me"), /*#__PURE__*/react_default.a.createElement("p", {
    className: "text-xxs"
  }, user && user.about)), /*#__PURE__*/react_default.a.createElement("div", {
    className: "py-4 "
  }, /*#__PURE__*/react_default.a.createElement("h6", {
    className: "md:text-md text-black text-sm py-2"
  }, "Social Media"), /*#__PURE__*/react_default.a.createElement("div", {
    className: "flex flex-row "
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: "pr-4"
  }, /*#__PURE__*/react_default.a.createElement(react_router_dom["b" /* Link */], {
    to: user && user.twitter || '#'
  }, /*#__PURE__*/react_default.a.createElement(index_esm["j" /* FiTwitter */], null))), /*#__PURE__*/react_default.a.createElement("span", {
    className: "pr-4"
  }, /*#__PURE__*/react_default.a.createElement(react_router_dom["b" /* Link */], {
    to: user && user.instagram || '#'
  }, /*#__PURE__*/react_default.a.createElement(index_esm["f" /* FiInstagram */], null))), /*#__PURE__*/react_default.a.createElement("span", {
    className: "pr-4"
  }, /*#__PURE__*/react_default.a.createElement(react_router_dom["b" /* Link */], {
    to: user && user.facebook || '#'
  }, /*#__PURE__*/react_default.a.createElement(index_esm["e" /* FiFacebook */], null)))))), /*#__PURE__*/react_default.a.createElement(framer_motion_es["b" /* motion */].div, {
    className: "text-xl text-black md:w-3/4 flex justify-between flex-wrap",
    variants: backVariants
  }, userPost && userPost.map(function (item, key) {
    return /*#__PURE__*/react_default.a.createElement("div", {
      className: "flex max-w-xs mx-2",
      key: key
    }, /*#__PURE__*/react_default.a.createElement(PostCard["a" /* default */], {
      title: item.title,
      image: item.featured,
      video: item.featured_video,
      key: key,
      time: item.created,
      avatar: item.avatar,
      name: item.name,
      slug: item.id,
      id: item.id,
      profilePage: true,
      modalVisibility: modalVisibility,
      setModalVisibility: setModalVisibility
    }));
  })))), /*#__PURE__*/react_default.a.createElement(components_EditProfileModal_EditProfileModal, {
    modalVisibility: editProfileModalVisibility,
    setModalVisibility: function setModalVisibility() {
      return setEditProfileModalVisibility(!editProfileModalVisibility);
    },
    initialValues: user,
    onSubmit: onSubmit,
    serverError: serverError
  }));
};

/* harmony default export */ var pages_UserProfile_UserProfile = (UserProfile_UserProfile);
// CONCATENATED MODULE: ./client/pages/UserProfile/index.js


/***/ })

}]);