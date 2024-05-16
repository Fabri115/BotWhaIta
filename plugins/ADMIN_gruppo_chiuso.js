const handler = async (m, {conn, args, usedPrefix, command}) => {
  const isClose = { // Switch Case Like :v
    '': 'announcement',
  }[(args[0] || '')];
  if (isClose === undefined) {
    return;
  }
  await conn.groupSettingUpdate(m.chat, isClose);
  m.reply('◤✞ 𝖈𝖍𝖆𝖙 𝖉𝖊𝖌𝖑𝖎 𝖉𝖊𝖎 𝖆𝖙𝖙𝖎𝖛𝖆𝖙𝖆 ✞◥');
};
handler.help = ['group open / close', 'gruppo aperto / chiuso'];
handler.tags = ['group'];
handler.command = /^(chiuso)$/i;
handler.admin = true;
handler.botAdmin = true;
export default handler;
