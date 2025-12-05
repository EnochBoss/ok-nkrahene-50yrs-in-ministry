import { useEffect } from "react";
import { setMeta } from "../utils/seo";
import DownloadProgramme from "../components/DownloadProgramme";

export default function Programme() {
  useEffect(() => {
    setMeta({
      title: "Programme — Rev. O. K. Nkrahene",
      description: "Anniversary programme for Rev. O. K. Nkrahene's 50 Years in Ministry."
    });
  }, []);

  const programme = [
    { activity: "Arrival and Registration", facilitator: "Ushers/Registration Team" },
    { activity: "Opening Prayer", facilitator: "Rev. Mrs. Marian Kwarteng" },
    { activity: "Welcome and Introduction of Chairman", facilitator: "Mrs. Adjei-Sam" },
    { activity: "Chairman’s Response & Purpose of Gathering", facilitator: "Mr. Osei Kwasi Nkrahene" },
    { activity: "Thanksgiving & Celebration Music", facilitator: "Mrs. Lena Asare" },
    { activity: "Choral Song", facilitator: "Tabernacle Choir" },
    { activity: "Testimonies (1 Live, others in video)", facilitator: "MC/Media Team" },
    { activity: "Choral Music for Dancing", facilitator: "Tabernacle Choir" },
    { activity: "Excerpts of the Book", facilitator: "Rev. Frank Addae" },
    { activity: "Book Launch and Sales", facilitator: "Mr. S.M. Quartey" },
    { activity: "Anniversary Song 1", facilitator: "Tabernacle Choir" },
    { activity: "Response from Celebrant", facilitator: "Rev. O.K. Nkrahene" },
    { activity: "Prayer for Celebrant & Family", facilitator: "Rev. Dr. Yaw Oppong-Ankomah" },
    { activity: "Anniversary Song 2", facilitator: "Tabernacle Choir" },
    { activity: "Refreshment", facilitator: "Protocol Team" },
    { activity: "Closing Remarks", facilitator: "Mr. Kwame Gyan Tawiah" },
    { activity: "Vote of Thanks", facilitator: "Mrs. Nana Ekua Albert-Viala" },
    { activity: "Closing Prayer & Benediction", facilitator: "Rev. Victor Brew" },
  ];

  const photographyOrder = [
    "Ministers",
    "Planning Committee",
    "Nuclear Family",
    "Extended Family",
    "The Couple",
    "",
    "____👇 Churches 👇____",
    "Adenta Baptist Church",
    "First Baptist Church",
    "Redemption Baptist Church",
    "Living Word Baptist Church & her daughter Churches",
    "",
    "REBAMA",
    "Dangbe-West Baptist Association",
    "Dangbe-East Baptist Association",
    "Tema Central Baptist Association",
    "NGBTS (All year groups, Lecturers & Staff)"
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 text-[var(--text)]">
      <h1 className="text-3xl font-bold mb-2">Programme Outline</h1>
      <p className="text-[var(--muted)] mb-4">Celebration & Autobiography Book Launch</p>

      <DownloadProgramme />

      {/* PROGRAMME LIST */}
      <div className="mt-8 space-y-4">
        {programme.map((item, idx) => (
          <div
            key={idx}
            className="bg-[var(--surface)] p-4 rounded-lg shadow border-[var(--gold-dark)/20]"
          >
            <div>
              <p className="font-bold text-lg text-[var(--gold-light)]">{item.activity}</p>
              <p className="text-sm text-[var(--muted)]">{item.facilitator}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ORDER OF PHOTOGRAPHY */}
      <h2 className="text-2xl font-bold mt-12 mb-4">Order of Photography</h2>

      <div className="bg-[var(--surface)] p-4 rounded-lg shadow border border-[var(--gold-dark)/20]">
        <ul className="space-y-2 pl-6">
          {photographyOrder.map((item, idx) => {
            const isNoBullet = /👇 Churches 👇/i.test(item);
            const isEmpty = !item || item.trim() === "";
            return (
              <li
                key={idx}
                className={`text-[var(--text)] ${isNoBullet ? 'list-none pl-0' : 'list-disc'} ${isEmpty ? 'list-none pl-0' : 'list-disc'}`}
              >
                {item || <br />}
              </li>
            );
          })}
        </ul>
      </div>

      {/* MCs */}
      <p className="mt-8 text-sm text-[var(--muted)] italic">
        MCs: Mr. Michael Kabutey Caesar & Deacon Nana Yaw Opoku Danso
      </p>
    </div>
  );
}





// Same code with the original time and duration fields for reference:

// import { useEffect } from "react";
// import { setMeta } from "../utils/seo";
// import DownloadProgramme from "../components/DownloadProgramme";

// export default function Programme() {
//   useEffect(() => {
//     setMeta({
//       title: "Programme — Rev. O. K. Nkrahene",
//       description: "Anniversary programme for Rev. O. K. Nkrahene's 50 Years in Ministry."
//     });
//   }, []);

//   const programme = [
//     { time: "9:30 – 10:00", duration: "30 min", activity: "Arrival and Registration", facilitator: "Ushers/Registration Team" },
//     { time: "10:00 – 10:05", duration: "5 min", activity: "Opening Prayer", facilitator: "Rev. Mrs. Marian Kwarteng" },
//     { time: "10:05 – 10:12", duration: "7 min", activity: "Welcome and Introduction of Co-Chairman", facilitator: "Mrs. Adjei-Sam" },
//     { time: "10:12 – 10:22", duration: "10 min", activity: "Co-Chairman’s Response & Purpose of Gathering", facilitator: "Mr. Osei Kwasi Nkrahene" },
//     { time: "10:22 – 10:32", duration: "7–10 min", activity: "Thanksgiving & Celebration Music", facilitator: "Mrs. Lena Asare" },
//     { time: "10:32 – 10:37", duration: "5 min", activity: "Choral Song", facilitator: "Tabernacle Choir" },
//     { time: "10:37 – 11:12", duration: "35 min", activity: "Testimonies (1 Live, others in video)", facilitator: "MC/Media Team" },
//     { time: "11:12 – 11:17", duration: "5 min", activity: "Choral Music for Dancing", facilitator: "Tabernacle Choir" },
//     { time: "11:12 – 11:22", duration: "10 min", activity: "Excerpts of the Book", facilitator: "Rev. Frank Addae" },
//     { time: "11:22 – 11:52", duration: "30 min", activity: "Book Launch and Sales", facilitator: "Mr. S.M. Quartey" },
//     { time: "11:52 – 11:55", duration: "3 min", activity: "Anniversary Song 1", facilitator: "Tabernacle Choir" },
//     { time: "11:55 – 12:03", duration: "8 min", activity: "Response from Celebrant", facilitator: "Rev. O.K. Nkrahene" },
//     { time: "12:03 – 12:11", duration: "8 min", activity: "Prayer for Celebrant & Family", facilitator: "Rev. Dr. Yaw Oppong-Ankomah" },
//     { time: "12:11 – 12:16", duration: "5 min", activity: "Anniversary Song 2", facilitator: "Tabernacle Choir" },
//     { time: "12:16+", duration: "", activity: "Refreshment", facilitator: "Protocol Team" },
//     { time: "", duration: "", activity: "Closing Remarks", facilitator: "Mr. Kwame Gyan Tawiah" },
//     { time: "", duration: "", activity: "Vote of Thanks", facilitator: "Mrs. Nana Ekua Albert-Viala" },
//     { time: "", duration: "", activity: "Closing Prayer & Benediction", facilitator: "Rev. Victor Brew" },
//   ];

//   const photographyOrder = [
//     "Ministers",
//     "Planning Committee",
//     "Nuclear Family",
//     "Extended Family",
//     "The Couple",
//     "",
//     "____👇 Churches 👇____",
//     "Adenta Baptist Church",
//     "First Baptist Church",
//     "Redemption Baptist Church",
//     "Living Word Baptist Church & her daughter Churches",
//     "",
//     "REBAMA",
//     "Dangbe-West Baptist Association",
//     "Dangbe-East Baptist Association",
//     "Tema Central Baptist Association",
//     "NGBTS (All year groups, Lecturers & Staff)"
//   ];

//   return (
//     <div className="max-w-4xl mx-auto p-6 text-[var(--text)]">
//       <h1 className="text-3xl font-bold mb-2">Programme Outline</h1>
//       <p className="text-[var(--muted)] mb-4">Celebration & Autobiography Book Launch</p>

//       <DownloadProgramme />

//       {/* PROGRAMME LIST */}
//       <div className="mt-8 space-y-4">
//         {programme.map((item, idx) => (
//           <div
//             key={idx}
//             className="bg-[var(--surface)] p-4 rounded-lg shadow border-[var(--gold-dark)/20]"
//           >
//             <div className="flex justify-between items-start">
//               <div>
//                 <p className="font-bold text-lg text-[var(--gold-light)]">{item.activity}</p>
//                 {/* text-[var(--gold-light)] */}
//                 <p className="text-sm text-[var(--muted)]">{item.facilitator}</p>
//               </div>
//               <div className="text-right">
//                 <p className="text-sm">{item.time}</p>
//                 {item.duration && (
//                   <p className="text-xs text-[var(--muted)]">{item.duration}</p>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ORDER OF PHOTOGRAPHY */}
//       <h2 className="text-2xl font-bold mt-12 mb-4">Order of Photography</h2>

//       <div className="bg-[var(--surface)] p-4 rounded-lg shadow border border-[var(--gold-dark)/20]">
//         <ul className="space-y-2 pl-6">
//           {photographyOrder.map((item, idx) => {
//             // If item contains "Church", remove bullet
//             const isNoBullet = /👇 Churches 👇/i.test(item);
//             const isEmpty = !item || item.trim() === "";
//             return (
//               <li
//                 key={idx}
//                 className={`text-[var(--text)] ${isNoBullet ? 'list-none pl-0' : 'list-disc'} ${isEmpty ? 'list-none pl-0' : 'list-disc'}`}
//               >
//                 {item || <br />}
//               </li>
//             );
//           })}
//         </ul>
//       </div>

//       {/* MCs */}
//       <p className="mt-8 text-sm text-[var(--muted)] italic">
//         MCs: Mr. Michael Kabutey Caesar & Deacon Nana Yaw Opoku Danso
//       </p>
//     </div>
//   );
// }
