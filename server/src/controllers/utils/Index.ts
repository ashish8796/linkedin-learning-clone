import user from "../../models/user";

export const checkMailId = async (mail: string) => {
  try {
    const data = await user.find({ emailId: mail });

    if (data.length == 0) {
      return false;
    }
    return true;
  } catch (err) {
    console.log(err);
  }
};
