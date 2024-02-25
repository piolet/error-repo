import { error } from '@sveltejs/kit'

export class SlugService {

  public async fetchBySlug(
    slug: string | undefined
  ): Promise<any> {
    const message = 'Place not found'
    console.log('slug service 1', slug, message)
    if (!slug) error(404, message)
    if (slug !== "hi") error(404, message)

    return Promise.resolve({
      message: "ok"
    })
  }
}