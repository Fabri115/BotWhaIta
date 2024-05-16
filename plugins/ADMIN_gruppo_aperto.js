const handler = async (m, {conn, args, usedPrefix, command}) => {
  const isClose = { // Switch Case Like :v
    '': 'not_announcement',
  }[(args[0] || '')];
  if (isClose === undefined) {
    return;
  }
  await conn.groupSettingUpdate(m.chat, isClose);
  m.reply('𝒐𝒉 𝒎𝒂 𝒃𝒖𝒐𝒏𝒈𝒊𝒐𝒓𝒏𝒐 𝒎𝒆𝒓𝒅𝒆!');
};
handler.help = ['group open / close', 'gruppo aperto / chiuso'];
handler.tags = ['group'];
handler.command = /^(aperto)$/i;
handler.admin = true;
handler.botAdmin = true;
export default handler;
