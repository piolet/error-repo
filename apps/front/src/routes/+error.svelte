<script>
  import { page } from '$app/stores';
</script>

<h1>Error page</h1>
<h2>{$page.status}: {$page.error?.message}</h2>

<a href="/">back</a>