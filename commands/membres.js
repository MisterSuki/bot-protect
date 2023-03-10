const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`;

module.exports = {
  name: "membercount",
  category: "info",
  run: async (client, message, args) => {
    const Members = message.guild.memberCount;
    const bots = message.guild.members.cache.filter(
      member => member.bot === true
    ).size;
    const humans = message.guild.members.cache.filter(
      member => !member.user.bot
    ).size;
    const online = message.guild.members.cache.filter(
      member => member.presence.status === "online"
    ).size;
    const offline = message.guild.members.cache.filter(
      member => member.presence.status === "offline"
    ).size;
    const dnd = message.guild.members.cache.filter(
      member => member.presence.status === "dnd"
    ).size;
    const idle = message.guild.members.cache.filter(
      member => member.presence.status === "idle"
    ).size;

    const embed = new MessageEmbed()
      .setColor(`${Color}`)
      .setTitle(`Informations sur les membres`)
      .addField(`Tous les membres`, Members)
      .addField(`membres`, humans)
      .addField(`Bots`, bots)
      .addField(
        `Statut des membres`,
        `Online: ${online} | Do Not Disturb: ${dnd} | Idle: ${idle} | Offline: ${offline}`
      )
      .setTimestamp();

    message.channel.send(embed);
  }
};
