<script>
    export let data;
</script>

<h1>{data.ok}</h1>
<a href="/hello">existing static route</a><br>
<a href="/hi">existing dynamic route</a><br>
<a href="/bye">not existing dynamic route (expected 404)</a>
