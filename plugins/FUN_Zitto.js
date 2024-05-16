const handler = async (m, {
  conn, groupMetadata,
}) => {
  if (!m.isGroup) {
    throw '';
  }
  const gruppi = global.db.data.chats[m.chat];
  if (gruppi.spacobot === false) {
    throw 'Sto già dormendo, sei tu che non devi rompermi il cazzo';
  }
  global.db.data.chats[m.chat].spacobot = false;
  m.reply(`Mi metto a dormi' va. Svegliatemi quando mi volete dicendo sveglia dadde' 😴`);
};
handler.customPrefix = /dormi dadde/i;
handler.command = new RegExp;
handler.admin = true;
export default handler;
