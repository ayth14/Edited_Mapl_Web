import moment from "moment";

export function isValidName(userName) {
  var un = /^[a-zA-Z]([._-](?![._-])|[a-zA-Z]){2,18}[a-zA-Z]$/;
  return un.test(userName);
}

export function isValidEmail(email) {
  var em = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return em.test(String(email).toLowerCase());
}

export function isValidPassword(password) {
  var pw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&])[A-Za-z\d#@$!%*?&]{8,}$/;
  return pw.test(password);
}

export function isValidNumber(phone_num) {
  var pn = /^[0-9]{8,13}$/;
  return pn.test(phone_num);
}

export function isValidNo(number) {
  var na = /^[0-9]{1,2}$/;
  return na.test(number);
}

export function isValidPostcode(number) {
  var pc = /^[0-9]{1,4}$/;
  return pc.test(number);
}

export function isValidUrl(website_url) {
  var ur = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
  return ur.test(website_url);
}

export function isValidUserId(uid) {
  var ui = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,32})/;
  return ui.test(uid);
}

export const isValidDate = (date) => {
  return moment(date).isValid();
};

export const isValidDOB = (date, min = 18, max = 100) => {
  let result = null;
  console.log("age:", moment().diff(date, "years"));
  if (!moment(date).isValid()) {
    result = "Please provide a valid Date";
  } else if (moment().diff(date, "years") < min) {
    result = `Your age should be minimum ${min} years`;
  } else if (moment().diff(date, "years") > max) {
    result = `Your age shouldm\'t be more then ${max} years`;
  }
  return result;
};

export function isEmpty(thing) {
  let empty = false;
  switch (typeof thing) {
    case "undefined":
      empty = true;
      break;
    case "string":
      if (thing.trim().length === 0) {
        empty = true;
      }
      break;
    case "object":
      if (thing == null) {
        empty = true;
      } else if (thing.keys(thing).length === 0) {
        empty = true;
      }
      break;
    default:
      empty = true;
  }
  return empty;
}

export const isLength = (str, options) => {
  if (isEmpty(options)) {
    throw new Error("Who will provide the options you?");
  }
  let isValid = true;
  if (["string", "number"].indexOf(typeof str) === -1) {
    isValid = false;
  } else {
    // Convert to string incase it's number
    let len = 0;
    if (options.trim) {
      len = str.toString().trim().length;
    } else {
      len = str.toString().length;
    }
    if (typeof options.lt === "number" && len >= options.lt) {
      isValid = false;
    } else if (typeof options.lte === "number" && len > options.lte) {
      isValid = false;
    } else if (typeof options.gt === "number" && len <= options.gt) {
      isValid = false;
    } else if (typeof options.gte === "number" && len < options.gte) {
      isValid = false;
    }
  }
  return isValid;
};

export const isContainWhiteSpace = (str) => {
  if (typeof str === "string" || typeof str === "number") {
    return str.toString().trim().indexOf(" ") !== -1;
  } else {
    return false;
  }
};

export const isValidPercentage = (percentage) => {
  // percentage = parseFloat(percentage);
  if (isNaN(percentage) || percentage < 0 || percentage > 100) {
    return false;
  } else {
    return true;
  }
};

export const numberOnly = (numberString) => {
  if (isNaN(numberString)) {
    return false;
  } else {
    return true;
  }
};

export const isMoreThenZero = (numberString) => {
  numberString = parseFloat(numberString);
  if (numberString > 0) {
    return true;
  } else {
    return false;
  }
};

export const checkArrayLength = (thing) => {
  if (typeof thing === "undefined") {
    return true;
  } else if (thing.length > 0) {
    return false;
  } else {
    return true;
  }
};