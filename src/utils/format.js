import moment from "moment";
import { DATE_FORMAT } from "../constants/format";

// ---- Format number to display currency ----//
export const formatCurrency = (data, type = "vi-VN") => {
  if (!data) return 0;
  return data.toLocaleString(type);
};

// ---- Format date to display with format ----//
export const formatDate = (date, format = DATE_FORMAT) => {
  if (!!!date) return "";
  return moment(date).format(format);
};

// --- Transform 0 - 1 to percent 100%
export const transformNumberToPercent = (number) => {
  if (!number) return 0;
  return number * 100;
};

//Remove Accents
export const removeAccents = (str) => {
  var from =
      "àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷ",
    to =
      "aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(RegExp(from[i], "gi"), to[i]);
  }

  str = str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\-]/g, "-")
    .replace(/-+/g, "-");

  return str;
};

export const getImageUrl = (data) =>
  `https://cfdshop.hn.ss.bfcplatform.vn/images/product/${data}`;
