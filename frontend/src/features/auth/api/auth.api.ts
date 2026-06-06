import { api } from "@/lib/api";

import {
  LoginRequest,
} from "../types/auth.type";

export async function login(
  payload: LoginRequest
) {
  const response =
    await api.post(
      "/auth/login",
      payload
    );

  return response.data;
}