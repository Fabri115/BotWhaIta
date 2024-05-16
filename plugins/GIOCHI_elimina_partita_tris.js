import MessageType from '@whiskeysockets/baileys';
const handler = async (m, {conn, usedPrefix, command}) => {
  const room = Object.values(conn.game).find((room) => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender));
  if (room == undefined) return conn.sendButton(m.chat, '*[❗] 𝙽𝙾N SEI IN NESSUN GIOCO*', wm, null, [['𝙸𝙽𝙸ZIA SALA GIOCO', `${usedPrefix}ttt partita nuova`]], m);
  delete conn.game[room.id];
  await m.reply('*[ ✔ ]   LA SALA DI GIOCO E' STATA ELIMINATA*');
};
handler.command = /^(delttt|deltt|delxo|deltictactoe)$/i;
handler.fail = null;
export default handler;
