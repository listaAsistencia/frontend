import { api } from "./api";

type GetRequestArgs = {
  route: string;
};

export const getRequest = async ({ route }: GetRequestArgs): Promise<unknown> => {
  try {
    const response = await api.get(route);
    return response.data;
  } catch (error) {
    console.error("Error al hacer GET:", error);
    throw error;
  }
};
