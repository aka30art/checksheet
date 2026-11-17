# Kiverco Plant Checksheet

A mobile-first plant inspection checklist and print-to-PDF report generator.

## Included
- 14 equipment sections and 65 checkpoints.
- Per-check status: OK, Low, Medium, High, NO START.
- Per-check hours and comment/defect details.
- Operator, inspection date, plant and optional shift/notes.
- Completion and defect counters.
- Automatic local-device progress saving.
- Print-ready A4 PDF layout using the browser's Save as PDF / Print workflow.
- Installable PWA shell with offline caching.

## Deploy
The repository is configured as a static site. Enable GitHub Pages:
1. Open repository Settings → Pages.
2. Under Build and deployment, select Deploy from a branch.
3. Choose `main` and `/ (root)`, then Save.
4. Open the published Pages URL on your phone and use the browser's Add to Home Screen option.

## PDF
Tap Generate PDF. In the print dialog choose Save as PDF (or Print on the device). All checklist sections print, including unchecked items; statuses, hours and comments are included.

## Privacy / data
Inspection data is saved in localStorage on the device/browser being used. It is not synchronised between devices or uploaded to a server. Use the PDF output as the formal retained record.
