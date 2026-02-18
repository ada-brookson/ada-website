## Quick setup

You will need to create a new application with a bot, add the bot to your server, and pair it to OpenClaw. We recommend adding your bot to your own private server. If you don't have one yet, [create one first](https://support.discord.com/hc/en-us/articles/204849977-How-do-I-create-a-server) (choose **Create My Own > For me and my friends**).

<Steps>
  <Step title="Create a Discord application and bot">
    Go to the [Discord Developer Portal](https://discord.com/developers/applications) and click **New Application**. Name it something like "OpenClaw".

    Click **Bot** on the sidebar. Set the **Username** to whatever you call your OpenClaw agent.
  </Step>

  <Step title="Enable privileged intents">
    Still on the **Bot** page, scroll down to **Privileged Gateway Intents** and enable:

    - **Message Content Intent** (required)
    - **Server Members Intent** (recommended; required for role allowlists and name-to-ID matching)
    - **Presence Intent** (optional; only needed for presence updates)
  </Step>

  <Step title="Copy your bot token">
    Scroll back up on the **Bot** page and click **Reset Token**.

    <Note>
    Despite the name, this generates your first token — nothing is being "reset."
    </Note>

    Copy the token and save it somewhere. This is your **Bot Token** and you will need it shortly.
  </Step>

  <Step title="Generate an invite URL and add the bot to your server">
    Click **OAuth2** on the sidebar. You'll generate an invite URL with the right permissions to add the bot to your server.

    Scroll down to **OAuth2 URL Generator** and enable:

    - `bot`
    - `applications.commands`

    A **Bot Permissions** section will appear below. Enable:

    - View Channels
    - Send Messages
    - Read Message History
    - Embed Links
    - Attach Files
    - Add Reactions (optional)

    Copy the generated URL at the bottom, paste it into your browser, select your server, and click **Continue** to connect. You should now see your bot in the Discord server.
  </Step>

  <Step title="Enable Developer Mode and collect your IDs">
    Back in the Discord app, you need to enable Developer Mode so you can copy internal IDs.

    1. Click **User Settings** (gear icon next to your avatar) → **Advanced** → toggle on **Developer Mode**
    2. Right-click your **server icon** in the sidebar → **Copy Server ID**
    3. Right-click your **own avatar** → **Copy User ID**

    Save your **Server ID** and **User ID** alongside your Bot Token — you'll send all three to OpenClaw in the next step.
  </Step>

  <Step title="Allow DMs from server members">
    For pairing to work, Discord needs to allow your bot to DM you. Right-click your **server icon** → **Privacy Settings** → toggle on **Direct Messages**.

    This lets server members (including bots) send you DMs. You can turn it off after pairing if you prefer.
  </Step>

  <Step title="Configure OpenClaw and pair">

    <Tabs>
      <Tab title="Ask your agent">
        Chat with your OpenClaw agent on any existing channel (e.g. Telegram) and tell it:

        > "I want to set up Discord as a channel in OpenClaw. Here is my Bot Token: `<token>`, User ID: `<user_id>`, and Server ID: `<server_id>`"

        Your agent will update the config and restart the gateway.
      </Tab>
      <Tab title="CLI / config">
        Add the token to your config:

```json5
{
  channels: {
    discord: {
      enabled: true,
      token: "YOUR_BOT_TOKEN",
    },
  },
}
```

        Env fallback for the default account:

```bash
DISCORD_BOT_TOKEN=...
```

        Then restart the gateway:

```bash
openclaw gateway restart
```
      </Tab>
    </Tabs>
  </Step>

  <Step title="Approve first DM pairing">
    Wait until the gateway restarts, then DM your bot in Discord. It will respond with a pairing code.

    <Tabs>
      <Tab title="Ask your agent">
        Send the pairing code to your agent on your existing channel:

        > "Approve this Discord pairing code: `<CODE>`"
      </Tab>
      <Tab title="CLI">

```bash
openclaw pairing list discord
openclaw pairing approve discord <CODE>
```
      </Tab>
    </Tabs>

    Pairing codes expire after 1 hour.

    You should now be able to chat with your agent in Discord via DM.
  </Step>
</Steps>

<Note>
Token resolution is account-aware. Config token values win over env fallback. `DISCORD_BOT_TOKEN` is only used for the default account.
</Note>

## Recommended: Set up a guild workspace

Once DMs are working, you can set up your Discord server as a full workspace where each channel gets its own agent session with its own context. This is recommended for private servers where it's just you and your bot.

<Steps>
  <Step title="Add your server to the guild allowlist">
    This enables your agent to respond in any channel on your server, not just DMs.

    <Tabs>
      <Tab title="Ask your agent">
        > "Add my Discord Server ID `<server_id>` to the guild allowlist"
      </Tab>
      <Tab title="Config">

```json5
{
  channels: {
    discord: {
      groupPolicy: "allowlist",
      guilds: {
        "YOUR_SERVER_ID": {
          requireMention: true,
          users: ["YOUR_USER_ID"],
        },
      },
    },
  },
}
```
      </Tab>
    </Tabs>
  </Step>

  <Step title="Allow responses without @mention">
    By default, your agent only responds in guild channels when @mentioned. For a private server, you probably want it to respond to every message.

    <Tabs>
      <Tab title="Ask your agent">
        > "Allow my agent to respond on this server without having to be @mentioned"
      </Tab>
      <Tab title="Config">
        Set `requireMention: false` in your guild config:

```json5
{
  channels: {
    discord: {
      guilds: {
        "YOUR_SERVER_ID": {
          requireMention: false,
        },
      },
    },
  },
}
```
      </Tab>
    </Tabs>
  </Step>

  <Step title="Enable memory access for guild channels">
    By default, long-term memory (MEMORY.md) only loads in DM sessions. If this is a private server, you probably want your agent to have full memory in every channel.

    <Tabs>
      <Tab title="Ask your agent">
        > "Update AGENTS.md to load MEMORY.md for my Discord server in all channels"
      </Tab>
      <Tab title="Manual">
        Add your guild ID to a trusted contexts list in your `AGENTS.md` file. For example:

```markdown
### Trusted Contexts (treat like main session for memory access)
- Direct chats (DMs) on any channel
- Discord guild `YOUR_SERVER_ID`
```
      </Tab>
    </Tabs>
  </Step>
</Steps>

Now create some channels on your Discord server and start chatting. Your agent can see the channel name, and each channel gets its own isolated session — so you can set up `#coding`, `#home`, `#research`, or whatever fits your workflow.
