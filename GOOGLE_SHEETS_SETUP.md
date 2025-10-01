# Google Sheets Integration - COMPLETE SETUP REQUIRED

## ⚠️ IMPORTANT: Integration Not Yet Active
Your enrollment form is ready but needs ONE final step to connect to Google Sheets.

**What you need to do:** Deploy a Google Apps Script web app and update the URL in the code (5-10 minutes)

## Your Google Spreadsheet
Spreadsheet URL: https://docs.google.com/spreadsheets/d/1Yf5S949IZzQsuWfopvDme5gSxfhxV7mdnVpPUczpG2s/edit?gid=0#gid=0

---

## Step-by-Step Setup Instructions

### Step 1: Open Google Apps Script
1. Open your Google Spreadsheet
2. Click on **Extensions** → **Apps Script**

### Step 2: Create the Web App Script
Replace any existing code with the following script:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming JSON data
    var data = JSON.parse(e.postData.contents);
    
    // Check if headers exist, if not, add them
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Parent Name',
        'Relationship',
        'Address',
        'Phone',
        'Email',
        'Preferred Branch',
        'Child Name',
        'Gender',
        'Date of Birth',
        'Age',
        'School/Grade',
        'Medical Notes'
      ]);
    }
    
    // Append the new data
    sheet.appendRow([
      data.timestamp,
      data.parentName,
      data.relationship,
      data.address,
      data.phone,
      data.email,
      data.preferredBranch,
      data.childName,
      data.gender,
      data.dateOfBirth,
      data.age,
      data.school,
      data.medicalNotes
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({status: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(error) {
    return ContentService
      .createTextOutput(JSON.stringify({status: 'error', message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Step 3: Deploy as Web App
1. Click the **Deploy** button (top right)
2. Select **New deployment**
3. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
4. Configure the deployment:
   - **Description**: Enrollment Form Handler
   - **Execute as**: Me
   - **Who has access**: Anyone
5. Click **Deploy**
6. **Copy the Web App URL** - you'll need this in the next step

### Step 4: Update the Form Code (CRITICAL STEP)
1. After deploying, you'll get a URL that looks like:
   ```
   https://script.google.com/macros/s/AKfycby...LONG_ID.../exec
   ```
2. **COPY THIS ENTIRE URL**
3. Come back to this chat and paste it with this message:
   ```
   Update the form with this URL: [paste your URL here]
   ```
4. I'll automatically update your ContactForm.tsx file with the correct URL

### Step 5: Test the Integration
1. Go to your website
2. Fill out the enrollment form
3. Click "Enroll Now"
4. Check your Google Spreadsheet - the data should appear in a new row

## Troubleshooting

### Form submission doesn't show errors but data doesn't appear
- Make sure you deployed the script as "Anyone" can access
- Verify the Web App URL is correctly pasted in ContactForm.tsx
- Check that the spreadsheet is not protected or locked

### "Authorization required" error
- Re-deploy the script and make sure to authorize it when prompted
- Ensure "Execute as: Me" is selected

### Data appears in wrong columns
- Delete all rows except the header row
- Submit a new form entry to verify the columns align correctly

## Data Fields Captured
The form captures the following information:
- Timestamp
- Parent Information (Name, Relationship, Address, Phone, Email)
- Preferred Branch
- Child Information (Name, Gender, Date of Birth, Age, School/Grade)
- Medical Notes

## Security Notes
- The Web App URL should be kept private
- Only share it with authorized personnel
- Consider setting up email notifications for new submissions
- Regularly backup your spreadsheet data
