import { error } from '@sveltejs/kit'

export class SlugService {

  public async fetchBySlug(
    slug: string | undefined
  ): Promise<any> {
    const message = 'Place not found'
    if (!slug) throw error(404, message)
    if (slug !== "hi") throw error(404, message)

    return Promise.resolve({
      message: "ok"
    })
  }
}