(this["webpackJsonpps-react-ae2s"]=this["webpackJsonpps-react-ae2s"]||[]).push([[0],{11:function(e,r){e.exports=[{name:"EyeIcon",description:"SVG Eye Icon",code:'import React from \'react\';\r\n\r\n/** SVG Eye Icon */\r\nfunction EyeIcon() {\r\n  // Attribution: Fabi\xe1n Alexis at https://commons.wikimedia.org/wiki/File:Antu_view-preview.svg\r\n  return (\r\n    <svg\r\n      width="16"\r\n      height="16"\r\n      xmlns="http://www.w3.org/2000/svg"\r\n      viewBox="0 0 22 22"\r\n    >\r\n      <g transform="matrix(.02146 0 0 .02146 1 1)" fill="#4d4d4d">\r\n        <path d="m466.07 161.53c-205.6 0-382.8 121.2-464.2 296.1-2.5 5.3-2.5 11.5 0 16.9 81.4 174.9 258.6 296.1 464.2 296.1 205.6 0 382.8-121.2 464.2-296.1 2.5-5.3 2.5-11.5 0-16.9-81.4-174.9-258.6-296.1-464.2-296.1m0 514.7c-116.1 0-210.1-94.1-210.1-210.1 0-116.1 94.1-210.1 210.1-210.1 116.1 0 210.1 94.1 210.1 210.1 0 116-94.1 210.1-210.1 210.1" />\r\n        <circle cx="466.08" cy="466.02" r="134.5" />\r\n      </g>\r\n    </svg>\r\n  );\r\n}\r\n\r\nexport default EyeIcon;\r\n',examples:[{name:"Example",description:"",code:"import React from 'react';\r\nimport EyeIcon from 'ps-react/EyeIcon';\r\n\r\nexport default function EyeIconExample() {\r\n  return <EyeIcon />;\r\n}\r\n"}]},{name:"HelloWorld",description:"A super lame component that says Hello with a custom message.",props:{message:{type:{name:"string"},required:!1,description:"Message to display",defaultValue:{value:"'World'",computed:!1}}},code:"import React from 'react';\r\nimport PropTypes from 'prop-types';\r\n\r\n/** A super lame component that says Hello with a custom message. */\r\nconst HelloWorld = ({ message }) => {\r\n  return <div>Hello {message}</div>;\r\n};\r\n\r\nHelloWorld.propTypes = {\r\n  /** Message to display */\r\n\r\n  message: PropTypes.string,\r\n};\r\n\r\nHelloWorld.defaultProps = {\r\n  message: 'World',\r\n};\r\n\r\nexport default HelloWorld;\r\n",examples:[{name:"ExampleHelloWorld",description:"Custom message",code:"import React from 'react';\r\nimport HelloWorld from 'ps-react/HelloWorld';\r\n\r\n/** Custom message */\r\nexport default function ExampleHelloWorld() {\r\n  return <HelloWorld message=\"AE2S viewers!\" />;\r\n}\r\n"}]},{name:"Label",description:"Label with required field display, htmlFor, and block styling",props:{htmlFor:{type:{name:"string"},required:!0,description:"HTML ID for associated input"},label:{type:{name:"string"},required:!0,description:"Label text"},required:{type:{name:"bool"},required:!1,description:"Display asterisk after label if true"}},code:"import React from 'react';\r\nimport PropTypes from 'prop-types';\r\n\r\n/** Label with required field display, htmlFor, and block styling */\r\nfunction Label({ htmlFor, label, required }) {\r\n  return (\r\n    <label style={{ display: 'block' }} htmlFor={htmlFor}>\r\n      {label} {required && <span style={{ color: 'red' }}> *</span>}\r\n    </label>\r\n  );\r\n}\r\n\r\nLabel.propTypes = {\r\n  /** HTML ID for associated input */\r\n  htmlFor: PropTypes.string.isRequired,\r\n\r\n  /** Label text */\r\n  label: PropTypes.string.isRequired,\r\n\r\n  /** Display asterisk after label if true */\r\n  required: PropTypes.bool,\r\n};\r\n\r\nexport default Label;\r\n",examples:[{name:"ExampleOptional",description:"Optional label",code:"import React from 'react';\r\nimport Label from 'ps-react/Label';\r\n\r\n/** Optional label */\r\nexport default function ExampleOptional() {\r\n  return <Label htmlFor=\"test\" label=\"test\" />;\r\n}\r\n"},{name:"ExampleRequired",description:"Optional label",code:"import React from 'react';\r\nimport Label from 'ps-react/Label';\r\n\r\n/** Optional label */\r\nexport default function ExampleOptional() {\r\n  return <Label htmlFor=\"test\" label=\"test\" required />;\r\n}\r\n"}]},{name:"PasswordInput",description:"Password input with integrated label, quality tips, and show password toggle.",props:{htmlId:{type:{name:"string"},required:!0,description:"Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing."},name:{type:{name:"string"},required:!0,description:"Input name. Recommend setting this to match object's property so a single change handler can be used by convention."},value:{type:{name:"any"},required:!1,description:"Password value"},label:{type:{name:"string"},required:!1,description:"Input label",defaultValue:{value:"'Password'",computed:!1}},onChange:{type:{name:"func"},required:!0,description:"Function called when password input value changes"},maxLength:{type:{name:"number"},required:!1,description:"Max password length accepted",defaultValue:{value:"50",computed:!1}},placeholder:{type:{name:"string"},required:!1,description:"Placeholder displayed when no password is entered"},showVisibilityToggle:{type:{name:"bool"},required:!1,description:"Set to true to show the toggle for displaying the currently entered password",defaultValue:{value:"false",computed:!1}},quality:{type:{name:"number"},required:!1,description:"Display password quality visually via ProgressBar, accepts a number between 0 and 100"},error:{type:{name:"string"},required:!1,description:"Validation error to display"}},code:"import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport ProgressBar from '../ProgressBar';\r\nimport EyeIcon from '../EyeIcon';\r\nimport TextInput from '../TextInput';\r\n\r\n/** Password input with integrated label, quality tips, and show password toggle. */\r\nclass PasswordInput extends React.Component {\r\n  constructor(props) {\r\n    super(props);\r\n    this.state = {\r\n      showPassword: false,\r\n    };\r\n  }\r\n\r\n  toggleShowPassword = (event) => {\r\n    this.setState((prevState) => {\r\n      return { showPassword: !prevState.showPassword };\r\n    });\r\n    if (event) event.preventDefault();\r\n  };\r\n\r\n  render() {\r\n    const {\r\n      htmlId,\r\n      value,\r\n      label,\r\n      error,\r\n      onChange,\r\n      placeholder,\r\n      maxLength,\r\n      showVisibilityToggle,\r\n      quality,\r\n      ...props\r\n    } = this.props;\r\n    const { showPassword } = this.state;\r\n\r\n    return (\r\n      <TextInput\r\n        htmlId={htmlId}\r\n        label={label}\r\n        placeholder={placeholder}\r\n        type={showPassword ? 'text' : 'password'}\r\n        onChange={onChange}\r\n        value={value}\r\n        maxLength={maxLength}\r\n        error={error}\r\n        required\r\n        {...props}\r\n      >\r\n        {showVisibilityToggle && (\r\n          <a\r\n            href=\"\"\r\n            onClick={this.toggleShowPassword}\r\n            style={{ marginLeft: 5 }}\r\n          >\r\n            <EyeIcon />\r\n          </a>\r\n        )}\r\n        {value.length > 0 && quality && (\r\n          <ProgressBar percent={quality} width={130} />\r\n        )}\r\n      </TextInput>\r\n    );\r\n  }\r\n}\r\n\r\nPasswordInput.propTypes = {\r\n  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */\r\n  htmlId: PropTypes.string.isRequired,\r\n\r\n  /** Input name. Recommend setting this to match object's property so a single change handler can be used by convention.*/\r\n  name: PropTypes.string.isRequired,\r\n\r\n  /** Password value */\r\n  value: PropTypes.any,\r\n\r\n  /** Input label */\r\n  label: PropTypes.string,\r\n\r\n  /** Function called when password input value changes */\r\n  onChange: PropTypes.func.isRequired,\r\n\r\n  /** Max password length accepted */\r\n  maxLength: PropTypes.number,\r\n\r\n  /** Placeholder displayed when no password is entered */\r\n  placeholder: PropTypes.string,\r\n\r\n  /** Set to true to show the toggle for displaying the currently entered password */\r\n  showVisibilityToggle: PropTypes.bool,\r\n\r\n  /** Display password quality visually via ProgressBar, accepts a number between 0 and 100 */\r\n  quality: PropTypes.number,\r\n\r\n  /** Validation error to display */\r\n  error: PropTypes.string,\r\n};\r\n\r\nPasswordInput.defaultProps = {\r\n  maxLength: 50,\r\n  showVisibilityToggle: false,\r\n  label: 'Password',\r\n};\r\n\r\nexport default PasswordInput;\r\n",examples:[{name:"ExampleAllFeatures",description:"All features enabled",code:"import React from 'react';\r\nimport PasswordInput from 'ps-react/PasswordInput';\r\n\r\n/** All features enabled */\r\nclass ExampleAllFeatures extends React.Component {\r\n  constructor(props) {\r\n    super(props);\r\n\r\n    this.state = {\r\n      password: '',\r\n    };\r\n  }\r\n\r\n  getQuality() {\r\n    const length = this.state.password.length;\r\n    return length > 10 ? 100 : length * 10;\r\n  }\r\n\r\n  render() {\r\n    return (\r\n      <div>\r\n        <PasswordInput\r\n          htmlId=\"password-input-example-all-features\"\r\n          name=\"password\"\r\n          onChange={(event) => this.setState({ password: event.target.value })}\r\n          value={this.state.password}\r\n          minLength={8}\r\n          placeholder=\"Enter password\"\r\n          showVisibilityToggle\r\n          quality={this.getQuality()}\r\n          {...this.props}\r\n        />\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\nexport default ExampleAllFeatures;\r\n"}]},{name:"ProgressBar",description:"",props:{percent:{type:{name:"number"},required:!0,description:"Percent of progress completed"},width:{type:{name:"number"},required:!0,description:"Bar width"},height:{type:{name:"number"},required:!1,description:"Bar height",defaultValue:{value:"5",computed:!1}}},code:"import React from 'react';\r\nimport PropTypes from 'prop-types';\r\n\r\nclass ProgressBar extends React.Component {\r\n  getColor = (percent) => {\r\n    if (this.props.percent === 100) return 'green';\r\n    return this.props.percent > 50 ? 'lightgreen' : 'red';\r\n  };\r\n\r\n  getWidthAsPercentOfTotalWidth = () => {\r\n    return parseInt(this.props.width * (this.props.percent / 100), 10);\r\n  };\r\n\r\n  render() {\r\n    const { percent, width, height } = this.props;\r\n    return (\r\n      <div style={{ border: 'solid 1px lightgray', width: width }}>\r\n        <div\r\n          style={{\r\n            width: this.getWidthAsPercentOfTotalWidth(),\r\n            height,\r\n            backgroundColor: this.getColor(percent),\r\n          }}\r\n        />\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\nProgressBar.propTypes = {\r\n  /** Percent of progress completed */\r\n  percent: PropTypes.number.isRequired,\r\n\r\n  /** Bar width */\r\n  width: PropTypes.number.isRequired,\r\n\r\n  /** Bar height */\r\n  height: PropTypes.number,\r\n};\r\n\r\nProgressBar.defaultProps = {\r\n  height: 5,\r\n};\r\n\r\nexport default ProgressBar;\r\n",examples:[{name:"Example100Percent",description:"100% progress and height 20px",code:"import React from 'react';\r\nimport ProgressBar from 'ps-react/ProgressBar';\r\n\r\n/** 100% progress and height 20px */\r\nexport default function Example100Percent() {\r\n  return <ProgressBar percent={100} width={150} height={20} />;\r\n}\r\n"},{name:"Example10Percent",description:"10% progress",code:"import React from 'react';\r\nimport ProgressBar from 'ps-react/ProgressBar';\r\n\r\n/** 10% progress */\r\nexport default function Example10Percent() {\r\n  return <ProgressBar percent={10} width={150} />;\r\n}\r\n"},{name:"Example70Percent",description:"70% progress",code:"import React from 'react';\r\nimport ProgressBar from 'ps-react/ProgressBar';\r\n\r\n/** 70% progress */\r\nexport default function Example70Percent() {\r\n  return <ProgressBar percent={70} width={150} />;\r\n}\r\n"}]},{name:"RegistrationForm",description:"Registration form with built-in validation.",props:{confirmationMessage:{type:{name:"string"},required:!1,description:"Message displayed upon successful submission",defaultValue:{value:"'Thanks for registering!'",computed:!1}},onSubmit:{type:{name:"func"},required:!0,description:"Called when form is submitted"},minPasswordLength:{type:{name:"number"},required:!1,description:"Minimum password length",defaultValue:{value:"8",computed:!1}}},code:"import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport TextInput from '../TextInput';\r\nimport PasswordInput from '../PasswordInput';\r\n\r\n/** Registration form with built-in validation. */\r\nclass RegistrationForm extends React.Component {\r\n  constructor(props) {\r\n    super(props);\r\n\r\n    this.state = {\r\n      user: {\r\n        email: '',\r\n        password: '',\r\n      },\r\n      errors: {},\r\n      submitted: false,\r\n    };\r\n  }\r\n\r\n  onChange = (event) => {\r\n    const user = this.state.user;\r\n    user[event.target.name] = event.target.value;\r\n    this.setState({ user });\r\n  };\r\n\r\n  // Returns a number from 0 to 100 that represents password quality.\r\n  // For simplicity, just returning % of min length entered.\r\n  // Could enhance with checks for number, special char, unique characters, etc.\r\n  passwordQuality(password) {\r\n    if (!password) return null;\r\n    if (password.length >= this.props.minPasswordLength) return 100;\r\n    const percentOfMinLength = parseInt(\r\n      (password.length / this.props.minPasswordLength) * 100,\r\n      10\r\n    );\r\n    return percentOfMinLength;\r\n  }\r\n\r\n  validate({ email, password }) {\r\n    const errors = {};\r\n    const { minPasswordLength } = this.props;\r\n\r\n    if (!email) errors.email = 'Email required.';\r\n    if (password.length < minPasswordLength)\r\n      errors.password = `Password must be at least ${minPasswordLength} characters.`;\r\n\r\n    this.setState({ errors });\r\n    const formIsValid = Object.getOwnPropertyNames(errors).length === 0;\r\n    return formIsValid;\r\n  }\r\n\r\n  onSubmit = () => {\r\n    const { user } = this.state;\r\n    const formIsValid = this.validate(user);\r\n    if (formIsValid) {\r\n      this.props.onSubmit(user);\r\n      this.setState({ submitted: true });\r\n    }\r\n  };\r\n\r\n  render() {\r\n    const { errors, submitted } = this.state;\r\n    const { email, password } = this.state.user;\r\n\r\n    return submitted ? (\r\n      <h2>{this.props.confirmationMessage}</h2>\r\n    ) : (\r\n      <div>\r\n        <TextInput\r\n          htmlId=\"registration-form-email\"\r\n          name=\"email\"\r\n          onChange={this.onChange}\r\n          label=\"Email\"\r\n          value={email}\r\n          error={errors.email}\r\n          required\r\n        />\r\n\r\n        <PasswordInput\r\n          htmlId=\"registration-form-password\"\r\n          name=\"password\"\r\n          value={password}\r\n          onChange={this.onChange}\r\n          quality={this.passwordQuality(password)}\r\n          showVisibilityToggle\r\n          maxLength={50}\r\n          error={errors.password}\r\n        />\r\n\r\n        <input type=\"submit\" value=\"Register\" onClick={this.onSubmit} />\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\nRegistrationForm.propTypes = {\r\n  /** Message displayed upon successful submission */\r\n  confirmationMessage: PropTypes.string,\r\n\r\n  /** Called when form is submitted */\r\n  onSubmit: PropTypes.func.isRequired,\r\n\r\n  /** Minimum password length */\r\n  minPasswordLength: PropTypes.number,\r\n};\r\n\r\nRegistrationForm.defaultProps = {\r\n  confirmationMessage: 'Thanks for registering!',\r\n  minPasswordLength: 8,\r\n};\r\n\r\nexport default RegistrationForm;\r\n",examples:[{name:"ExampleRegistrationForm",description:"",code:"import React from 'react';\r\nimport RegistrationForm from 'ps-react/RegistrationForm';\r\n\r\nexport default class ExampleRegistrationForm extends React.Component {\r\n  onSubmit = (user) => {\r\n    console.log(user);\r\n  };\r\n\r\n  render() {\r\n    return <RegistrationForm onSubmit={this.onSubmit} />;\r\n  }\r\n}\r\n"}]},{name:"TextInput",description:"Text input with integrated label to enforce consistency in layout, error display, label placement, and required field marker.",props:{htmlId:{type:{name:"string"},required:!0,description:"Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing."},name:{type:{name:"string"},required:!0,description:"Input name. Recommend setting this to match object's property so a single change handler can be used."},label:{type:{name:"string"},required:!0,description:"Input label"},type:{type:{name:"enum",value:[{value:"'text'",computed:!1},{value:"'number'",computed:!1},{value:"'password'",computed:!1}]},required:!1,description:"Input type",defaultValue:{value:"'text'",computed:!1}},required:{type:{name:"bool"},required:!1,description:"Mark label with asterisk if set to true",defaultValue:{value:"false",computed:!1}},onChange:{type:{name:"func"},required:!0,description:"Function to call onChange"},placeholder:{type:{name:"string"},required:!1,description:"Placeholder to display when empty"},value:{type:{name:"any"},required:!1,description:"Value"},error:{type:{name:"string"},required:!1,description:"String to display when error occurs"},children:{type:{name:"node"},required:!1,description:"Child component to display next to the input"}},code:"import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport Label from '../Label';\r\n\r\n/** Text input with integrated label to enforce consistency in layout, error display, label placement, and required field marker. */\r\nfunction TextInput({\r\n  htmlId,\r\n  name,\r\n  label,\r\n  type = 'text',\r\n  required = false,\r\n  onChange,\r\n  placeholder,\r\n  value,\r\n  error,\r\n  children,\r\n  ...props\r\n}) {\r\n  return (\r\n    <div style={{ marginBottom: 16 }}>\r\n      <Label htmlFor={htmlId} label={label} required={required} />\r\n      <input\r\n        id={htmlId}\r\n        type={type}\r\n        name={name}\r\n        placeholder={placeholder}\r\n        value={value}\r\n        onChange={onChange}\r\n        style={error && { border: 'solid 1px red' }}\r\n        {...props}\r\n      />\r\n      {children}\r\n      {error && (\r\n        <div className=\"error\" style={{ color: 'red' }}>\r\n          {error}\r\n        </div>\r\n      )}\r\n    </div>\r\n  );\r\n}\r\n\r\nTextInput.propTypes = {\r\n  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */\r\n  htmlId: PropTypes.string.isRequired,\r\n\r\n  /** Input name. Recommend setting this to match object's property so a single change handler can be used. */\r\n  name: PropTypes.string.isRequired,\r\n\r\n  /** Input label */\r\n  label: PropTypes.string.isRequired,\r\n\r\n  /** Input type */\r\n  type: PropTypes.oneOf(['text', 'number', 'password']),\r\n\r\n  /** Mark label with asterisk if set to true */\r\n  required: PropTypes.bool,\r\n\r\n  /** Function to call onChange */\r\n  onChange: PropTypes.func.isRequired,\r\n\r\n  /** Placeholder to display when empty */\r\n  placeholder: PropTypes.string,\r\n\r\n  /** Value */\r\n  value: PropTypes.any,\r\n\r\n  /** String to display when error occurs */\r\n  error: PropTypes.string,\r\n\r\n  /** Child component to display next to the input */\r\n  children: PropTypes.node,\r\n};\r\n\r\nexport default TextInput;\r\n",examples:[{name:"ExampleError",description:"Required TextBox with error",code:'import React from \'react\';\r\nimport TextInput from \'ps-react/TextInput\';\r\n\r\n/** Required TextBox with error */\r\nexport default class ExampleError extends React.Component {\r\n  render() {\r\n    return (\r\n      <TextInput\r\n        htmlId="example-optional"\r\n        label="First Name"\r\n        name="firstname"\r\n        onChange={() => {}}\r\n        required\r\n        error="First name is required."\r\n      />\r\n    );\r\n  }\r\n}\r\n'},{name:"ExampleOptional",description:"Optional TextBox",code:'import React from \'react\';\r\nimport TextInput from \'ps-react/TextInput\';\r\n\r\n/** Optional TextBox */\r\nexport default class ExampleOptional extends React.Component {\r\n  render() {\r\n    return (\r\n      <TextInput\r\n        htmlId="example-optional"\r\n        label="First Name"\r\n        name="firstname"\r\n        onChange={() => {}}\r\n      />\r\n    );\r\n  }\r\n}\r\n'}]}]},17:function(e,r,n){"use strict";n.r(r),n.d(r,"default",(function(){return s}));var t=n(0),a=n.n(t),o=n(8);function s(){return a.a.createElement(o.a,null)}},18:function(e,r,n){"use strict";n.r(r),n.d(r,"default",(function(){return s}));var t=n(0),a=n.n(t),o=n(7);function s(){return a.a.createElement(o.a,{htmlFor:"test",label:"test"})}},19:function(e,r,n){"use strict";n.r(r),n.d(r,"default",(function(){return s}));var t=n(0),a=n.n(t),o=n(7);function s(){return a.a.createElement(o.a,{htmlFor:"test",label:"test",required:!0})}},20:function(e,r,n){"use strict";n.r(r);var t=n(1),a=n(2),o=n(4),s=n(3),i=n(0),l=n.n(i),p=n(9),u=function(e){Object(o.a)(n,e);var r=Object(s.a)(n);function n(e){var a;return Object(t.a)(this,n),(a=r.call(this,e)).state={password:""},a}return Object(a.a)(n,[{key:"getQuality",value:function(){var e=this.state.password.length;return e>10?100:10*e}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(p.a,Object.assign({htmlId:"password-input-example-all-features",name:"password",onChange:function(r){return e.setState({password:r.target.value})},value:this.state.password,minLength:8,placeholder:"Enter password",showVisibilityToggle:!0,quality:this.getQuality()},this.props)))}}]),n}(l.a.Component);r.default=u},21:function(e,r,n){"use strict";n.r(r),n.d(r,"default",(function(){return s}));var t=n(0),a=n.n(t),o=n(5);function s(){return a.a.createElement(o.a,{percent:100,width:150,height:20})}},22:function(e,r,n){"use strict";n.r(r),n.d(r,"default",(function(){return s}));var t=n(0),a=n.n(t),o=n(5);function s(){return a.a.createElement(o.a,{percent:10,width:150})}},23:function(e,r,n){"use strict";n.r(r),n.d(r,"default",(function(){return s}));var t=n(0),a=n.n(t),o=n(5);function s(){return a.a.createElement(o.a,{percent:70,width:150})}},24:function(e,r,n){"use strict";n.r(r),n.d(r,"default",(function(){return u}));var t=n(1),a=n(2),o=n(4),s=n(3),i=n(0),l=n.n(i),p=n(6),u=function(e){Object(o.a)(n,e);var r=Object(s.a)(n);function n(){return Object(t.a)(this,n),r.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return l.a.createElement(p.a,{htmlId:"example-optional",label:"First Name",name:"firstname",onChange:function(){},required:!0,error:"First name is required."})}}]),n}(l.a.Component)},242:function(e,r,n){var t={"./EyeIcon/Example":17,"./EyeIcon/Example.js":17,"./HelloWorld/ExampleHelloWorld":26,"./HelloWorld/ExampleHelloWorld.js":26,"./Label/ExampleOptional":18,"./Label/ExampleOptional.js":18,"./Label/ExampleRequired":19,"./Label/ExampleRequired.js":19,"./PasswordInput/ExampleAllFeatures":20,"./PasswordInput/ExampleAllFeatures.js":20,"./ProgressBar/Example100Percent":21,"./ProgressBar/Example100Percent.js":21,"./ProgressBar/Example10Percent":22,"./ProgressBar/Example10Percent.js":22,"./ProgressBar/Example70Percent":23,"./ProgressBar/Example70Percent.js":23,"./RegistrationForm/ExampleRegistrationForm":27,"./RegistrationForm/ExampleRegistrationForm.js":27,"./TextInput/ExampleError":24,"./TextInput/ExampleError.js":24,"./TextInput/ExampleOptional":25,"./TextInput/ExampleOptional.js":25};function a(e){var r=o(e);return n(r)}function o(e){if(!n.o(t,e)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t[e]}a.keys=function(){return Object.keys(t)},a.resolve=o,e.exports=a,a.id=242},244:function(e,r,n){"use strict";n.r(r);var t=n(0),a=n.n(t),o=n(28),s=n.n(o),i=(n(34),n(1)),l=n(2),p=n(4),u=n(3),c=function(e){var r=e.components;return a.a.createElement("ul",{className:"navigation"},r.map((function(e){return a.a.createElement("li",{key:e},a.a.createElement("a",{href:"#".concat(e)},e))})))},d=n(13),m=n.n(d),h=n(12),g=n.n(h),f=function(e){Object(p.a)(n,e);var r=Object(u.a)(n);function n(){return Object(i.a)(this,n),r.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){m.a.registerLanguage("javascript",g.a),m.a.highlightBlock(this.element)}},{key:"render",value:function(){var e=this;return a.a.createElement("pre",{ref:function(r){e.element=r}},a.a.createElement("code",null,this.props.children))}}]),n}(a.a.Component),y=function(e){Object(p.a)(t,e);var r=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=r.call(this,e)).toggleCode=function(e){e.preventDefault(),n.setState((function(e){return{showCode:!e.showCode}}))},n.state={showCode:!1},n}return Object(l.a)(t,[{key:"render",value:function(){var e=this.state.showCode,r=this.props.example,t=r.code,o=r.description,s=r.name,i=n(242)("./".concat(this.props.componentName,"/").concat(s)).default;return a.a.createElement("div",{className:"example"},o&&a.a.createElement("h4",null,o),a.a.createElement(i,null),a.a.createElement("p",null,a.a.createElement("a",{href:"",onClick:this.toggleCode},e?"Hide":"Show"," Code")),e&&a.a.createElement(f,null,t))}}]),t}(a.a.Component),b=function(e){var r=e.props;return a.a.createElement("table",{className:"props"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Name"),a.a.createElement("th",null,"Description"),a.a.createElement("th",null,"Type"),a.a.createElement("th",null,"Default"),a.a.createElement("th",null,"Required"))),a.a.createElement("tbody",null,Object.keys(r).map((function(e){return a.a.createElement("tr",{key:e},a.a.createElement("td",null,e),a.a.createElement("td",null,r[e].description),a.a.createElement("td",null,r[e].type.name),a.a.createElement("td",null,r[e].defaultValue&&r[e].defaultValue.value),a.a.createElement("td",null,r[e].required&&"X"))}))))},w=function(e){var r=e.component,n=r.name,t=r.description,o=r.props,s=r.examples;return a.a.createElement("div",{className:"componentpage"},a.a.createElement("h2",null,n),a.a.createElement("p",null,t),a.a.createElement("h3",null,"Example",s.length>1&&"s"),s.length>0?s.map((function(e){return a.a.createElement(y,{key:e.code,example:e,componentName:n})})):"No examples exist.",a.a.createElement("h3",null,"Props"),o?a.a.createElement(b,{props:o}):"This component accepts no props.")},v=n(11),x=n.n(v),E=function(e){Object(p.a)(n,e);var r=Object(u.a)(n);function n(e){var t;return Object(i.a)(this,n),(t=r.call(this,e)).state={route:window.location.hash.substr(1)},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("hashchange",(function(){e.setState({route:window.location.hash.substr(1)})}))}},{key:"render",value:function(){var e=this.state.route,r=e?x.a.filter((function(r){return r.name===e}))[0]:x.a[0];return a.a.createElement("div",null,a.a.createElement(c,{components:x.a.map((function(e){return e.name}))}),a.a.createElement(w,{component:r}))}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(243);s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},25:function(e,r,n){"use strict";n.r(r),n.d(r,"default",(function(){return u}));var t=n(1),a=n(2),o=n(4),s=n(3),i=n(0),l=n.n(i),p=n(6),u=function(e){Object(o.a)(n,e);var r=Object(s.a)(n);function n(){return Object(t.a)(this,n),r.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return l.a.createElement(p.a,{htmlId:"example-optional",label:"First Name",name:"firstname",onChange:function(){}})}}]),n}(l.a.Component)},26:function(e,r,n){"use strict";n.r(r),n.d(r,"default",(function(){return i}));var t=n(0),a=n.n(t),o=function(e){var r=e.message;return a.a.createElement("div",null,"Hello ",r)};o.defaultProps={message:"World"};var s=o;function i(){return a.a.createElement(s,{message:"AE2S viewers!"})}},27:function(e,r,n){"use strict";n.r(r),n.d(r,"default",(function(){return m}));var t=n(1),a=n(2),o=n(4),s=n(3),i=n(0),l=n.n(i),p=n(6),u=n(9),c=function(e){Object(o.a)(n,e);var r=Object(s.a)(n);function n(e){var a;return Object(t.a)(this,n),(a=r.call(this,e)).onChange=function(e){var r=a.state.user;r[e.target.name]=e.target.value,a.setState({user:r})},a.onSubmit=function(){var e=a.state.user;a.validate(e)&&(a.props.onSubmit(e),a.setState({submitted:!0}))},a.state={user:{email:"",password:""},errors:{},submitted:!1},a}return Object(a.a)(n,[{key:"passwordQuality",value:function(e){return e?e.length>=this.props.minPasswordLength?100:parseInt(e.length/this.props.minPasswordLength*100,10):null}},{key:"validate",value:function(e){var r=e.email,n=e.password,t={},a=this.props.minPasswordLength;return r||(t.email="Email required."),n.length<a&&(t.password="Password must be at least ".concat(a," characters.")),this.setState({errors:t}),0===Object.getOwnPropertyNames(t).length}},{key:"render",value:function(){var e=this.state,r=e.errors,n=e.submitted,t=this.state.user,a=t.email,o=t.password;return n?l.a.createElement("h2",null,this.props.confirmationMessage):l.a.createElement("div",null,l.a.createElement(p.a,{htmlId:"registration-form-email",name:"email",onChange:this.onChange,label:"Email",value:a,error:r.email,required:!0}),l.a.createElement(u.a,{htmlId:"registration-form-password",name:"password",value:o,onChange:this.onChange,quality:this.passwordQuality(o),showVisibilityToggle:!0,maxLength:50,error:r.password}),l.a.createElement("input",{type:"submit",value:"Register",onClick:this.onSubmit}))}}]),n}(l.a.Component);c.defaultProps={confirmationMessage:"Thanks for registering!",minPasswordLength:8};var d=c,m=function(e){Object(o.a)(n,e);var r=Object(s.a)(n);function n(){var e;Object(t.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=r.call.apply(r,[this].concat(o))).onSubmit=function(e){console.log(e)},e}return Object(a.a)(n,[{key:"render",value:function(){return l.a.createElement(d,{onSubmit:this.onSubmit})}}]),n}(l.a.Component)},29:function(e,r,n){e.exports=n(244)},34:function(e,r,n){},5:function(e,r,n){"use strict";n.d(r,"a",(function(){return u}));var t=n(1),a=n(2),o=n(4),s=n(3),i=n(0),l=n.n(i),p=function(e){Object(o.a)(n,e);var r=Object(s.a)(n);function n(){var e;Object(t.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=r.call.apply(r,[this].concat(o))).getColor=function(r){return 100===e.props.percent?"green":e.props.percent>50?"lightgreen":"red"},e.getWidthAsPercentOfTotalWidth=function(){return parseInt(e.props.width*(e.props.percent/100),10)},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this.props,r=e.percent,n=e.width,t=e.height;return l.a.createElement("div",{style:{border:"solid 1px lightgray",width:n}},l.a.createElement("div",{style:{width:this.getWidthAsPercentOfTotalWidth(),height:t,backgroundColor:this.getColor(r)}}))}}]),n}(l.a.Component);p.defaultProps={height:5};var u=p},6:function(e,r,n){"use strict";n.d(r,"a",(function(){return i}));var t=n(10),a=n(0),o=n.n(a),s=n(7);var i=function(e){var r=e.htmlId,n=e.name,a=e.label,i=e.type,l=void 0===i?"text":i,p=e.required,u=void 0!==p&&p,c=e.onChange,d=e.placeholder,m=e.value,h=e.error,g=e.children,f=Object(t.a)(e,["htmlId","name","label","type","required","onChange","placeholder","value","error","children"]);return o.a.createElement("div",{style:{marginBottom:16}},o.a.createElement(s.a,{htmlFor:r,label:a,required:u}),o.a.createElement("input",Object.assign({id:r,type:l,name:n,placeholder:d,value:m,onChange:c,style:h&&{border:"solid 1px red"}},f)),g,h&&o.a.createElement("div",{className:"error",style:{color:"red"}},h))}},7:function(e,r,n){"use strict";n.d(r,"a",(function(){return o}));var t=n(0),a=n.n(t);var o=function(e){var r=e.htmlFor,n=e.label,t=e.required;return a.a.createElement("label",{style:{display:"block"},htmlFor:r},n," ",t&&a.a.createElement("span",{style:{color:"red"}}," *"))}},8:function(e,r,n){"use strict";n.d(r,"a",(function(){return o}));var t=n(0),a=n.n(t);var o=function(){return a.a.createElement("svg",{width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22 22"},a.a.createElement("g",{transform:"matrix(.02146 0 0 .02146 1 1)",fill:"#4d4d4d"},a.a.createElement("path",{d:"m466.07 161.53c-205.6 0-382.8 121.2-464.2 296.1-2.5 5.3-2.5 11.5 0 16.9 81.4 174.9 258.6 296.1 464.2 296.1 205.6 0 382.8-121.2 464.2-296.1 2.5-5.3 2.5-11.5 0-16.9-81.4-174.9-258.6-296.1-464.2-296.1m0 514.7c-116.1 0-210.1-94.1-210.1-210.1 0-116.1 94.1-210.1 210.1-210.1 116.1 0 210.1 94.1 210.1 210.1 0 116-94.1 210.1-210.1 210.1"}),a.a.createElement("circle",{cx:"466.08",cy:"466.02",r:"134.5"})))}},9:function(e,r,n){"use strict";n.d(r,"a",(function(){return h}));var t=n(10),a=n(1),o=n(2),s=n(4),i=n(3),l=n(0),p=n.n(l),u=n(5),c=n(8),d=n(6),m=function(e){Object(s.a)(n,e);var r=Object(i.a)(n);function n(e){var t;return Object(a.a)(this,n),(t=r.call(this,e)).toggleShowPassword=function(e){t.setState((function(e){return{showPassword:!e.showPassword}})),e&&e.preventDefault()},t.state={showPassword:!1},t}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,r=e.htmlId,n=e.value,a=e.label,o=e.error,s=e.onChange,i=e.placeholder,l=e.maxLength,m=e.showVisibilityToggle,h=e.quality,g=Object(t.a)(e,["htmlId","value","label","error","onChange","placeholder","maxLength","showVisibilityToggle","quality"]),f=this.state.showPassword;return p.a.createElement(d.a,Object.assign({htmlId:r,label:a,placeholder:i,type:f?"text":"password",onChange:s,value:n,maxLength:l,error:o,required:!0},g),m&&p.a.createElement("a",{href:"",onClick:this.toggleShowPassword,style:{marginLeft:5}},p.a.createElement(c.a,null)),n.length>0&&h&&p.a.createElement(u.a,{percent:h,width:130}))}}]),n}(p.a.Component);m.defaultProps={maxLength:50,showVisibilityToggle:!1,label:"Password"};var h=m}},[[29,1,2]]]);
//# sourceMappingURL=main.5db4463b.chunk.js.map