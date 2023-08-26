import { defaultPrompt } from "../lib";

const environment = {
  API_URL: "https://api.openai.com/v1/chat/completions",
  API_KEY: import.meta.env.VITE_API_KEY,
  MODEL: "gpt-3.5-turbo",
  MODEL_PROMPT: "You a bot who can only do chat",
};

export const postData = async (formData: any) => {
  let myPrompt = defaultPrompt;

  Object.keys(formData).map((key) => {
    myPrompt = myPrompt.replace(
      `<${key}>`,
      key === "otherDetails" && formData[key]
        ? `\ndetail: ${formData[key]}\n`
        : formData[key]
    );
  });
  const result = await processMsgToChatGTP(myPrompt);
  return result;
};

export const processMsgToChatGTP = async (userPrompt: string) => {
  try {
    const messages = [
      { role: "system", content: environment.MODEL_PROMPT },
      { role: "user", content: userPrompt },
    ];
    const apiReqBody = { model: environment.MODEL, messages };

    const res = await fetch(environment.API_URL, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + environment.API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiReqBody),
    });

    const data: any = await res.json();
    const { content } = data.choices[0].message;
    return { status: 200, content };
  } catch (err) {
    console.log("processMsgToChatGTP err : ", err);
    return { status: 500, content: "Internal server error." };
  }
};


export const checkValidation = (formData: any) => {
  let isError = false;
  Object.keys(formData).map((key) => {
    if (formData[key] === "" && !['isLoading', 'otherDetails', 'isGenerated', 'emailContent'].includes(key)) {
      isError = true;
    }
  });
  return isError;
}

export const replaceEnter = (inputString: string, targetWord: string, replacement: string) => {
  // Create a regular expression with the 'g' flag for global replacement
  const regex = new RegExp(targetWord, 'g');
  
  // Use the replace method with the regular expression
  const replacedString = inputString.replace(regex, replacement);
  
  return replacedString;
}