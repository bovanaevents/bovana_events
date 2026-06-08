# Bovana Events — Static Site

Open `index.html` directly in a browser, or host on any static host (Netlify, Vercel, GitHub Pages, S3, etc.).

## Connecting the "Request an Invitation" form to Google Sheets

The form posts submissions to a Google Apps Script Web App, which appends a row to your sheet.

### 1. Create the Apps Script

Open your Google Sheet → **Extensions → Apps Script**, replace the file contents with:

```javascript
function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.name   || "",
    data.phone  || "",
    data.theme  || "",
    data.guests || "",
    data.date   || ""
  ]);
  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### 2. Deploy as a Web App

**Deploy → New deployment → Type: Web app**
- Execute as: **Me**
- Who has access: **Anyone**

Copy the generated `/exec` URL.

### 3. Paste the URL into `script.js`

Find this line near the bottom of `script.js`:

```js
const APPS_SCRIPT_URL = "PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE";
```

Replace with your URL. Done — submissions will land in row order in your sheet.

### Suggested header row (row 1 of the sheet)

| Timestamp | Name | Phone | Theme | Guests | Date |
