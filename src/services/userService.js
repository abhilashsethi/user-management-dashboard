import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../api/user";

const userService = {
  async getAllUsers() {
    const response = await getUsers();
    return response.data;
  },

  async getUser(id) {
    const response = await getUserById(id);
    return response.data;
  },

  async addUser(user) {
    const response = await createUser(user);
    return response.data;
  },

  async editUser(id, user) {
    const response = await updateUser(id, user);
    return response.data;
  },

  async removeUser(id) {
    await deleteUser(id);
  },
};

export default userService;