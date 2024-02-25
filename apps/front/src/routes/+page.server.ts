import type { ServerLoadEvent } from "@sveltejs/kit";

export const load = async (event: ServerLoadEvent) => {
  return {
    ok: "cool"
  }
}