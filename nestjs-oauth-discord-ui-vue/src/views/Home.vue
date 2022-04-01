<template>
  <div class="home">
    Welcome!
    <a :href="url">Sign in with Discord</a>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    query: {
      client_id: process.env.DISCORD_CLIENT_ID,
      redirect_uri: process.env.DISCORD_REDIRECT_URL,
      response_type: 'code',
      scope: 'identify',
    },
    url: 'https://discord.com/api/oauth2/authorize?',
  }),
  mounted() {
    this.url += Object.entries(this.query)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');
  }
}
</script>
