import { api } from "./api";

type PatchRequestArgs = {
  route: string;
  body: any;
};

export const patchRequest = async ({ route, body }: PatchRequestArgs): Promise<void> => {
  try {
    await api.patch(route, body);
    console.log("Datos enviados correctamente");
  } catch (error) {
    console.error("Error al hacer PATCH:", error);
  }
};
