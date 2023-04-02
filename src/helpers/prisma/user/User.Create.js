import prisma from "../PrismaConnecrtion";

const CreateUser = (UserData) => {
    prisma.user.create({
    data: {
      userEmail: UserData.email,
      userPhone: UserData.phone,
      userPassword: UserData.password,
    },
  });
};

export default CreateUser;
