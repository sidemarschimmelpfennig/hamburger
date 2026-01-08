import axios from "axios";
import type { BurgersModel } from "../models/BurgersModel";


const api = axios.create({
  baseURL: "http://localhost:3000", // backend
});

export const burgerService = {
  async getAll(): Promise<BurgersModel[]> {
    const response = await api.get<BurgersModel[]>("/users");
    return response.data;
  },

  async create(burger: Omit<BurgersModel, "id">): Promise<BurgersModel> {
    const response = await api.post<BurgersModel>("/users", burger);
    return response.data;
  },

  async remove(id: number): Promise<void> {
    await api.delete(`/users/${id}`);
  },
};
