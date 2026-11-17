// Piyamit ต้นแบบในเครื่อง · ฉบับร่าง สำหรับครูออมตรวจและอนุมัติ · ห้ามเผยแพร่ก่อนอนุมัติ
// ใช้ publishable key (คีย์สาธารณะสำหรับฝั่งแอป) เรียกได้เฉพาะ RPC py_* ตาราง py_* ปิดการเข้าถึงตรง
const PY = {
  url: "https://flqejubdqeyynmkphcho.supabase.co/rest/v1/rpc/",
  key: "sb_publishable_2fh-G8mTX3uuaTHH_l_nmg_gfYNLE3d",
  draft: "ฉบับร่าง สำหรับครูออมตรวจและอนุมัติ",
};
async function rpc(fn, params) {
  const r = await fetch(PY.url + fn, { method: "POST", headers: { apikey: PY.key, "Content-Type": "application/json" }, body: JSON.stringify(params || {}) });
  const d = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(d.message || ("HTTP " + r.status));
  return d;
}
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const VERIFY = { helix: ["หัวข้อเทอม 2 จาก Helix", "ok"], helix_mapped: ["แยกสาระจากวิทย์บูรณาการ (Helix)", "ok"], unverified: ["ยังยืนยันเทอมไม่ได้", "warn"], missing: ["ยังไม่มีหัวข้อ", "bad"] };
const LEVELS = ["", "ด่าน 1 พื้นฐาน", "ด่าน 2 ฝึกใช้", "ด่าน 3 ประยุกต์", "ด่าน 4 ท้าทาย"];
