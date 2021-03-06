import React, { useState, useEffect } from "react";
import axios from "axios";

import useDebounce from "./utils/Debounce";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");

  const debouncedText = useDebounce(text, 500);

  useEffect(() => {
    const doTranslation = async () => {
      try {
        const { data } = await axios.post(
          "https://translation.googleapis.com/language/translate/v2",
          {},
          {
            params: {
              q: debouncedText,
              target: language.value,
              key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
            },
          }
        );
        setTranslated(data.data.translations[0].translatedText);
      } catch (error) {
        setTranslated("Oop's unable to translate :( ");
      }
    };

    doTranslation();
  }, [language, debouncedText]);

  return (
    <div>
      <h1 className='ui header'>{translated}</h1>
    </div>
  );
};

export default Convert;
