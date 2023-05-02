# Discord Typing Indicator Plugin

This is a plugin for BetterDiscord that adds a typing indicator to the text input field in Discord. It creates a border on the right side of the input field that appears to be typing, similar to the typing style in Linux terminal. The plugin adds a 10px solid border on the right side of the input field with a transparent color to give the impression of typing.

## Installation

To use this plugin, you must have BetterDiscord installed on your computer. If you do not have BetterDiscord installed, you can download it from the [official website](https://betterdiscord.app/).

1. Download the `discord-typing-indicator-plugin.js` file from this repository of my github as of know [here](https://github.com/VeereswarG/BetterDiscord-Enhancements/blob/main/DiscordTypingIndicator/discord-typing-indicator-plugin.js) you can find this plugin if possiable later some time in betterdiscord official website.
2. Move/copy the file to the BetterDiscord plugins directory. You can find this directory by going to Discord's settings, then navigating to the "Plugins" tab and clicking the "Open Plugin Folder" button.
3. Reload Discord by pressing `Ctrl+R` or by restarting the application.
4. Enable the plugin by going to Discord's settings, then navigating to the "Plugins" tab and toggling the switch for the "Discord Typing Indicator Plugin".

## Example

<p align="center">
  <img src="https://github.com/VeereswarG/BetterDiscord-Enhancements/blob/main/img/typing-indicator.gif?raw=true" alt="Typing Indicator">
</p>


## Usage

Once the plugin is enabled, a typing indicator will appear on the right side of the text input field whenever you type in a chat. The indicator will disappear when you stop typing.


## Custom CSS for Discord Typing Indicator

This is a custom CSS plugin for BetterDiscord that adds a typing indicator to the text input field in Discord. It creates a border on the right side of the input field that appears to be typing, similar to the Linux terminal typing style.

### Installation (this is for plugin only)

1. First, make sure you have BetterDiscord installed. If you haven't, you can download it [here](https://betterdiscord.net/home/).
2. Download the `discord-typing-indicator-plugin.js` file from this [GitHub repository](https://github.com/VeereswarG/BetterDiscord-Enhancements/blob/main/DiscordTypingIndicator/discord-typing-indicator-plugin.js).
3. Move the `discord-typing-indicator-plugin.js` file to the BetterDiscord plugins folder. The default location for this folder is `C:\Users\[Your User]\AppData\Roaming\BetterDiscord\plugins`.

## Use as css.

1. Open Discord and navigate to User Settings > BetterDiscord > Custom CSS.
2. In the Custom CSS editor, add the following code snippet at the end of the file:

```css
div[data-slate-node="element"] span[data-slate-node="text"] {
  border-right: 10px solid #d3d3d3;
}
```

3. Save the changes and restart Discord.
4. You should now see the typing indicator in the text input field when you type a message.

### Customization

You can customize the typing indicator by modifying the CSS code. To change the color of the typing indicator, replace `#d3d3d3` in the code with the color of your choice. 

```css
div[data-slate-node="element"] span[data-slate-node="text"] {
  border-right: 10px solid #ff0000; /* Red color */
}
```

### Example

![Discord Typing Indicator Example](https://i.imgur.com/v4hXIiI.png)

### Credits

This plugin was created by [Veereswar G](https://github.com/VeereswarG).

## Contributing

If you find any issues with this plugin or would like to suggest a feature, please open an issue on this repository. Pull requests are also welcome.

## License

This plugin is licensed under the [MIT License](LICENSE).
