import user from "../../models/user";

export const checkMailId = async (mail: String | undefined) => {
  try {
    console.log(mail);
    if (mail !== undefined) {
      const data = await user.find({ emailId: mail });
      console.log(data);
      if (data.length == 0) {
        return false;
      }
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};

export const checkPassword = async (email: String, password: String) => {
  try {
    const userData = await user.findOne({ emailId: email });
    if (userData && userData.password === password) {
      return true;
    }
    return false;
  } catch (err) {
    console.log(err);
  }
};
