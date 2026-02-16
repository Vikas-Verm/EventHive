// stress_test.js
import axios from "axios";

const URL = "http://localhost:5000/api/bookings/";
// REPLACE THIS WITH A REAL TICKET ID FROM YOUR DB THAT IS 'AVAILABLE'
const TICKET_ID = "1f52eed2-f4ac-439b-ae88-8701eb950600";
const EVENT_ID = "8342cf06-7f80-4d23-a76f-67ee367105f6";

const TOKEN_A =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI3N2ExNzUzLTU4MTMtNGZjYS04Zjg2LTdlMWM2YzZmM2Y5ZSIsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTc3MDc0NjE0NiwiZXhwIjoxNzcwODMyNTQ2fQ.Np2Z2NAbq3DlHf79iHsY7fBtIMddeEZM4AdNEcFPo4g";
const TOKEN_B =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU1YjM0OWE5LTFmNTgtNGVhOS1iNDlhLTQ1ZGVkNzE0MTRjNSIsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTc3MDc0NjIxNCwiZXhwIjoxNzcwODMyNjE0fQ.LePYbdbPeuzGi7Rx2pLf0bqMKkuY4GoOlPVo74qx_UA";

const bookTicket = async (user, token) => {
  try {
    const res = await axios.post(
      URL,
      {
        event_id: EVENT_ID,
        ticket_id: TICKET_ID,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(`✅ ${user} Success:`, res.data.message);
  } catch (err) {
    console.log(
      `❌ ${user} Failed:`,
      err.response ? err.response.data.error : err.message
    );
  }
};

console.log("--- Starting Race Condition Test ---");

// We fire both requests immediately without waiting
Promise.all([bookTicket("User A", TOKEN_A), bookTicket("User B", TOKEN_B)]);
