import { useEffect, useMemo, useState } from "react";
import userService from "../services/userService";
import toast from "react-hot-toast";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const search = searchTerm.toLowerCase();

      const matchesSearch =
        user.firstName.toLowerCase().includes(search) ||
        user.lastName.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search) ||
        user.department.toLowerCase().includes(search);

      const matchesFilters =
        user.firstName
          .toLowerCase()
          .includes(filters.firstName.toLowerCase()) &&
        user.lastName
          .toLowerCase()
          .includes(filters.lastName.toLowerCase()) &&
        user.email
          .toLowerCase()
          .includes(filters.email.toLowerCase()) &&
        user.department
          .toLowerCase()
          .includes(filters.department.toLowerCase());

      return matchesSearch && matchesFilters;
    });
  }, [users, searchTerm, filters]);

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const data = await userService.getAllUsers();

      const formattedUsers = data.map((user) => ({
        id: user.id,
        firstName: user.name.split(" ")[0],
        lastName: user.name.split(" ").slice(1).join(" "),
        email: user.email,
        department: "IT",
      }));

      setUsers(formattedUsers);
    } catch (err) {
      setError("Failed to fetch users.");
      toast.error("Unable to fetch users");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const addUser = async (user) => {
    try {
      const response = await userService.addUser(user);

      const newUser = {
        id: users.length + 1,
        ...response,
      };

      setUsers((prevUsers) => [newUser, ...prevUsers]);
      toast.success("User added successfully");
    } catch (err) {
      console.error(err);
      setError("Failed to add user.");
      toast.error("Failed to add user");
    }
  };

  const editUser = async (id, updatedUser) => {
    try {
      // Only call API for users that exist on the server
      if (id <= 10) {
        await userService.editUser(id, updatedUser);
      }

      // Always update local state
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === id
            ? { ...user, ...updatedUser }
            : user
        )
      );

      toast.success("User updated successfully");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update user.");
    }
  };

  const deleteUser = async (id) => {
    try {
      if (id <= 10) {
        await userService.removeUser(id);
      }

      setUsers((prevUsers) =>
        prevUsers.filter((user) => user.id !== id)
      );

      toast.success("User deleted successfully");
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete user.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    users: filteredUsers,
    totalUsers: users.length,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    filters,
    setFilters,
    addUser,
    editUser,
    deleteUser,
    refetch: fetchUsers,
  };
};

export default useUsers;